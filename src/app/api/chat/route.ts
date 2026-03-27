// src/app/api/chat/route.ts
import { NextRequest } from 'next/server'
import { GoogleGenAI } from '@google/genai'
import { extractWebsiteContent } from '@/lib/extract-content'

export const runtime = 'nodejs'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

const OFF_TOPIC =
  'Para ese tipo de consultas, te recomendamos contactarnos directamente: ' +
  'puedes usar nuestro [formulario de contacto](/contacto) o llamarnos al ' +
  '**+34 944 100 462** — estaremos encantados de ayudarte.'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json() as {
      messages: { role: 'user' | 'model'; content: string }[]
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Bad request', { status: 400 })
    }

    if (messages.length > 50) {
      return new Response('Bad request', { status: 400 })
    }

    const MAX_MESSAGE_LENGTH = 2000
    if (messages.some((m: { role: string; content: string }) => typeof m.content !== 'string' || m.content.length > MAX_MESSAGE_LENGTH)) {
      return new Response('Bad request', { status: 400 })
    }

    const websiteContent = await extractWebsiteContent()

    const systemInstruction =
      `Eres el asistente virtual de Comercial MAR'O, empresa especializada en ` +
      `carpintería metálica (ventanas, puertas, cerramientos, pérgolas y persianas) ` +
      `con sede en Bilbao. Respondes en español, de forma amable y profesional.\n\n` +
      `Responde ÚNICAMENTE en base al contenido de la web que se te proporciona a ` +
      `continuación. Si la pregunta no puede responderse con ese contenido, usa ` +
      `exactamente este mensaje:\n"${OFF_TOPIC}"\n\n` +
      `=== CONTENIDO DE LA WEB ===\n${websiteContent}`

    const contents = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }],
    }))

    const stream = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      config: { systemInstruction },
      contents,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text
            if (text) controller.enqueue(encoder.encode(text))
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[Chat API]', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

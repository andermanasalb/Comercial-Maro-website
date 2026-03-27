'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { X, MessageCircle, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  from: 'user' | 'bot'
  text: string
}

const STORAGE_KEY = 'maro-chat-history'
const MAX_HISTORY = 50

const WELCOME: Message = {
  from: 'bot',
  text: "¡Hola! Soy el asistente de Comercial MAR'O. ¿En qué puedo ayudarte hoy?",
}

function loadHistory(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return [WELCOME]
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [WELCOME]
  } catch {
    return [WELCOME]
  }
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load history from localStorage on mount
  useEffect(() => {
    setMessages(loadHistory())
  }, [])

  // Listen for external open trigger (e.g. footer link)
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('chat:open', handler)
    return () => window.removeEventListener('chat:open', handler)
  }, [])

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  const send = useCallback(async () => {
    const text = input.trim()
    if (!text || isStreaming) return

    const userMsg: Message = { from: 'user', text }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setIsTyping(true)
    setIsStreaming(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((m, i) => !(i === 0 && m.from === 'bot'))
            .map(m => ({
              role: m.from === 'user' ? 'user' : 'model',
              content: m.text,
            })),
        }),
      })

      if (!res.ok || !res.body) throw new Error(`API error ${res.status}`)

      setIsTyping(false)
      setMessages(m => [...m, { from: 'bot', text: '' }])

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages(m => {
          const copy = [...m]
          copy[copy.length - 1] = { from: 'bot', text: accumulated + '▌' }
          return copy
        })
      }

      accumulated += decoder.decode()

      // Remove cursor on completion
      setMessages(m => {
        const copy = [...m]
        copy[copy.length - 1] = { from: 'bot', text: accumulated }
        return copy
      })

      // Persist to localStorage (max 50 messages)
      const finalHistory = [...updatedMessages, { from: 'bot' as const, text: accumulated }]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalHistory.slice(-MAX_HISTORY)))
    } catch {
      setIsTyping(false)
      setMessages(m => [...m, {
        from: 'bot',
        text: 'Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos al +34 944 100 462.',
      }])
    } finally {
      setIsStreaming(false)
    }
  }, [input, messages, isStreaming])

  return (
    <>
      {/* Floating button — hidden while panel is open */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="chat-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => setOpen(true)}
            aria-label="Abrir chat"
            className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-rojo shadow-lg flex items-center justify-center text-white hover:bg-rojo-oscuro transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo focus-visible:ring-offset-2"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="fixed bottom-6 right-6 z-[60] w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-white"
            style={{ maxHeight: '520px' }}
          >
            {/* Header */}
            <div className="bg-carbon px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-rojo flex items-center justify-center flex-shrink-0">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-montserrat text-[13px] font-bold text-white leading-none">
                  Asistente MAR&apos;O
                </p>
                <p className="text-[11px] text-arena mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  En línea
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="text-white/50 hover:text-white transition-colors cursor-pointer p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={[
                    'max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed font-inter',
                    msg.from === 'user'
                      ? 'bg-rojo text-white rounded-2xl rounded-tr-sm'
                      : 'bg-crema text-carbon rounded-2xl rounded-tl-sm',
                  ].join(' ')}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-crema px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gris-medio inline-block animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gris-claro px-3 py-3 flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
                placeholder="Escribe tu pregunta..."
                className="flex-1 text-[13px] text-carbon placeholder:text-gris-medio/50 bg-gris-claro rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-rojo/30 font-inter"
              />
              <button
                onClick={send}
                disabled={!input.trim() || isStreaming}
                aria-label="Enviar"
                className="w-9 h-9 rounded-xl bg-rojo text-white flex items-center justify-center hover:bg-rojo-oscuro transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

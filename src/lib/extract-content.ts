// src/lib/extract-content.ts
import { readFile } from 'fs/promises'
import { join } from 'path'

const CONTENT_FILES = [
  'src/lib/blog-posts.ts',
  'src/app/sobre-nosotros/page.tsx',
  'src/app/contacto/page.tsx',
  'src/app/ventanas/page.tsx',
  'src/app/puertas/page.tsx',
  'src/app/cerramientos/page.tsx',
  'src/app/pergolas/page.tsx',
  'src/app/persianas/page.tsx',
  'src/app/proyectos/page.tsx',
  'src/components/home/FAQ.tsx',
  'src/components/home/Hero.tsx',
  'src/app/aviso-legal/page.tsx',
  'src/app/privacidad/page.tsx',
]

function stripCode(raw: string): string {
  return raw
    .replace(/^import\s+.*$/gm, '')                // remove import lines
    .replace(/^export\s+(type|interface)\s+[\s\S]*?^}/gm, '') // remove TS types
    .replace(/<[^>]+>/g, ' ')                       // remove JSX tags
    .replace(/\{[^{}]*\}/g, ' ')                    // remove JS expressions
    .replace(/['"`]/g, '')                          // remove quote chars
    .replace(/\s+/g, ' ')                           // collapse whitespace
    .trim()
}

export async function extractWebsiteContent(): Promise<string> {
  const root = process.cwd()
  const sections: string[] = []

  for (const filePath of CONTENT_FILES) {
    try {
      const fullPath = join(root, filePath)
      const raw = await readFile(fullPath, 'utf-8')
      const text = stripCode(raw)
      if (text.length > 50) {
        const label = filePath.replace(/^src\//, '').replace(/\.(tsx|ts)$/, '')
        sections.push(`=== ${label} ===\n${text}`)
      }
    } catch {
      // file not found or unreadable — skip
    }
  }

  const combined = sections.join('\n\n')
  // ~60 000 chars ≈ 15 000 tokens — stays within Gemini Flash context window
  return combined.length > 60000
    ? combined.slice(0, 60000) + '\n[contenido truncado]'
    : combined
}

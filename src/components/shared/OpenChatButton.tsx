'use client'

interface OpenChatButtonProps {
  className?: string
  children: React.ReactNode
}

export function OpenChatButton({ className, children }: OpenChatButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('chat:open'))}
      className={className}
    >
      {children}
    </button>
  )
}

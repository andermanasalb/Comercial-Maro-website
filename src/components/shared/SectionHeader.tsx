interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  dark?: boolean
  center?: boolean
}

export function SectionHeader({ tag, title, subtitle, dark = false, center = true }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center mb-4' : 'mb-4'}>
      <span className={`inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase mb-2 ${dark ? 'text-arena' : 'text-rojo'}`}>
        {tag}
      </span>
      <h2 className={`font-montserrat text-2xl md:text-3xl font-bold mb-2 ${dark ? 'text-white' : 'text-carbon'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[13px] max-w-xl ${center ? 'mx-auto' : ''} ${dark ? 'text-white/60' : 'text-gris-medio'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

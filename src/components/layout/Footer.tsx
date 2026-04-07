import { FooterColumns } from '@/components/shared/FooterColumns'

export function Footer() {
  return (
    <footer id="footer" className="bg-[#111113] text-white w-full">
      <div className="px-6 py-10">
        <FooterColumns />
      </div>
    </footer>
  )
}

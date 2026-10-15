import { ShieldCheck } from 'lucide-react'

export default function SidebarBrand() {
  return (
    <div className="px-5 pt-6 pb-5">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-ink-800 text-white">
          <ShieldCheck size={18} strokeWidth={1.75} />
        </span>
        <span className="text-lg font-semibold tracking-wide text-ink-900">CUSTÓDIA</span>
      </div>
      <p className="mt-2 font-mono text-[10px] tracking-wider text-ink-500 uppercase">
        Console pericial / v2.4
      </p>
    </div>
  )
}

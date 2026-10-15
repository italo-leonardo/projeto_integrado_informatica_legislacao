import { Lock } from 'lucide-react'

const BREADCRUMB = ['Dashboard e CLI Forense', 'Laboratório de evidências digitais']

export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-line bg-white px-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          {BREADCRUMB.map((item, index) => {
            const isLast = index === BREADCRUMB.length - 1
            return (
              <li key={item} className="flex items-center gap-2">
                {index > 0 && <span className="text-ink-400">/</span>}
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'text-ink-500' : 'font-medium text-ink-900'}
                >
                  {item}
                </span>
              </li>
            )
          })}
        </ol>
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          id="btn-demo"
          className="rounded bg-ink-800 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-white uppercase transition-colors hover:bg-ink-900"
        >
          Demonstração
        </button>
        <button
          type="button"
          id="btn-profile"
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-ink-500 uppercase transition-colors hover:text-ink-900"
        >
          <Lock size={13} strokeWidth={1.75} />
          Perfil Pericial
        </button>
      </div>
    </header>
  )
}

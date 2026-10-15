import { NAV_ITEMS } from '../../../constants/navigation'

export default function SidebarNav({ activeId, onNavigate }) {
  return (
    <nav aria-label="Navegação principal" className="px-3">
      <p className="px-2 pb-2 text-[11px] font-medium tracking-wide text-ink-500 uppercase">
        Ambiente forense
      </p>

      <ul className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = id === activeId

          return (
            <li key={id}>
              <button
                type="button"
                id={`nav-${id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onNavigate(id)}
                className={[
                  'flex w-full items-center gap-3 rounded-md border-l-2 px-3 py-2.5 text-left text-sm transition-colors',
                  isActive
                    ? 'border-ink-800 bg-white font-semibold text-ink-900 shadow-sm ring-1 ring-line'
                    : 'border-line text-ink-500 hover:bg-white/70 hover:text-ink-900',
                ].join(' ')}
              >
                <Icon size={16} strokeWidth={1.75} className={isActive ? 'text-brand-600' : ''} />
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

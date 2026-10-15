import { ChevronDown } from 'lucide-react'
import { TECHNICAL_LEAD } from '../../../constants/navigation'

export default function ProfileCard() {
  const { initials, name, role } = TECHNICAL_LEAD

  return (
    <div className="border-t border-line p-4">
      <button
        type="button"
        id="profile-card"
        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-white"
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-ink-800 text-xs font-semibold text-white">
          {initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-ink-900">{name}</span>
          <span className="block truncate text-xs text-ink-500">{role}</span>
        </span>
        <ChevronDown size={14} className="text-ink-400" />
      </button>
    </div>
  )
}

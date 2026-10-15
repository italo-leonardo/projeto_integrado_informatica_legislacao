import SidebarBrand from './SidebarBrand'
import SidebarNav from './SidebarNav'
import ProfileCard from './ProfileCard'

export default function Sidebar({ activeScreen, onNavigate }) {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-line bg-[#f8f9fb]">
      <SidebarBrand />
      <SidebarNav activeId={activeScreen} onNavigate={onNavigate} />
      {/* mt-auto empurra o perfil para o rodapé */}
      <div className="mt-auto">
        <ProfileCard />
      </div>
    </aside>
  )
}

import Sidebar from './sidebar/Sidebar'
import Header from './Header'
import MainContent from './MainContent'

export default function AppLayout({ activeScreen, onNavigate, children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar activeScreen={activeScreen} onNavigate={onNavigate} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  )
}

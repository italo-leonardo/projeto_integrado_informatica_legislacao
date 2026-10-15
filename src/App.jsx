import { useState } from 'react'
import AppLayout from './components/layout/AppLayout'
import { DEFAULT_SCREEN } from './constants/navigation'

export default function App() {
  const [activeScreen, setActiveScreen] = useState(DEFAULT_SCREEN)

  // As telas (Dashboard, Captura, Relatório) serão injetadas nos próximos commits.
  return <AppLayout activeScreen={activeScreen} onNavigate={setActiveScreen} />
}

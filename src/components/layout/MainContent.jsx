/**
 * Área central. Enquanto não houver telas, exibe um placeholder.
 * Para injetar uma tela: <MainContent><Dashboard /></MainContent>
 */
function ScreenPlaceholder() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center rounded-xl border border-dashed border-ink-400/50 bg-gray-100">
      <p className="text-sm text-ink-500">Área de renderização das telas</p>
    </div>
  )
}

export default function MainContent({ children }) {
  return (
    <main id="main-content" className="flex-1 overflow-y-auto p-8">
      {children ?? <ScreenPlaceholder />}
    </main>
  )
}

import { FileText, LayoutGrid, Terminal } from 'lucide-react'

/** Itens do menu lateral. `id` identifica a tela que será renderizada futuramente. */
export const NAV_ITEMS = [
  { id: 'overview', label: 'Visão geral', icon: LayoutGrid },
  { id: 'capture', label: 'Captura e preservação', icon: Terminal },
  { id: 'report', label: 'Relatório probatório', icon: FileText },
]

export const DEFAULT_SCREEN = NAV_ITEMS[0].id

/** Dados da responsável técnica exibidos no card de perfil. */
export const TECHNICAL_LEAD = {
  initials: 'AR',
  name: 'Dra. Ana Ribeiro',
  role: 'Perita criminal · 04217',
}

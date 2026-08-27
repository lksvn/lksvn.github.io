import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FreelanceApp from './FreelanceApp.tsx'
import { ColorSchemeToggle } from './components/ColorSchemeToggle.tsx'
import './assets/freelance-page.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ColorSchemeToggle labels={{ light: 'Usar tema claro', dark: 'Usar tema escuro' }} />
        <FreelanceApp />
    </StrictMode>,
)

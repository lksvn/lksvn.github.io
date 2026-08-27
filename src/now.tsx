import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NowApp from './NowApp.tsx'
import { ColorSchemeToggle } from './components/ColorSchemeToggle.tsx'
import './assets/main.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ColorSchemeToggle />
        <NowApp />
    </StrictMode>,
)

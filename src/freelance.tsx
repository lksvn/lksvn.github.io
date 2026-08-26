import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FreelanceApp from './FreelanceApp.tsx'
import './assets/freelance-page.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FreelanceApp />
    </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NowApp from './NowApp.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NowApp />
    </StrictMode>,
)

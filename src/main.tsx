import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from '@/App'

import '@fontsource/fira-sans/400.css';
import '@fontsource/fira-sans/700.css';
import '@fontsource/montserrat';
import "./styles/index.scss";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)





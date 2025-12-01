import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeContextProvider } from './contexts/theme/ThemeProvider.tsx'
import './styles/tokens.css'
import './styles/base.css'
import './styles/utilities.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)

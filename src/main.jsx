import { MotionConfig } from 'framer-motion'
import { BrowserRouter } from './app/router'
import { ThemeProvider } from './app/theme'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </MotionConfig>,
)

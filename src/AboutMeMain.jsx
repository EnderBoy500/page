import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe from './AboutMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutMe />
  </StrictMode>,
)

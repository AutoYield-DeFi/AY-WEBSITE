
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Only mount React if we're not on an Astro page
const path = window.location.pathname;
if (path !== '/glossary' && !path.startsWith('/glossary/')) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
}

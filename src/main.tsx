
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Improved error handling for root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found, please check your HTML file");
  throw new Error("Root element not found");
}

// Performance optimization: Disable StrictMode in production
// (StrictMode causes double rendering which is useful for development but impacts performance)
const appElement = import.meta.env.PROD ? (
  <App />
) : (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create root and render app
createRoot(rootElement).render(appElement);

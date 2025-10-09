import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';  // Changed from .tsx to .js
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
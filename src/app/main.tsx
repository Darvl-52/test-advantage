import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles';
import { Home } from './Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

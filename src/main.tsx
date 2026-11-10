import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {FontSuspenseBoundary} from './components/FontSuspense';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FontSuspenseBoundary>
      <App />
    </FontSuspenseBoundary>
  </StrictMode>,
);

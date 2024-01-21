import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App/App.jsx';

export default function index() {
  const root = createRoot(document.getElementById('app'))

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

index()
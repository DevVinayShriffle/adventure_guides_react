// app/frontend/entrypoints/application.js (or application.jsx/tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App'; // Your main React component
import { BrowserRouter } from "react-router-dom"

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root'); // Make sure this #app exists in your Rails layout

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
});

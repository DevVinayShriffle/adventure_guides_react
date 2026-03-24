// app/frontend/entrypoints/application.js (or application.jsx/tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App'; // Your main React component
import { BrowserRouter } from "react-router-dom"

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root'); // Make sure this #app exists in your Rails layout

  if (rootElement) {
    try{
      root.render(
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      )
    }catch(error){
      console.error(`Error rendering root div : ${error}`)
      rootElement.innerHTML =
      `<div style="padding: 20px; font-family: sans-serif; color: red;">
        <h1>Render Error</h1>
        <pre>${error.message}</pre>
      </div>`;
    }
  }
});

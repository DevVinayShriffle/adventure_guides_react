// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
// import "controllers"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.createRoot(root).render(
      <StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </StrictMode>,
    );
  }
});
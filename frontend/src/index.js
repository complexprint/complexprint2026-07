import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const rootEl = document.getElementById("root");

// Если HTML был пререндерен (см. scripts/prerender.mjs), то #root уже содержит
// разметку — используем hydrateRoot, чтобы React «приклеился» к ней без
// повторного рендеринга (быстрее, без мигания, лучше для SEO).
// Иначе — обычный createRoot.
const tree = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

if (rootEl && rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, tree);
} else {
  ReactDOM.createRoot(rootEl).render(tree);
}

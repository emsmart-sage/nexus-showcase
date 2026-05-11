import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { nexusLogoFavicon } from "sage-nexus-ui";

const link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (link) link.href = nexusLogoFavicon;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

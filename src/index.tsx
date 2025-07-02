import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./Layout/Layout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);

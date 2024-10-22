import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Router/index.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import QrCodeProvider from "./context/QrCodeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      {/* <QrCodeProvider> */}
        <RouterProvider router={routes} />
      {/* </QrCodeProvider> */}
    {/* </BrowserRouter> */}
    <Toaster />
  </StrictMode>
);

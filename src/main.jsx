// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import {  RouterProvider } from "react-router-dom";
// import { routes } from "./Router/index.jsx";
// import { Toaster } from "./components/ui/toaster.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <BrowserRouter> */}
//       {/* <QrCodeProvider> */}
//         <RouterProvider router={routes} />
//       {/* </QrCodeProvider> */}
//     {/* </BrowserRouter> */}
//     <Toaster />
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/index.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

// ✅ PWA registration
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    console.log("New content available — please refresh.");
  },
  onOfflineReady() {
    console.log("PWA is ready for offline use.");
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <Toaster />
  </StrictMode>
);


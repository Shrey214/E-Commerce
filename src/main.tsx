import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./mains.css";
import ProductContextProvider from "./context/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
);

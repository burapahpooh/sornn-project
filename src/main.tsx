import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import Login from "./Login.tsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

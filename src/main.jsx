import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Sale from "./Sale.jsx";
import About from "./About.jsx";
import Portofolio from "./Portofolio.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sale",
    element: <Sale />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

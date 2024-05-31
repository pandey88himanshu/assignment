import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import PlanAndPricing from "./components/PlanAndPricing";
import ToolsAndTips from "./components/ToolsAndTips";
import Contact from "./components/Contact";
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import Signup from "./components/Signup";
import EditProfile from "./components/EditProfile";
import { toast } from "react-toastify";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <MainContent />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/plans&pricing",
          element: <PlanAndPricing />,
        },
        {
          path: "/tools&tips",
          element: <ToolsAndTips />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/update",
          element: <EditProfile />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Flowers from "./flowers";
import Addflower from "./addflower";
import MainLayout from "./layout/mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Flowers />,
      },
      {
        path: "/addFlower",
        element: <Addflower />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router} />

    // <div className="bg-red-800 h-screen">
    // 	<h1>Flower Delivery Service</h1>
    // </div>
  );
}

export default App;

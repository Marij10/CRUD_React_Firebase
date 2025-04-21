import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ToDos/pages/Home.tsx";
import ToDoList from "./features/ToDos/components/todo-list.tsx";

import Update from "./features/ToDos/components/Update.tsx";
import Create from "./features/ToDos/components/Create.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/todos",
        element: <ToDoList />,
        children: [
          { path: "create", element: <Create /> },
          { path: "update/:id", element: <Update /> },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import App from "@/App";
import Task from "@/pages/Task/Task";
import User from "@/pages/User/User";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Task></Task>,
      },
      {
        path: "/tasks",
        element: <Task></Task>,
      },
      {
        path: "/users",
        element: <User></User>,
      },
    ],
  },
]);

export default router;

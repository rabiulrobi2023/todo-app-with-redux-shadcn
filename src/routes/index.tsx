import App from "@/App";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/home",
    // element: <App></App>,
    Component: App
  },
]);

export default router;

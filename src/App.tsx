import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="w-[1080px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

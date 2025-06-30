import { ModeToggle } from "@/components/ui/mode-toggler";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-[1080px] flex mx-auto bg-blue-800 h-12">
      <div className="flex w-full  items-center justify-between ">
        <div className="flex items-center gap-3">
          <img className="h-10 ml-3" src="../src/assets/redux.png" alt="" />
          <p className="text-4xl font-bold text-gray-700 ">
            <span className="text-violet-700">Task</span> Manager
          </p>
        </div>
        <div className="flex gap-6 pr-2 text-white">
          <Link to={"/tasks"}>Tasks</Link>
          <Link to={"/Users"}>Users</Link>
          <div className="h-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

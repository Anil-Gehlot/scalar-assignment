import "./App.css";
import SideBar from "./components/SideBar";
import CardsContainer from "./components/CardsContainer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state

  return (
    <div className="flex h-full min-h-[100dvh] bg-primary">
      <div
        className={`h-screen overflow-hidden hidden lg:block ${
          isOpen ? "w-[11.5%]" : "w-[5%]"
        } `}
      >
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`h-screen overflow-y-auto scrollbar-hidden  w-full ${
          !isOpen ? "w-full" : "w-[88.5%]"
        }`}
      >
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default App;

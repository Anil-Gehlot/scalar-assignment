import { IoMdHome } from "react-icons/io";
import { TbViewfinder } from "react-icons/tb";
import { TbLibraryPlus } from "react-icons/tb";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BiArrowToLeft } from "react-icons/bi";
import { LuArrowRightToLine } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

const SideBar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col text-white ml-4 mr-4 h-screen transition-all ${
        isOpen ? "" : "w-20"
      }`}
    >
      <div className="mt-xs grow">
        <div className="flex items-center justify-between mt-4 ">
          <img
            src={isOpen ? "/logo.png" : "/Off-White@2x.png"}
            alt="logo"
            className=" group w-36 scale-105 "
          />
          <span onClick={toggleSidebar} className="cursor-pointer">
            <BiArrowToLeft />
          </span>
        </div>

        <div>
          {isOpen ? ( // Conditional rendering for the input box
          <div className="relative">
            <input
              placeholder="New Thread"
              className="bg-secondary cursor-pointer text-sm rounded-l-full rounded-r-full mt-5 p-2 w-full hover:border-cyan-400"
              style={{ border: "2px solid rgba(255, 255, 255, 0.1)" }}
              
            />
            {/* Text spans for "Ctrl" and "I" */}
          <span className="absolute text-sm right-7 top-1/2 mr-2 transform rounded-lg tracking-widest px-1  text-gray-500" style={{ border: "2px solid rgba(255, 255, 255, 0.1)" }}>
            Ctrl
          </span>
          <span className="absolute text-sm right-4 top-1/2  transform rounded-lg px-1  text-gray-500" style={{ border: "2px solid rgba(255, 255, 255, 0.1)" }}>
            I
          </span>   
            </div>
            
          ) : (
            <div className="bg-secondary rounded-full mt-8 ml-5 p-2 scale-150 inline-block">
              <FiPlus />
            </div>
          )}
        </div>

        <div className="pt-7 flex flex-col gap-4 text-lg text-gray-400 font-normal ">
          <div
            className={`${
              !isOpen && "ml-5 w-96"
            }  flex items-center gap-2 p-1 rounded-md hover:text-white hover:bg-third cursor-pointer`}
          >
            {" "}
            <IoMdHome /> <span className={isOpen ? "" : "hidden"}>Home</span>
          </div>
          <div
            className={`${
              !isOpen && "ml-5 w-96"
            }  flex items-center gap-2 p-1 rounded-md hover:text-white hover:bg-third cursor-pointer`}
          >
            {" "}
            <TbViewfinder />{" "}
            <span className={isOpen ? "" : "hidden"}>Discover</span>
          </div>
          <div
            className={`${
              !isOpen && "ml-5 w-96"
            }  flex items-center gap-2 p-1 rounded-md hover:text-white hover:bg-third cursor-pointer`}
          >
            <TbLibraryPlus />{" "}
            <span className={isOpen ? "" : "hidden"}>Library</span>
          </div>
          <div
            className={`${
              !isOpen && "ml-5 w-96"
            }  flex items-center gap-2 p-1 rounded-md hover:text-white hover:bg-third cursor-pointer`}
          >
            <FaArrowRightToBracket />{" "}
            <span className={isOpen ? "" : "hidden"}>Sign in</span>
          </div>
        </div>

        <div
          className={` ${
            !isOpen && "hidden"
          } mt-4 text-black text-lg font-bold p-2 bg-cyan-400 hover:bg-cyan-600 transition-all rounded-l-full rounded-r-full flex items-center justify-center`}
        >
          Sign up
        </div>
      </div>

      {/* middle div */}
      <div className={`p-1 mb-2 ${!isOpen && "hidden"}`}>
        <h3 className="font-bold text-white hover:text-cyan-400">Try Pro</h3>
        <p className="text-gray-400 text-sm font-light">
          Upgrade for image upload, smarter AI, and more Pro Search.
        </p>
        <button className="bg-third p-1 rounded-md inline-flex items-center gap-1 px-2 text-white font-normal hover:text-gray-400">
          <RiArrowRightUpLine />
          Learn More
        </button>
      </div>

      {/* botom conteainer */}
      <div
        className={`bottom-0 flex justify-between items-center w-full border-t border-gray-600 p-2 ${
          isOpen ? "" : "hidden"
        } `}
      >
        <div
          className={`mb-4 p-2 rounded-l-full rounded-r-full inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white hover:bg-third cursor-pointer `}
        >
          <CiMobile4 /> Download
        </div>
        <div className="mb-4 inline-flex items-center">
          <span className="hover:bg-third p-2 rounded-full">
            <FaXTwitter />
          </span>
          <span className="hover:bg-third p-2 rounded-full">
            {" "}
            <FaDiscord />
          </span>
        </div>
      </div>

      {/* open sidebar button */}
      <div
        className={`bottom-0 flex justify-between items-center ${
          isOpen ? "hidden" : ""
        } `}
      >
        <button
          className="bg-secondary rounded-full p-2 mb-8 ml-2 scale-150"
          onClick={() => toggleSidebar()}
        >
          <LuArrowRightToLine />
        </button>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { useState } from "react";

const AskFollowUp = () => {
  const [isToggled, setIsToggled] = useState(false); // State to manage toggle

  const handleToggle = () => {
    setIsToggled((prev) => !prev); // Toggle state
  };
  return (
    <div className="rounded-full z-50 fixed left-0 right-0 mx-auto max-w-xl bottom-10 flex justify-center">
      <div className="flex w-full justify-center px-4">
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="w-full">
              <div className="bg-offset dark:bg-offsetDark w-full rounded-full">
                <div
                  className="relative w-full rounded-full"
                  style={{ border: "5px solid gray" }}
                >
                  <input
                    placeholder="Ask follow-up"
                    className="w-full bg-primary text-white font-medium p-5 pl-5 pr-12 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-borderMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark"
                    style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
                  />
                  {/* Icon/logo on the right */}
                  <span className="absolute inset-y-0 right-4 flex items-center p-3 ">

                    {/* Toggle switch next to the logo */}
                    <span className="hidden sm:flex items-center gap-2 ">

                      <button
                        onClick={handleToggle}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ${
                          isToggled ? "bg-gray-400" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`transform transition-transform duration-200 block w-5 h-5 bg-white rounded-full ${
                            isToggled ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button> <span className="text-gray-400">Pro</span>
                    </span>

                    <span className="ml-3 hidden sm:block">
                    <BiGitRepoForked />
                    </span>


                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskFollowUp;

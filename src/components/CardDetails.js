import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { articleList } from "../utils/constant";
import { CiBookmark } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { IoArrowRedoSharp } from "react-icons/io5";
import { BiGitRepoForked } from "react-icons/bi";
import AskFollowUp from "./AskFollowUp";

const CardDetails = () => {
  const { cardId } = useParams(); // Get the cardId from the URL parameters
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const data = articleList.filter(
      (element) => element.link === "/page/" + cardId
    );
    setData(data);
    setLoading(true);
  }, []);

  if (data.length === 0) return "null";

  return (
    <div
      className="bg-secondary mt-2 rounded-md px-6"
      style={{ border: "2px solid rgba(255, 255, 255, 0.1)" }}
    >
      <div
        style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}
        className="p-1 relative z-20 flex h-16 shrink-0 justify-end border-b backdrop-blur-lg md:h-[50px] border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"
      >
        <div className="absolute inset-0 bg-background opacity-90 dark:bg-backgroundDark" />
        <div className="gap-2 ease mr-0 relative flex w-full items-center justify-end px-md duration-150 md:px-lg max-w-screen-md">
          <button
            className="border h-7 text-white opacity-65 px-2.5 py-2 rounded-md items-center flex"
            style={{ border: "2px solid rgba(255, 255, 255, 0.2)" }}
          >
            <CiBookmark />
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-2.5 py-2 rounded-md">
            <IoIosLink />
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-all text-black items-center flex justify-center gap-1 rounded-md font-medium px-3 py-1">
            <IoArrowRedoSharp /> Share
          </button>
        </div>
      </div>

      <div className="mx-auto h-full w-full max-w-screen-md px-md md:px-lg text-white">
        <div className="ease mb-xl flex grid-cols-12 gap-xl duration-150 md:grid isolate md:isolation-auto">
          <div className="w-full md:w-auto col-span-12">
            <div className="flex flex-col grid-cols-12 gap-md md:gap-xl max-w-threadWidth w-full md:grid">
              <div className="col-span-12 col-start-1 row-start-1 space-y-md md:space-y-lg">
                {/* Image Section */}
                <div className="col-span-8 mt-8">
                  <div className="relative">
                    <div className="pb-lg pt-sm">
                      <div
                        className="relative h-auto max-h-[inherit] w-full transform-gpu group cursor-zoom-in"
                        style={{ aspectRatio: "720 / 310" }}
                      >
                        <div className="relative h-full">
                          <div className="h-full hover:scale-[1.02] hover:shadow-lg">
                            <div
                              className="h-full"
                              style={{ transform: "none" }}
                            >
                              <div className="h-full relative z-[3]">
                                <div className="bg-offset dark:bg-offsetDark group relative h-full w-full overflow-hidden shadow-md transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg rounded-md">
                                  <div className="absolute inset-0" />
                                  <img
                                    alt="cnbc.com"
                                    className="h-full max-h-[inherit] w-full object-cover object-left-top transition-all ease-in-out"
                                    src={data[0].imageUrl}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pointer-events-none absolute bottom-xs right-xs z-[4] flex items-center gap-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Heading */}
                <div className="flex items-center gap-lg mt-4">
                  <div
                    className="w-full"
                    style={{ willChange: "auto", height: "107.5px" }}
                  >
                    <div>
                      <div style={{ opacity: 1, willChange: "opacity" }}>
                        <div className="group relative flex w-full items-center gap-sm">
                          <div className="w-full whitespace-pre-wrap break-words default font-display text-4xl md:text-[2.8rem] !leading-[1.2] text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                            <span className="rounded-md duration-150 font-normal">
                              {data[0].title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author and Reading Time */}

                <div className="mb-4 flex items-center justify-between border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                  <div className="relative">
                    <div className=" flex items-center gap-2 text-gray-400 font-medium duration-150 !pointer-events-auto !opacity-100 !grayscale-0">
                      <div className="relative">
                        <div className="relative flex aspect-square shrink-0 items-center justify-center rounded-full h-8 w-8 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offsetPlus dark:bg-offsetPlusDark">
                          <img
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                            src={data[0].authorImage}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-xs light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                          Curated by
                          <div className="relative flex items-center gap-x-xs">
                            <div className="line-clamp-1 break-all light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              {data[0].author}
                            </div>
                          </div>
                        </div>
                        <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                          <div className="gap-sm flex items-center !gap-xs">
                            <span>2 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-xs">
                    <div className="flex w-full items-center gap-2 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50 dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                      <div className="flex items-end gap-md">
                        <div
                          className="gap-x-xs flex cursor-default items-center light font-medium gap-1 text-gray-400 text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                          data-state="closed"
                        >
                          <span className="">
                            <IoMdTime />
                          </span>
                          <span className="truncate">4 hours ago</span>
                        </div>
                      </div>
                      <div className="w-full flex-1" />

                      {/* Wrap this part to hide on small screens */}
                      <div className="hidden md:flex gap-md">
                        <div
                          className="flex items-center light font-medium gap-1 text-gray-400 text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                          data-state="closed"
                        >
                          <span>
                            <IoEyeOutline />
                          </span>
                          <span className="truncate">9000</span>
                        </div>
                      </div>

                      <div className="w-full flex-1" />

                      {/* Wrap this part to hide on small screens */}
                      <div className="hidden md:flex gap-md">
                        <div
                          className="flex items-center light font-medium gap-1 text-gray-400 text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                          data-state="closed"
                        >
                          <span>
                            <BiGitRepoForked />
                          </span>
                          <span className="truncate">74</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="line-clamp-4 font-medium text-white opacity-75 text-lg leading-snug text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                  {Array.from({ length: 50 }).map((_, index) => (
                    <div
                      key={index}
                      className="line-clamp-4 mb-4 font-sans text-lg leading-snug text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                    >
                      {data[0].description}
                    </div>
                  ))}

                  <div className="">
                    <AskFollowUp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

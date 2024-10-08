import React from "react";
import { LiaBookmarkSolid } from "react-icons/lia";

const SmallCard = ({
  title,
  description,
  imageUrl,
  link,
  author,
  authorImage,
}) => {
  return (
    <div>
      <a
        className="group/SmallCard block h-full outline-none"
        href={"discover" + link}
      >
        <div className="relative h-full rounded-lg duration-150 group-hover/SmallCard:-translate-y-[1px] group-active/SmallCard:scale-[0.99] hover:opacity-95 dark:shadow-lg group-hover/SmallCard:dark:shadow-xl border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
          <div className="pointer-events-none absolute inset-0 z-[4] rounded-[inherit] border md:!border-borderMain md:opacity-20 md:dark:opacity-20" />
          <div className="relative flex h-full flex-col items-center">
            <div className="relative flex w-full shrink-0 overflow-hidden rounded-t-lg aspect-[3/2]">
              <div className="relative overflow-hidden h-full w-full rounded-none flex">
                <div className="h-full w-full">
                  <div className="w-full h-full">
                    <div className="bg-offset dark:bg-offsetDark group relative h-full w-full overflow-hidden  rounded-md">
                      <div className="absolute inset-0" />
                      <img
                        alt={title}
                        className="h-full w-full object-cover transition-all ease-in-out"
                        src={imageUrl}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full grow transform-gpu flex-col p-md">
              <div>
                <div className="flex items-center gap-x-md p-4 font-medium">
                  <div className="grow default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                    <div
                      data-testid="thread-title"
                      className="text-white leading-[1.4]  pl-2 pr-2"
                    >
                      {title}
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 font-medium text-center break-word mt-two line-clamp-2 text-balance light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                  {description}
                </div>
              </div>
              <div className="flex-1" />
              <div className="flex items-center justify-between showActionMenu -mb-sm mt-xs border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50 dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                <div className="flex w-full items-center justify-between pr-3 pl-3 pb-2">
                  <div className="flex gap-sm text-xs text-textOff dark:text-offsetDark">
                    <div className="flex items-center gap-sm md:gap-0.5 max-w-[100px] light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                      <div className="relative origin-left md:scale-[.85]">
                        <div className="relative flex aspect-square shrink-0 items-center justify-center rounded-full h-5 w-5 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offsetPlus dark:bg-offsetPlusDark">
                          <img
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                            src={authorImage}
                          />
                        </div>
                      </div>
                      <span className="truncate text-white font-medium">
                        {author}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-sm">
                    <button
                      aria-label="Save to Bookmarks"
                      type="button"
                      className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark -mr-2.5 hover:opacity-100 [&:focus-visible]:!ring-2 ring-super/50 md:opacity-70 opacity-100 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                      data-state="closed"
                    >
                      <div className="flex items-center  justify-center gap-xs text-white">
                        <LiaBookmarkSolid />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-[1] rounded-inherit border-2 !border-transparent duration-150 group-[&:focus-visible]/SmallCard:!border-super/40" />
        </div>
      </a>
    </div>
  );
};

export default SmallCard;

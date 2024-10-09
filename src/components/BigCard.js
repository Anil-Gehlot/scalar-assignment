import React from "react";
import { LiaBookmarkSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const BigCard = ({
  title,
  description,
  imageUrl,
  author,
  authorAvatar,
  href,
}) => {
  return (
    <div className="col-span-3">
      <Link to={href}
        className="group/card block h-full outline-none"
       
      >
        <div className="relative h-full rounded-lg duration-150 group-hover/card:-translate-y-[1px] group-active/card:scale-[0.99] hover:opacity-95 dark:shadow-lg group-hover/card:dark:shadow-xl border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50 dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
          <div className="absolute inset-0 rounded-[inherit] bg-background transition-opacity duration-300 dark:bg-backgroundDark opacity-100 md:opacity-0">
            <div
              className="absolute inset-0 rounded-[inherit] opacity-20"
              style={{ background: "rgb(246, 5, 120)" }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[4] rounded-[inherit] border opacity-10 md:!border-borderMain md:opacity-20 md:dark:opacity-20" />
          <div className="relative flex h-full flex-col items-center">
            <div className="relative flex w-full shrink-0 overflow-hidden rounded-t-lg aspect-[4/3] md:aspect-[1036/350]">
              <div className="relative overflow-hidden h-full w-full rounded-none">
                <div className="h-full w-full">
                  <div className="w-full h-full">
                    <div className="bg-offset dark:bg-offsetDark group relative h-full w-full overflow-hidden rounded-md">
                      <div className="absolute inset-0" />
                      <img
                        alt={title}
                        className="h-full w-full object-cover  transition-all ease-in-out"
                        src={imageUrl}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 flex h-full w-full grow transform-gpu flex-col p-md">
              <div>
                <div className="flex items-center gap-x-md">
                  <div className="grow default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                    <div
                      data-testid="thread-title"
                      className="leading-[1.4] text-white font-medium"
                    >
                      {title}
                    </div>
                  </div>
                </div>
                <div className="break-word mt-two line-clamp-2 text-balance dark:!text-white/50 !text-black/60 default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                  {description}
                </div>
              </div>
              <div className="flex-1" />
              <div className="flex items-center justify-between showActionMenu -mb-xs mt-sm !border-black/5 dark:!border-white/5 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                <div className="flex w-full items-center justify-between">
                  <div className="flex gap-sm text-xs text-textOff dark:text-offsetDark">
                    <div className="flex items-center gap-sm md:gap-0.5 light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                      <div className="relative origin-left md:scale-[.85]">
                        <div className="relative flex aspect-square shrink-0 items-center justify-center rounded-full h-5 w-5 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offsetPlus dark:bg-offsetPlusDark">
                          <img
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                            src={authorAvatar}
                          />
                        </div>
                      </div>
                      <span className="truncate text-white font-medium">
                        {author}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-md">
                    <button
                      aria-label="Save to Bookmarks"
                      type="button"
                      className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark -mr-2.5 hover:opacity-100 [&:focus-visible]:!ring-2 ring-super/50 md:opacity-70 opacity-100 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out  select-none relative group/button  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
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

          <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-[1] rounded-inherit border-2 !border-transparent duration-150 group-[&:focus-visible]/card:!border-super/40" />
        </div>
      </Link>
    </div>
  );
};

export default BigCard;

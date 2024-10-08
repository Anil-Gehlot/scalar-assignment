import React from "react";

const AskFollowUp = () => {
  return (
    <div className="border rounded-l-full rounded-r-full bg-primary z-50 fixed left-0 right-0 mx-auto max-w-2xl bottom-10 flex -translate-y-md justify-center md:!bottom-lg md:left-sideBarWidth md:right-sm md:translate-y-0">
      <div className="flex flex-col gap-md md:gap-xl w-full md:grid justify-center px-md md:px-lg">
        <div className="col-span-8 flex justify-center">
          <div className="pointer-events-none grid w-full grid-cols-1 grid-rows-1">
            <div className="transform-gpu col-start-1 row-start-1 duration-150 ease-out translate-y-[20px] flex justify-center items-end !delay-200 !opacity-100 [&>*]:pointer-events-auto !translate-y-[0px]">
              <div className="w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                <div className="relative flex w-full items-center justify-end gap-x-xs">
                  <div>
                    <div>
                      <span className="grow block">
                        <div className="rounded-full md:p-sm bg-offset dark:bg-offsetDark">
                          <div className="item-center  w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark placeholder-textOff shadow-sm rounded-t-[32px] rounded-b-[32px] py-sm px-sm">
                            <div className="flex-grow flex-shrink p-sm rounded-full order-1 overflow-hidden relative flex h-full w-full">
                              <input
                                placeholder="Ask follow-up"
                                className="bg-primary w-96 p-3  overflow-auto max-h-[45vh] flex  text-center justify-center lg:max-h-[40vh] sm:max-h-[25vh]   font-sans caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark bg-background text-textMain placeholder-textOff scrollbar-thumb-idle dark:scrollbar-thumb-idleDark scrollbar-thin scrollbar-track-transparent"
                                autoComplete="off"
                                data-1p-ignore="true"
                                // style={{ height: "24px !important" }}
                                defaultValue={""}
                              />
                            </div>
                            <div className="bg-background dark:bg-offsetDark flex rounded-l-lg order-0" />
                          </div>
                        </div>
                      </span>
                    </div>
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

export default AskFollowUp;

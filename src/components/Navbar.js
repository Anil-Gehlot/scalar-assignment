import React from "react";
import { FaRegStar } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
import { CiDollar } from "react-icons/ci";
import { MdOutlineColorLens } from "react-icons/md";
import { CiMedal } from "react-icons/ci";
import { BsTv } from "react-icons/bs";

// NavbarItem Component
const NavbarItem = ({ label }) => {
  return (
    <div className="group relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center duration-150 hover:opacity-50 hover:bg-primary p-2 hover:rounded-lg">
      <div className=" flex items-center gap-2  text-white whitespace-nowrap delay-200 default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
        {label.logo} {label.title}
      </div>
      <div className="absolute inset-x-0 inset-y-[4px] z-[1] rounded-md border-2 border-transparent duration-150 group-[&:has(:focus-visible)]:border-super/40" />
    </div>
  );
};

// ScrollableContainer Component
const ScrollableContainer = () => {
  const items = [
    { title: "Top", logo: <FaRegStar /> },
    { title: "Tech & Science", logo: <TfiAndroid /> },
    { title: "Finance", logo: <CiDollar /> },
    { title: "Arts & Culture", logo: <MdOutlineColorLens /> },
    { title: "Sports", logo: <CiMedal /> },
    { title: "Entertainment", logo: <BsTv /> },
  ];

  return (
    <div className="relative z-0 -mx-md flex min-w-0 snap-x snap-mandatory overflow-y-auto duration-1000 scrollbar-none md:mx-0">
      <div className="w-md shrink-0 snap-start md:hidden " />
      {items.map((item) => (
        <NavbarItem key={item.title} label={item} />
      ))}
      <div className="w-md shrink-0 snap-start md:hidden" />
    </div>
  );
};

// StickyContainer Component
const StickyContainer = () => {
  return (
    <div className=" p-4 sticky top-0 z-[20] -mx-lg flex items-center justify-between px-lg backdrop-blur-lg border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50 dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
      <div className="relative z-[2] min-w-0 flex-1 py-sm md:py-sm">
        <div className="isolate flex justify-center border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50 dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
          <div className="relative flex w-full max-w-threadWidth items-center justify-between gap-md">
            <ScrollableContainer />
            <div className="hidden h-full items-center justify-end gap-md md:flex">
              <div className="flex items-center min-w-0 justify-center gap-xs"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[1] bg-background opacity-90 dark:bg-backgroundDark" />
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  return <StickyContainer />;
};

export default Navbar;

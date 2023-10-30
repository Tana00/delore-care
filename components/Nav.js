"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ArrowDown from "../public/assets/icons/arrow-down.svg";
import { menuList } from "@/utils";

const Nav = () => {
  const router = useRouter;
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    console.log("title", title);
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  return (
    <section className="bg-white font-gilmer font-medium z-20 relative">
      <div className=" max-w-[1920px] mx-auto flex items-center justify-between py-4 px-5 sm:px-10 lg:px-20 xl:px-40 w-full">
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full mx-4 hidden lg:block max-w-5xl">
          <ul className="flex items-center justify-evenly">
            {menuList?.map((menu, i) => (
              <li key={i} className="relative">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    if (menu.hasSubmenu) {
                      toggleDropdown(menu.title);
                    } else {
                      router.push(menu.href);
                    }
                  }}
                >
                  <span className="text-gray text-lg hover:text-blue">
                    {menu.title}
                  </span>
                  {menu?.hasSubmenu && (
                    <Image src={ArrowDown} alt="" width={30} height={30} />
                  )}
                </p>

                {openDropdown === menu.title && (
                  <div
                    className={`bg-white shadow-md absolute top-[3.65rem] left-0 grid ${
                      menu.submenu.length > 8
                        ? "grid-cols-2 w-[556px]"
                        : "grid-cols-1 w-[300px]"
                    } gap-3 p-4`}
                  >
                    <ul className="">
                      {menu.submenu.slice(0, 8).map((submenu, i) => (
                        <li key={i} className="text-gray text-lg py-2 px-4">
                          {submenu.title}
                        </li>
                      ))}
                    </ul>
                    <ul className="">
                      {menu.submenu.slice(8).map((submenu, i) => (
                        <li key={i} className="text-gray text-lg py-2 px-4">
                          {submenu.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="bg-blue text-white rounded-lg w-40 py-3.5 text-lg">
            Contact Us
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue/10 p-2 rounded-sm hover:bg-blue/20 transition-colors"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6 text-black" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`lg:hidden block w-full mx-1 mt-5`}>
          <ul className="flex flex-col items-start justify-start gap-4">
            {menuList?.map((menu, i) => (
              <li key={i} className="w-full">
                <p
                  onClick={() => {
                    if (menu.hasSubmenu) {
                      toggleDropdown(menu.title);
                    } else {
                      router.push(menu.href);
                    }
                  }}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray text-lg">{menu.title}</span>
                  {menu?.hasSubmenu && (
                    <Image
                      src={ArrowDown}
                      alt=""
                      width={30}
                      height={30}
                      className="cursor-pointer"
                    />
                  )}
                </p>
                {openDropdown === menu.title && (
                  <div
                    className={`grid ${
                      menu.submenu.length > 8 ? "grid-cols-2" : "grid-cols-1"
                    } gap-3 sm:p-4 w-auto`}
                  >
                    <ul className="">
                      {menu.submenu.slice(0, 8).map((submenu, i) => (
                        <li key={i} className="text-gray text-lg py-2 px-4">
                          {submenu.title}
                        </li>
                      ))}
                    </ul>
                    <ul className="">
                      {menu.submenu.slice(8).map((submenu, i) => (
                        <li key={i} className="text-gray text-lg py-2 px-4">
                          {submenu.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <button
              onClick={() => router.push("/contact-us")}
              className="bg-blue text-white rounded-lg w-40 py-2.5 text-base"
            >
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Nav;

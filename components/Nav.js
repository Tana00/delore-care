"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ArrowDown from "../public/assets/icons/arrow-down.svg";
import ArrowDownRed from "../public/assets/icons/arrow-down-red.svg";
import { menuList } from "@/utils";
import Link from "next/link";

const Nav = () => {
  const router = useRouter;
  const pathname = usePathname();

  const navbarRef = useRef(null);
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

  console.log("pathname", pathname);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    if (openDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  return (
    <section className="bg-white font-gilmer font-medium z-10 relative">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between py-4 px-5 sm:px-10 lg:px-20 xl:px-40 w-full">
        <div>
          <a href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </a>
        </div>
        <li className="w-full mx-4 hidden lg:block max-w-5xl">
          <ul className="flex items-center justify-evenly">
            {menuList?.map((menu, i) => {
              if (!menu.hasSubmenu) {
                return (
                  <Link href={menu.href}>
                    <li key={i} className="relative">
                      <p className="flex items-center cursor-pointer">
                        <span
                          className={`text-lg ${
                            pathname === `${menu.href}`
                              ? "text-red"
                              : "text-gray"
                          } hover:text-red`}
                        >
                          {menu.title}
                        </span>
                      </p>
                    </li>
                  </Link>
                );
              } else {
                return (
                  <li key={i} className="relative">
                    <p
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleDropdown(menu.title)}
                    >
                      <span
                        className={`text-lg ${
                          pathname !== `/${menu.title}`
                            ? "text-gray"
                            : "text-red"
                        } hover:text-red`}
                      >
                        {menu.title}
                      </span>
                      <Image
                        src={
                          pathname !== `/${menu.title}`
                            ? ArrowDown
                            : ArrowDownRed
                        }
                        alt=""
                        width={25}
                        height={25}
                      />
                    </p>
                    {openDropdown === menu.title && (
                      <div
                        ref={navbarRef}
                        className={`bg-white shadow-md absolute top-[3.65rem] left-0 grid ${
                          menu.submenu.length > 8
                            ? "grid-cols-2 w-[556px]"
                            : "grid-cols-1 w-[300px]"
                        } gap-3 p-3`}
                      >
                        <ul className="">
                          {menu.submenu.slice(0, 8).map((submenu, i) => (
                            <a
                              key={i}
                              href={`/${menu.title?.toLowerCase()}/${
                                submenu.href
                              }`}
                              className=""
                            >
                              <li className="text-gray text-lg py-2 px-4">
                                {submenu.title}
                              </li>
                            </a>
                          ))}
                        </ul>
                        <ul
                          className={`${
                            menu.submenu.length < 8 ? "hidden" : "block"
                          }`}
                        >
                          {menu.submenu.slice(8).map((submenu, i) => (
                            <a
                              key={i}
                              href={`/${menu.title} / ${submenu.href}`}
                              className=""
                            >
                              <li className="text-gray text-lg py-2 px-4">
                                {submenu.title}
                              </li>
                            </a>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </li>
        <Link href="/contact-us">
          <div className="hidden lg:block">
            <button className="bg-blue text-white border border-blue rounded-lg w-40 py-3 text-base hover:bg-white hover:text-blue transition-all">
              Contact Us
            </button>
          </div>
        </Link>
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
                    } gap-3 sm:p-3 w-auto`}
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

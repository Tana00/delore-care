"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ArrowDown from "../public/assets/icons/arrow-down.svg";

const menuList = [
  {
    title: "Services",
    hasSubmenu: true,
    submenu: [
      { title: "Dementia Care", href: "#dementia-care" },
      {
        title: "Varied Learning Abilities",
        href: "#varied-learning-abilities",
      },
      { title: "Mobility Needs", href: "#mobility-needs" },
      { title: "Live-In-Care", href: "#live-in-care" },
      { title: "Tracheostomy", href: "#tracheostomy" },
      { title: "Bowel care", href: "#bowel-care" },
      { title: "Spinal injury", href: "#spinal-injury" },
      { title: "Acquired brain injury", href: "#acquired-brain-injury" },
      { title: "Elderly care", href: "#elderly-care" },
      { title: "Peg feeding", href: "#peg-feeding" },
      {
        title: "Learning Disability & Autism",
        href: "#learning-disability-autism",
      },
      { title: "Home care", href: "#home-care" },
      { title: "Cancer care", href: "#cancer-care" },
      { title: "End of life care", href: "#end-of-life-care" },
      { title: "Complex care", href: "#complex-care" },
    ],
  },
  {
    title: "Company",
    hasSubmenu: true,
    submenu: [
      { title: "About Us", href: "#about-us" },
      { title: "Our Vision", href: "#our-vision" },
      { title: "Our Mission", href: "#our-mission" },
      { title: "Our Values", href: "#our-values" },
      { title: "Meet the Team", href: "#meet-the-team" },
      { title: "Location", href: "#location" },
    ],
  },
  {
    title: "Why Us",
    hasSubmenu: false,
    href: "/why-us",
  },
  {
    title: "Career",
    hasSubmenu: false,
    href: "/career",
  },
  //   {title:'', href:''},
  //   {title:'', href:''},
  //   {title:'', href:''},
  //   {title:'', href:''},
  //   {title:'', href:''},
  //   {title:'', href:''},
  //   {title:'', href:''},
  //   {title:'', href:''},
  // ],
];

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
    <div className="bg-white py-4 px-5 lg:px-20 xl:px-40 mx-auto w-full font-medium">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full mx-4 hidden lg:block">
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
    </div>
  );
};

export default Nav;

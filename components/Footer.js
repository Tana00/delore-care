import Image from "next/image";
import { menuList } from "@/utils";

const footerLinks = [
  { title: "Services", submenu: menuList[0].submenu },
  { title: "Company", submenu: menuList[1].submenu },
  {
    title: "Quick Links",
    submenu: [
      { title: "Why Us", href: "/why-us" },
      {
        title: "Careers",
        href: "/careers",
      },
      {
        title: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-blue-light py-4 md:py-10 font-gilmer">
      <div className="max-w-[1920px] px-5 sm:px-10 lg:px-20 xl:px-40 mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[200px_minmax(400px,_700px)_200px_200px] gap-y-8 items-start justify-between">
          <div className="">
            <a href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </a>
          </div>
          {footerLinks.map((link, i) => (
            <div
              key={i}
              className={`${
                link.title === "Services"
                  ? "col-span-4 lg:col-span-1"
                  : "col-span-4 sm:col-auto"
              }`}
            >
              <h2 className="text-blue font-semibold text-lg leading-8">
                {link.title}
              </h2>
              <div
                className={`grid ${
                  link.submenu.length > 8 ? "grid-cols-2" : "grid-cols-1"
                } gap-3 text-blue-black text-sm md:text-base font-normal py-2 w-full`}
              >
                <ul className="">
                  {link.submenu.slice(0, 8).map((submenu, i) => (
                    <li
                      key={i}
                      className="py-2.5 hover:text-red cursor-pointer transition-all"
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
                <ul className="">
                  {link.submenu.slice(8).map((submenu, i) => (
                    <li
                      key={i}
                      className="py-2.5 hover:text-red cursor-pointer transition-all"
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
                {link.title === "Quick Links" && (
                  <ul className="flex items-center justify-start gap-4">
                    <li className="hover:scale-110 transition-all">
                      <a href="#">
                        <Image
                          src="/assets/icons/facebook.svg"
                          alt="logo"
                          width={30}
                          height={30}
                        />
                      </a>
                    </li>
                    <li className="hover:scale-110 transition-all">
                      <a href="#">
                        <Image
                          src="/assets/icons/twitter.svg"
                          alt="logo"
                          width={30}
                          height={30}
                        />
                      </a>
                    </li>
                    <li className="hover:scale-110 transition-all">
                      <a href="#">
                        <Image
                          src="/assets/icons/instagram.svg"
                          alt="logo"
                          width={30}
                          height={30}
                        />
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row items-center lg:justify-center justify-start gap-x-10 md:gap-20 text-blue font-medium py-4 md:pt-10 md:pb-0 lg:pt-16">
          <p>© 2023 Delorecare</p>
          <div className="flex items-center justify-between mb-2 sm:mb-0 gap-x-10 md:gap-20">
            <a
              href="/terms-conditions"
              className="hover:text-red cursor-pointer transition-all"
            >
              Terms & conditions
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-red cursor-pointer transition-all"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

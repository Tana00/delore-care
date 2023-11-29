"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAComponent from "@/components/home/cta";

const Career = () => {
  const [showPopup, setShowPopup] = useState(null);
  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section className="bg-[url('/assets/images/career-hero.png')] bg-cover bg-top bg-no-repeat z-0 relative py-8 md:py-10 lg:py-28 h-auto 2xl:h-screen 2xl:flex items-end justify-center">
        <div className="grid items-start justify-between grid-cols-1 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="text-center my-2 pt-[10rem] sm:pt-[15rem] lg:my-0">
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl min-[2500px]:text-8xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px]">
              Our Careers
            </h2>
            <p className="w-full md:w-4/5 lg:w-3/4 min-[2500px]:w-11/12 mx-auto text-white font-normal text-base md:text-lg lg:!leading-9 min-[2500px]:text-[1.8rem] min-[2500px]:!leading-[70px] sm:!leading-8 my-2 md:my-4 2xl:my-8">
              We have a collection of highly literate and trained staff who
              provide care on a daily basis. We prioritise kindness as a mantra,
              and this is a strong factor in our recruitment. All checks are
              completed before anyone is engaged in providing care for our
              clients. Our team is proud of thecontribution that we make to the
              wider society.
            </p>
          </div>
        </div>
      </section>
      <section className="grid items-start justify-between grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 p-5 sm:p-10 lg:px-20 xl:px-40 xl:pt-28 max-w-[1920px] mx-auto w-full">
        <div className="">
          <h2 className="text-blue font-bold text-[28px] lg:text-[36px] mb-4">
            Our Commitment to Excellence
          </h2>
          <p className="text-gray leading-8 text-base xl:text-[17px] 2xl:text-[1.2rem] xl:leading-9 2xl:leading-[50px] font-normal">
            Delorecare is more than just a healthcare provider; we are a
            community dedicated to delivering the highest standard of care. Our
            commitment to excellence is evident in everything we do, from
            patient care to staff development. We believe that our team members
            are the foundation of our success, and we are always looking for
            dedicated and passionate individuals to join us in making a
            difference in healthcare.
          </p>
        </div>
        <div className="">
          <p className="font-medium text-xl mb-6"> We provide to our staffs:</p>
          <ul>
            {[
              "Joining Bonus",
              "Company Car",
              "Personal Development and Training",
              "Competitive Pay",
              "Flexibility and Time Off",
            ]?.map((item, i) => (
              <li key={i} className="relative">
                <div className="py-4 border-b border-blue-200 flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33301 20C3.33301 15.5798 5.08896 11.3405 8.21456 8.21493C11.3402 5.08932 15.5794 3.33337 19.9997 3.33337C24.4199 3.33337 28.6592 5.08932 31.7848 8.21493C34.9104 11.3405 36.6663 15.5798 36.6663 20C36.6663 24.4203 34.9104 28.6595 31.7848 31.7852C28.6592 34.9108 24.4199 36.6667 19.9997 36.6667C15.5794 36.6667 11.3402 34.9108 8.21456 31.7852C5.08896 28.6595 3.33301 24.4203 3.33301 20ZM27.8463 17.0134C28.0013 16.8584 28.1242 16.6745 28.2081 16.472C28.2919 16.2695 28.3351 16.0525 28.3351 15.8334C28.3351 15.6142 28.2919 15.3972 28.2081 15.1948C28.1242 14.9923 28.0013 14.8083 27.8463 14.6534C27.6914 14.4984 27.5074 14.3755 27.305 14.2916C27.1025 14.2078 26.8855 14.1646 26.6663 14.1646C26.4472 14.1646 26.2302 14.2078 26.0277 14.2916C25.8253 14.3755 25.6413 14.4984 25.4863 14.6534L18.333 21.81L14.513 17.9867C14.358 17.8317 14.1741 17.7088 13.9716 17.625C13.7692 17.5411 13.5522 17.4979 13.333 17.4979C13.1139 17.4979 12.8969 17.5411 12.6944 17.625C12.4919 17.7088 12.308 17.8317 12.153 17.9867C11.998 18.1417 11.8751 18.3256 11.7913 18.5281C11.7074 18.7306 11.6642 18.9476 11.6642 19.1667C11.6642 19.3859 11.7074 19.6029 11.7913 19.8053C11.8751 20.0078 11.998 20.1917 12.153 20.3467L17.153 25.3467C17.3078 25.5019 17.4917 25.6251 17.6942 25.7091C17.8967 25.7931 18.1138 25.8364 18.333 25.8364C18.5522 25.8364 18.7693 25.7931 18.9718 25.7091C19.1743 25.6251 19.3582 25.5019 19.513 25.3467L27.8463 17.0134Z"
                          fill="#12355B"
                        />
                      </svg>
                    </div>
                    <p className="ml-6 text-sm sm:text-base">{item}</p>
                  </div>
                  <svg
                    width="30"
                    height="32"
                    viewBox="0 0 30 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-end cursor-pointer hover:scale-110"
                    onClick={() => {
                      console.log(i, showPopup);
                      setShowPopup((prev) => (prev === i ? null : i));
                    }}
                  >
                    <path
                      d="M16 2.5C13.33 2.5 10.7199 3.29176 8.49981 4.77516C6.27974 6.25856 4.54942 8.36697 3.52763 10.8338C2.50585 13.3006 2.2385 16.015 2.7594 18.6337C3.28031 21.2525 4.56606 23.6579 6.45406 25.5459C8.34207 27.434 10.7475 28.7197 13.3663 29.2406C15.985 29.7615 18.6994 29.4942 21.1662 28.4724C23.633 27.4506 25.7414 25.7203 27.2248 23.5002C28.7082 21.2801 29.5 18.67 29.5 16C29.496 12.4208 28.0724 8.98932 25.5416 6.45844C23.0107 3.92756 19.5792 2.50397 16 2.5ZM16 26.5C13.9233 26.5 11.8932 25.8842 10.1665 24.7304C8.4398 23.5767 7.09399 21.9368 6.29927 20.0182C5.50455 18.0996 5.29662 15.9884 5.70176 13.9516C6.10691 11.9148 7.10693 10.0438 8.57538 8.57538C10.0438 7.10693 11.9148 6.1069 13.9516 5.70175C15.9884 5.29661 18.0996 5.50454 20.0182 6.29926C21.9368 7.09399 23.5767 8.4398 24.7304 10.1665C25.8842 11.8932 26.5 13.9233 26.5 16C26.497 18.7839 25.3898 21.4528 23.4213 23.4213C21.4529 25.3898 18.7839 26.497 16 26.5ZM22.5 16C22.5 16.3978 22.342 16.7794 22.0607 17.0607C21.7794 17.342 21.3978 17.5 21 17.5H17.5V21C17.5 21.3978 17.342 21.7794 17.0607 22.0607C16.7794 22.342 16.3978 22.5 16 22.5C15.6022 22.5 15.2206 22.342 14.9393 22.0607C14.658 21.7794 14.5 21.3978 14.5 21V17.5H11C10.6022 17.5 10.2207 17.342 9.93935 17.0607C9.65804 16.7794 9.50001 16.3978 9.50001 16C9.50001 15.6022 9.65804 15.2206 9.93935 14.9393C10.2207 14.658 10.6022 14.5 11 14.5H14.5V11C14.5 10.6022 14.658 10.2206 14.9393 9.93934C15.2206 9.65804 15.6022 9.5 16 9.5C16.3978 9.5 16.7794 9.65804 17.0607 9.93934C17.342 10.2206 17.5 10.6022 17.5 11V14.5H21C21.3978 14.5 21.7794 14.658 22.0607 14.9393C22.342 15.2206 22.5 15.6022 22.5 16Z"
                      fill="#12355B"
                    />
                  </svg>
                </div>
                {showPopup === i && (
                  <div
                    className="z-30 absolute mt-2 w-full h-auto rounded-2xl bg-white border border-blue-200 text-[13px] px-5 py-3.5 leading-6"
                    style={{ boxShadow: "0px 20px 57px 0px #000001A" }}
                  >
                    <p>
                      As a token of our appreciation for choosing Delorecare, we
                      are pleased to offer a joining bonus to our new team
                      members. This bonus is our way of saying "thank you" for
                      your commitment to making a positive impact on healthcare.
                    </p>
                    <p className="mt-2.5">
                      Your joining bonus package includes:
                      <ul className="list-disc ml-3">
                        <li>
                          A competitive monetary bonus upon successful
                          onboarding and completion of your initial training.
                        </li>
                        <li>
                          Additional benefits and rewards designed to make your
                          transition to Delorecare smooth and financially
                          rewarding.
                        </li>
                        <li>
                          Support and resources to help you settle into your new
                          role, including mentorship and guidance from
                          experienced colleagues.
                        </li>
                      </ul>
                    </p>
                    <ul></ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-14">
        <Image
          src="/assets/images/about1.svg"
          alt="about us"
          width={500}
          height={500}
        />
        <Image
          src="/assets/images/about2.svg"
          alt="about us"
          width={500}
          height={500}
        />
        <Image
          src="/assets/images/about3.svg"
          alt="about us"
          width={500}
          height={500}
        />
        <Image
          src="/assets/images/about4.svg"
          alt="about us"
          width={500}
          height={500}
        />
      </section>
      <section className="grid items-start justify-between grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 p-5 sm:p-10 lg:px-20 xl:px-40 xl:pt-32 max-w-[1920px] mx-auto w-full">
        <div className="">
          <h2 className="text-blue font-bold text-[28px] lg:text-[36px] mb-4">
            Join Us
          </h2>
          <p className="text-gray leading-8 text-base md:text-lg 2xl:text-[1.5rem] xl:leading-[40px] 2xl:text-3xl 2xl:leading-[50px] font-normal">
            Explore our current career opportunities and discover how you can
            contribute your skills and expertise to Delorecare's mission of
            empowering health and enhancing lives. We offer positions in various
            areas, including:
          </p>
        </div>
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-6">
            {[
              "Registered Nurses",
              "Specialist Nurses",
              "Healthcare Support",
              "Support Workers",
            ]?.map((item) => (
              <li className="px-4 lg:px-10 py-6 sm:py-0 mb-5 border border-blue-light bg-blue-light flex flex-row items-center justify-between w-full h-[165px]">
                <div className="flex flex-col items-center lg:items-start">
                  {/* <div className="w-6 h-6"> */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="80" height="80" rx="40" fill="white" />
                    <path
                      d="M33.695 25L33.5 26.0163L32.25 33.0475V37.5H32.3675C32.5406 38.7082 32.9634 39.8671 33.6091 40.9029C34.2547 41.9388 35.109 42.8288 36.1175 43.5163C31.6588 45.4287 28.5 49.8538 28.5 55H31C30.998 53.4997 31.3341 52.0183 31.9833 50.6657C32.6325 49.3132 33.5782 48.1243 34.75 47.1875V48.0075L35.1013 48.3988L40.1012 53.3988L41 54.2575L41.8988 53.3988L46.8988 48.3988L47.25 48.0075V47.1875C48.4218 48.1243 49.3675 49.3132 50.0167 50.6657C50.6659 52.0183 51.002 53.4997 51 55H53.5C53.5 49.8538 50.3412 45.43 45.8825 43.515C46.8909 42.8276 47.7451 41.9378 48.3907 40.9023C49.0363 39.8667 49.4592 38.708 49.6325 37.5H49.75V33.0463L48.5 26.0163L48.305 25H33.695ZM35.805 27.5H46.195L47.25 33.4762V35H34.75V33.4762L35.805 27.5ZM39.75 28.75V30H38.5V32.5H39.75V33.75H42.25V32.5H43.5V30H42.25V28.75H39.75ZM34.8675 37.5H47.1325C46.8439 38.9129 46.0756 40.1825 44.958 41.0937C43.8404 42.005 42.442 42.5018 41 42.5C39.558 42.5018 38.1596 42.005 37.042 41.0937C35.9244 40.1825 35.1561 38.9129 34.8675 37.5ZM41 45C42.2834 44.9933 43.5563 45.2322 44.75 45.7038V46.9538L41 50.7038L37.25 46.9538V45.7038C38.4437 45.2322 39.7166 44.9933 41 45Z"
                      fill="#12355B"
                    />
                  </svg>
                  {/* </div> */}
                  <p className="text-[15px] sm:text-base font-medium mt-4">
                    {item}
                  </p>
                </div>
                <Link
                  href={`/careers/${item.toLowerCase()}`}
                  className="w-auto"
                >
                  <div className="">
                    <button className="bg-blue text-white border border-blue rounded-lg w-32 py-3 text-base hover:bg-white hover:text-blue transition-all">
                      Apply
                    </button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTAComponent />
    </main>
  );
};

export default Career;

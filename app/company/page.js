"use client";
import Image from "next/image";
import Link from "next/link";
import CTAComponent from "@/components/cta";
import BookAppointment from "@/components/home/book-appointment";
import { teamList, valueList } from "@/utils";

const Company = () => {
  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section id="about-us" className="z-0 relative">
        <div className="bg-[url('/assets/images/about-hero-bg.svg')] bg-cover bg-no-repeat">
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
            <div className="text-center lg:text-left col-span-6 2xl:mr-36 mt-20 lg:mt-0">
              <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-[40px] md:!leading-[50px] lg:!leading-[65px] xl:!leading-[80px]">
                About Us
              </h2>
              <p className="text-white font-light text-base md:text-lg 2xl:text-[28px] 2xl:!leading-[50px] !leading-7 md:!leading-8 my-4 2xl:my-8 sm:mx-4 md:mx-20 lg:mx-0">
                At Delore Care, every team member is valued and appreciated. Our
                operational strategy places an inestimable value on every
                contribution. We do not have many lines of hierarchy.
              </p>
              <div className="flex items-center lg:justify-start justify-center sm:flex-row flex-col gap-4 my-4 md:mt-10">
                <Link href="/contact-us">
                  <button className="bg-red text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-6 w-full h-full">
              <div className="w-full relative">
                <Image
                  src="/assets/images/about-hero.svg"
                  alt="carers"
                  width={500}
                  height={500}
                  className="w-full h-full"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookAppointment />
      {/* Our Mission */}
      <section id="our-mission" className="md:mb-20 md:mt-14">
        <div className="grid items-start justify-between grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-24 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="relative">
            <Image
              src="/assets/images/mission.png"
              alt="our mission"
              width={566}
              height={469}
              className="w-full"
            />
          </div>
          <div className="">
            <div className="bg-blue-light md:p-3 rounded-full w-16 h-16 lg:w-20 lg:h-20 2xl:w-32 2xl:h-32">
              <img
                src="/assets/icons/mission.svg"
                alt="our mission"
                className=""
              />
            </div>
            <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:my-2 lg:my-4 2xl:my-8">
              Our Mission
            </p>
            <p className="text-gray !leading-8 text-base md:text-lg 2xl:text-[1.5rem] xl:!leading-[40px] 2xl:text-3xl 2xl:!leading-[50px] font-normal">
              Our mission is to support people to live fulfilling lives by
              delivering exceptional care for our service users. We maintain
              continuity, consistency, and dedication to continuous improvement.
            </p>
          </div>
        </div>
      </section>
      {/* Our Vision */}
      <section id="our-vision" className="my-16 md:my-28 lg:my-32">
        <div className="grid items-start justify-between grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-24 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="order-2 md:order-1">
            <div className="bg-blue-light md:p-3 rounded-full w-16 h-16 lg:w-20 lg:h-20 2xl:w-32 2xl:h-32">
              <img
                src="/assets/icons/vision.svg"
                alt="our vision"
                className=""
              />
            </div>
            <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:my-2 lg:my-4 2xl:my-8">
              Our Vision
            </p>
            <p className="text-gray !leading-8 text-base md:text-lg 2xl:text-[1.5rem] xl:!leading-[40px] 2xl:text-3xl 2xl:!leading-[50px] font-normal">
              We recognise that commonly accepted levels of service satisfaction
              are not enough, hence we set out to continually improve our
              service delivery and approach to care.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="/assets/images/vision.png"
              alt="our vision"
              width={566}
              height={469}
              className="w-full"
            />
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section id="our-values" className="py-24 md:py-[12rem] bg-blue-light">
        <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:mb-8 text-center">
            Our Values
          </p>
          <div className="grid items-start justify-evenly grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {valueList?.map((value, index) => (
              <div
                key={value.id}
                className={`${
                  index === valueList.length - 1 ? "lg:col-start-2" : ""
                } text-center flex items-center justify-center flex-col md:h-[364px]`}
              >
                <div className="bg-white p-3 rounded-full w-14 h-14">
                  <img
                    src={`/assets/icons/${value.img}`}
                    alt={value.title}
                    className="h-full w-full"
                  />
                </div>
                <p className="md:text-2xl !leading-[64px] font-semibold text-blue">
                  {value.title}
                </p>
                <p className="text-gray text-sm leading-7 md:leading-9 mx-4 md:mx-0">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      {/* <section id="team" className="my-10 md:my-24">
        <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:mb-8 text-center">
            Meet The Team
          </p>
          <p className="text-gray text-sm leading-8 mt-5 text-center w-full md:w-2/3 mx-auto">
            At Delore Care, our exceptional healthcare services are made possible
            by the dedication and expertise of our remarkable team. Get to know
            the individuals who are committed to delivering compassionate and
            personalized care to you and your loved ones:
          </p>
          <div className="grid items-start justify-evenly grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10 mt-20">
            {teamList.map((team) => (
              <div className="h-[500px] bg-white border border-blue-200 p-4 rounded-2xl text-center flex items-center justify-evenly flex-col">
                <Image
                  src={`/assets/images/${team.avatar}`}
                  alt={team.name}
                  width={120}
                  height={120}
                />
                <div>
                  <p className="text-blue font-semibold text-lg leading-[44px]">
                    {team.name}
                  </p>
                  <p className="text-gray font-medium text-sm">{team.title}</p>
                </div>
                <p className="leading-8 text-sm">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* CTA */}
      {/* Our Carers */}
      <section id="our-carers" className="md:mb-20 md:mt-28 2xl:mb-28">
        <div className="grid items-start justify-between grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-24 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="relative">
            <Image
              src="/assets/images/carers.png"
              alt="our mission"
              width={566}
              height={469}
              className="w-full"
            />
          </div>
          <div className="">
            <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:mb-2 lg:mb-4 2xl:mb-8">
              Our Carers
            </p>
            <p className="text-gray !leading-8 text-base md:text-lg 2xl:text-[1.5rem] xl:!leading-[40px] 2xl:text-3xl 2xl:!leading-[50px] font-normal">
              We have a collection of highly literate, trained and competent
              staff who provide care on a daily basis. We prioritise kindness as
              a mantra, and this is a strong factor in our recruitment. All
              checks are completed before anyone is engaged in providing care
              for our clients. Our team is proud of the contribution that we
              make in our local communities and the wider society.
            </p>
          </div>
        </div>
      </section>
      {/* Our Management Team */}
      <section id="our-management-team" className="my-16 md:my-28 lg:my-32">
        <div className="grid items-start justify-between grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-24 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="order-2 md:order-1">
            <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:mb-2 lg:mb-4 2xl:mb-8">
              Our Management Team
            </p>
            <p className="text-gray !leading-8 text-base md:text-lg 2xl:text-[1.5rem] xl:!leading-[40px] 2xl:text-3xl 2xl:!leading-[50px] font-normal">
              Our team of managers and senior managers are involved in the
              day-to-day running of the operations- we are always within reach.
              We ensure that you and your loved ones are known to us
              individually and you get the person-centred care that is required.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="/assets/images/management-team.png"
              alt="our vision"
              width={566}
              height={469}
              className="w-full"
            />
          </div>
        </div>
      </section>
      <CTAComponent />
    </main>
  );
};

export default Company;

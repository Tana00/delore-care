"use client";
import CTAComponent from "@/components/cta";
import BookAppointment from "@/components/home/book-appointment";
import Image from "next/image";

const valueList = [
  {
    id: 0,
    img: "compassion.svg",
    title: "Compassion",
    desc: "We believe in delivering care with empathy, understanding, and kindness, recognizing that each patient is unique and deserving of personalized attention.",
  },
  {
    id: 1,
    img: "excellence.svg",
    title: "Excellence",
    desc: "We strive for excellence in everything we do, from patient care to medical innovation, continuously seeking opportunities to improve and set new standards in healthcare.",
  },
  {
    id: 2,
    img: "integrity.svg",
    title: "Integrity",
    desc: "Our commitment to integrity is unwavering. We uphold the highest ethical and professional standards, ensuring transparency, honesty, and trustworthiness in all our interactions.",
  },
  {
    id: 3,
    img: "collaboration.svg",
    title: "Collaboration",
    desc: "We value the power of teamwork, fostering collaboration among our staff, partners, and the community to achieve the best possible outcomes for our patients.",
  },
  {
    id: 4,
    img: "innovation.svg",
    title: "Innovation",
    desc: "Innovation is the driving force behind our progress. We embrace new technologies, treatments, and approaches to continually improve the health and well-being of those we serve.",
  },
  {
    id: 5,
    img: "centric-care.svg",
    title: "Patient-Centric Care",
    desc: "Patients are at the center of all that we do. We prioritize their needs, preferences, and goals, ensuring they are actively involved in their healthcare decisions.",
  },
  {
    id: 6,
    img: "community.svg",
    title: "Community Engagement",
    desc: "We are deeply committed to engaging with our local community, supporting initiatives that promote health, wellness, and a sense of belonging.",
  },
];

const teamList = [
  {
    id: 0,
    avatar: "male-avatar.svg",
    name: "Dr. Tim Kate, MD",
    title: "Chief Medical Officer",
    desc: "With over 10years of experience, Dr. Tim Kate leads our medical team with a strong commitment to excellence and a passion for patient care. Their areas of expertise and they have received numerous accolades for their contributions to the field.",
  },
  {
    id: 1,
    avatar: "female-avatar1.svg",
    name: "Dr. Tim Kate, MD",
    title: "Chief Medical Officer",
    desc: "With over 10years of experience, Dr. Tim Kate leads our medical team with a strong commitment to excellence and a passion for patient care. Their areas of expertise and they have received numerous accolades for their contributions to the field.",
  },
  {
    id: 2,
    avatar: "male-avatar.svg",
    name: "Dr. Tim Kate, MD",
    title: "Chief Medical Officer",
    desc: "With over 10years of experience, Dr. Tim Kate leads our medical team with a strong commitment to excellence and a passion for patient care. Their areas of expertise and they have received numerous accolades for their contributions to the field.",
  },
  {
    id: 3,
    avatar: "female-avatar2.svg",
    name: "Dr. Tim Kate, MD",
    title: "Chief Medical Officer",
    desc: "With over 10years of experience, Dr. Tim Kate leads our medical team with a strong commitment to excellence and a passion for patient care. Their areas of expertise and they have received numerous accolades for their contributions to the field.",
  },
  {
    id: 4,
    avatar: "male-avatar.svg",
    name: "Dr. Tim Kate, MD",
    title: "Chief Medical Officer",
    desc: "With over 10years of experience, Dr. Tim Kate leads our medical team with a strong commitment to excellence and a passion for patient care. Their areas of expertise and they have received numerous accolades for their contributions to the field.",
  },
  {
    id: 5,
    avatar: "female-avatar2.svg",
    name: "Dr. Tim Kate, MD",
    title: "Chief Medical Officer",
    desc: "With over 10years of experience, Dr. Tim Kate leads our medical team with a strong commitment to excellence and a passion for patient care. Their areas of expertise and they have received numerous accolades for their contributions to the field.",
  },
];

const Company = () => {
  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section id="about-us" className="z-0 relative">
        <div className="bg-[url('/assets/images/about-hero-bg.svg')] bg-cover bg-no-repeat">
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
            <div className="text-center lg:text-left col-span-6 2xl:mr-36 my-20 lg:my-0">
              <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-[40px] md:!leading-[50px] lg:!leading-[65px] xl:!leading-[80px]">
                About Us
              </h2>
              <p className="text-white font-light text-base md:text-lg 2xl:text-3xl 2xl:!leading-[50px] !leading-7 md:!leading-8 my-4 2xl:my-8 sm:mx-4 md:mx-20 lg:mx-0">
                At Delore Care, every team member is valued and appreciated. Our
                operational strategy places an inestimable value on every
                contribution. We do not have many lines of hierarchy.
              </p>
              <div className="flex items-center lg:justify-start justify-center sm:flex-row flex-col gap-4 my-4 md:mt-10">
                <button className="bg-red text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                  Contact Us
                </button>
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
              Our mission is to always deliver exceptional care for our clients
              by maintaining consistency of purpose and continually adopting
              best practices.
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
                alt="our mission"
                className=""
              />
            </div>
            <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:my-2 lg:my-4 2xl:my-8">
              Our Vision
            </p>
            <p className="text-gray !leading-8 text-base md:text-lg 2xl:text-[1.5rem] xl:!leading-[40px] 2xl:text-3xl 2xl:!leading-[50px] font-normal">
              We recognise that commonly accepted levels of service satisfaction
              are no longer enough, hence we set out to continuously improve our
              service delivery and approach to care.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="/assets/images/vision.png"
              alt="our mission"
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
          <div className="grid items-start justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {valueList?.map((value) => (
              <div
                key={value.id}
                className="text-center flex items-center justify-center flex-col md:h-[364px]"
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
      <section id="team" className="my-10 md:my-24">
        <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <p className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl !leading-[50px] lg:!leading-[64px] md:mb-8 text-center">
            Meet The Team
          </p>
          <p className="text-gray text-sm leading-8 mt-5 text-center w-full md:w-2/3 mx-auto">
            At Delorecare, our exceptional healthcare services are made possible
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
      </section>
      {/* CTA */}
      <CTAComponent />
    </main>
  );
};

export default Company;

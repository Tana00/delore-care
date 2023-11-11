"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CTAComponent from "@/components/cta";
import { servicesList } from "@/utils";

const Services = () => {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(servicesList[0]);
  const service = searchParams.get("service");

  useEffect(() => {
    if (service) {
      const selectedService = servicesList.find(
        (serviceItem) =>
          serviceItem.title
            .toLowerCase()
            .replace(/\s/g, "-")
            .replace(/&/g, "and") === service
      );

      selectedService
        ? setActiveService(selectedService)
        : setActiveService(servicesList[0]);
    }
  }, [service]);

  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section className="z-0 relative">
        <div
          className="bg-no-repeat bg-top lg:h-[730px]"
          style={{
            backgroundImage:
              'linear-gradient(89.5deg, #FFFFFF 19.46%, rgba(255, 255, 255, 0.668713) 42.72%, rgba(255, 255, 255, 0) 59.61%), url("/assets/images/services-hero.svg")',
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 lg:py-52 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
            <div className="text-center lg:text-left col-span-6 2xl:mr-36 my-20 lg:my-0">
              <h2 className="text-blue font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-[40px] md:!leading-[50px] lg:!leading-[65px] xl:!leading-[80px]">
                Services
              </h2>
              <p className="text-gray font-medium lg:font-normal text-base md:text-lg 2xl:text-3xl 2xl:!leading-[50px] !leading-7 md:!leading-8 my-4 2xl:my-8 sm:mx-4 md:mx-20 lg:mx-0">
                At Delorecare, we take pride in offering a wide range of
                comprehensive healthcare services, ensuring that all your
                medical needs are met under one roof.
              </p>
              <div className="flex items-center lg:justify-start justify-center sm:flex-row flex-col gap-4 my-4 md:mt-10">
                <button className="bg-blue text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-56 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services list */}
      <section id="services" className="relative my-20">
        <div className="grid items-start justify-between grid-cols-1 md:grid-cols-12 gap-6 2xl:gap-16 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="bg-blue-light p-8 col-span-12 md:col-span-5 rounded-2xl services md:h-[900px] 2xl:h-auto overflow-y-scroll">
            <p className="text-[15px] font-normal leading-7">
              Our dedicated healthcare professionals, state-of-the-art
              technology, and patient-centric approach make us a trusted
              healthcare partner. Explore the array of services we provide:
            </p>
            <div className="grid grid-cols-1 gap-4 mt-6">
              {servicesList?.map((service) => (
                <a
                  href={`#${service.title.toLowerCase().replace(/ /g, "-")}`}
                  key={service.id}
                  className={`px-3 py-2.5 ${
                    activeService?.title === service?.title
                      ? "bg-red text-white"
                      : "bg-transparent text-blue"
                  } text-[17px] w-fit rounded-lg font-semibold cursor-pointer hover:bg-red hover:text-white transition`}
                  onClick={() => {
                    setActiveService(service);
                  }}
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div
              className={`rounded-lg h-[300px] 2xl:h-[600px] w-full bg-contain relative bg-no-repeat`}
              style={{
                backgroundImage: `url(${activeService?.png})`,
                backgroundSize: "100% 100%",
              }}
            ></div>
            <div className="text-gray text-[15px] leading-8">
              <h2 className="text-blue font-semibold text-2xl md:text-3xl lg:text-[35px] leading-10 md:leading-[50px] mt-4 md:my-3 lg:my-6">
                {activeService?.title}
              </h2>
              <p className="">{activeService?.content?.text}</p>
              <ul className="mt-4 mx-5">
                {activeService?.content.lists?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="mt-8 bg-blue text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-56 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <CTAComponent />
    </main>
  );
};

export default Services;

"use client";
import { useState } from "react";
import { locationList } from "@/utils";
import Map from "@/components/Map";

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(locationList[0]);
  return (
    <main className="bg-white font-gilmer backdrop-blur-xl bg-white/30">
      {/* Hero section */}
      <section className="bg-red-light z-0 relative py-8 md:py-10 lg:py-28">
        <div className="relative flex flex-col md:flex-row items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="text-center my-2 lg:my-0">
            <h2 className="capitalize text-blue font-bold text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px]">
              Location
            </h2>
            <p className="text-gray font-normal text-base md:text-lg 2xl:text-2xl 2xl:leading-[50px] leading-8 my-2 md:my-4 2xl:my-8">
              Get in touch with Delore care today, we are always ready to help.
            </p>
          </div>
        </div>
      </section>
      <section className="p-5 sm:p-10 lg:p-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <div className="grid items-start justify-between grid-cols-1 md:grid-cols-12 gap-6 2xl:gap-16 max-w-[1920px] mx-auto w-full">
          <div className="col-span-12 md:col-span-5">
            {locationList.map((location) => (
              <div
                key={location.id}
                className={`${
                  activeLocation?.id === location.id
                    ? "bg-blue-light border-blue border-l-2"
                    : "bg-transparent border-blue-200 border-l"
                } p-4 px-6 mb-10 cursor-pointer`}
                onClick={() => setActiveLocation(location)}
              >
                <p className="font-medium text-sm text-red">{location.type}</p>
                <h2 className="text-blue font-semibold text-xl leading-10">
                  {location.name}
                </h2>
                <p className="w-1/2 text-sm font-medium text-gray">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center justify-center flex-col">
            <Map />
            <div className="bg-blue p-8 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-5">
              <div className="w-full text-white flex items-start flex-col gap-y-4 text-sm">
                <p className="font-medium text-base text-red">
                  Book An Appointment
                </p>
                <p className="font-semibold">Mon. Fri.</p>
                <p>5: 30am - 10:00pm</p>
                <p className="font-semibold">Sat. - Sun.</p>
                <p>7:00am - 10:00pm</p>
                <button className="lg:mt-8 bg-red text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-56 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                  Book an Appointment
                </button>
              </div>
              <div className="w-full text-white flex items-start flex-col gap-y-4 text-sm">
                <p className="font-semibold text-base text-red">
                  Contact Details
                </p>
                <p className="font-semibold">Manager</p>
                <p>Kate Tyler</p>
                <p className="font-semibold">Manager’s Telephone Number</p>
                <p>44 (0) 2039357118</p>
                <p className="font-semibold">Call</p>
                <p>44 (0) 2039357118, 44 (0) 2080549264</p>
                <p className="font-semibold">Email</p>
                <p>bristol@delorecare.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Locations;

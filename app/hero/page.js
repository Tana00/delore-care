"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "../../public/assets/images/hero1.svg";
import hero2 from "../../public/assets/images/hero2.svg";
import hero4 from "../../public/assets/images/hero4.svg";
import hero5 from "../../public/assets/images/hero5.svg";

const Hero = () => {
  const images = [hero1, hero2, hero4, hero5];
  const [imageIndices, setImageIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      // Create a new array with the rotated elements
      const rotatedIndices = [
        imageIndices[imageIndices.length - 1],
        ...imageIndices.slice(0, imageIndices.length - 1),
      ];
      console.log("rotatedIndices", rotatedIndices);
      setImageIndices(rotatedIndices);
    }, 5000); // Rotate every 5 seconds

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(rotationInterval);
    };
  }, [imageIndices]);

  return (
    <section className="py-6 bg-[url('/assets/images/hero-bg.svg')] bg-left bg-cover bg-no-repeat z-10 relative">
      <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <div className="text-center lg:text-left col-span-7 2xl:mr-36">
          <h2 className="text-blue font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px]">
            Your Pathway to Health and Wellness
          </h2>
          <p className="text-gray font-normal text-base md:text-lg 2xl:text-3xl 2xl:leading-[50px] leading-6 md:leading-8 my-4 2xl:my-8">
            At Delorecare, we put your health and well-being first. Welcome to
            our trusted healthcare community where your care is our top
            priority.
          </p>
          <div className="flex items-center lg:justify-start justify-center sm:flex-row flex-col gap-4 my-4">
            <button className="bg-blue text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 text-base font-medium rounded-lg sm:mr-4">
              Contact Us
            </button>
            <button className="bg-white text-blue w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-56 h-14 font-medium rounded-full text-base flex items-center justify-between px-4 border border-blue">
              <div className="mr-4 flex items-center">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>View Location</span>
              </div>
              <Image
                src="/assets/icons/up-arrow.svg"
                alt="up-arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-5 w-full grid grid-cols-2 gap-2 md:gap-4">
          <div className="first w-full lg:w-[220px] 2xl:w-full 2xl:h-[350px] h-[290px] rounded-2xl relative">
            <Image
              src={images[imageIndices[0]]}
              alt="carer"
              className="w-full h-full rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={`hidden lg:block second w-full lg:w-[220px] 2xl:w-full 2xl:h-[350px] h-[290px] rounded-2xl mt-0 lg:-mt-64 relative`}
          >
            <Image
              src={images[imageIndices[1]]}
              alt="carer"
              className="w-full h-full rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="third w-full lg:w-[220px] 2xl:w-full 2xl:h-[350px] h-[290px] rounded-2xl relative">
            <Image
              src={images[imageIndices[1]]}
              alt="carer"
              className="w-full h-full rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="fourth w-full lg:w-[220px] 2xl:w-full 2xl:h-[350px] h-[290px] rounded-2xl mt-0 lg:-mt-64 relative">
            <Image
              src={images[imageIndices[2]]}
              alt="carer"
              className="w-full h-full rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full lg:w-[220px] 2xl:w-full 2xl:h-[350px] h-[290px] rounded-2xl col-start-2 mt-0 lg:-mt-64 relative">
            <Image
              src={images[imageIndices[3]]}
              alt="carer"
              className="w-full h-full rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

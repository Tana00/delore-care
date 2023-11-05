"use client";
import { useRef } from "react";
import Image from "next/image";

const testimonialList = [
  {
    id: 0,
    name: "Sarah K.",
    avatar: "/assets/images/testimonial1.svg",
    desc: "I can't thank the Delorecare team enough for the exceptional care I received. Their compassionate staff and skilled doctors truly made a difference in my health journey. I felt heard, valued, and, most importantly, on the road to recovery. Delorecare isn't just a healthcare provider; they're a partner in your well-being.",
  },
  {
    id: 1,
    name: "Emily R.",
    avatar: "/assets/images/testimonial2.svg",
    desc: "The care I received at Delorecare was beyond my expectations. Dr. Smith is a true professional who takes the time to listen and explain things in a way that's easy to understand. The entire experience, from making an appointment to post-visit follow-ups, was seamless. I can't recommend Delorecare enough for top-notch healthcare.",
  },
  {
    id: 2,
    name: "John M.",
    avatar: "/assets/images/testimonial3.svg",
    desc: "When it comes to healthcare, trust matters most, and Delorecare has earned my trust. From the front desk staff to the specialists, everyone at Delorecare is dedicated to patient well-being. I've never felt more comfortable and cared for in a healthcare setting. I'm grateful to have Delorecare as my healthcare partner.",
  },
  {
    id: 3,
    name: "Sarah K.",
    avatar: "/assets/images/testimonial1.svg",
    desc: "I can't thank the Delorecare team enough for the exceptional care I received. Their compassionate staff and skilled doctors truly made a difference in my health journey. I felt heard, valued, and, most importantly, on the road to recovery. Delorecare isn't just a healthcare provider; they're a partner in your well-being.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const deviceWidth = typeof window !== "undefined" && window.innerWidth;
  const isMobile = deviceWidth < 640;
  const isTablet = deviceWidth >= 640 && deviceWidth < 768;

  let scrollDistance = 0;

  if (isMobile) {
    scrollDistance = deviceWidth;
  } else if (isTablet) {
    scrollDistance = 460; // Adjust this value to your cardWidth
  } else {
    scrollDistance = 300;
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollDistance, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollDistance, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="bg-blue-light py-16">
      <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <p className="text-red font-medium">Testimonials</p>
        <div className="flex items-start justify-between flex-col md:flex-row my-2">
          <div className="w-full md:w-2/3">
            <p className="text-blue font-bold text-4xl xl:text-[40px] leading-10 sm:leading-[50px] xl:leading-[64px] sm:my-4 md:my-0">
              What Our Customers
              <br className="" /> Are Saying
            </p>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-start md:justify-center md:gap-8 gap-12">
            <button
              onClick={scrollLeft}
              className="my-6 w-10 h-10 relative hover:scale-105 transition-all"
            >
              <Image
                src="/assets/icons/arrow-left.svg"
                alt="up-arrow"
                fill
                objectFit="cover"
              />
            </button>
            <button
              onClick={scrollRight}
              className="my-6 w-10 h-10 relative hover:scale-105 transition-all"
            >
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="up-arrow"
                fill
                objectFit="cover"
              />
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex flex-nowrap overflow-x-scroll gap-8 w-full services mt-12"
        >
          {testimonialList?.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl flex-none w-full sm:w-[460px]"
            >
              <p className="leading-8">"{item.desc}"</p>
              <div className="flex items-center mt-3 gap-2">
                <div className="rounded-full p-1.5">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

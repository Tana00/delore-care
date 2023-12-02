"use client";
import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonialList = [
  {
    id: 0,
    name: "Sarah K.",
    avatar: "/assets/images/testimonial1.svg",
    desc: "I can't thank the Delorecare team enough for the exceptional care I received. Their compassionate staff and skilled doctors truly made a difference in my health journey. I felt heard, valued, and, most importantly, on the road to recovery.",
  },
  {
    id: 1,
    name: "Emily R.",
    avatar: "/assets/images/testimonial2.svg",
    desc: "The care I received at Delorecare was beyond my expectations. They are true professionals who takes the time to listen and explain things in a way that's easy to understand. The entire experience, from making an appointment to post-visit follow-ups, was seamless. ",
  },
  {
    id: 2,
    name: "John M.",
    avatar: "/assets/images/testimonial3.svg",
    desc: "When it comes to healthcare, trust matters most, and Delorecare has earned my trust. From the front desk staff to the specialists, everyone at Delorecare is dedicated to patient well-being. I've never felt more comfortable and cared for in a healthcare setting.",
  },
  {
    id: 3,
    name: "Sarah K.",
    avatar: "/assets/images/testimonial1.svg",
    desc: "I can't thank the Delorecare team enough for the exceptional care I received. Their compassionate staff and skilled doctors truly made a difference in my health journey. I felt heard, valued, and, most importantly, on the road to recovery.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: "auto",
      spacing: 30,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      console.log(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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
          {loaded && instanceRef.current && (
            <div className="w-full md:w-1/3 flex items-center justify-start md:justify-center md:gap-8 gap-12">
              <button
                className="my-6 w-10 h-10 relative hover:scale-105 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              >
                <Image
                  src="/assets/icons/arrow-left.svg"
                  alt="up-arrow"
                  fill
                  objectFit="cover"
                />
              </button>
              <button
                className="my-6 w-10 h-10 relative hover:scale-105 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={(e) => {
                  e.stopPropagation() || instanceRef.current?.next();
                  console.log(
                    currentSlide
                    // instanceRef.current.track.details.slides.length - 1
                  );
                }}
                disabled={currentSlide === testimonialList.length - 1}
              >
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="up-arrow"
                  fill
                  objectFit="cover"
                />
              </button>
            </div>
          )}
        </div>
        <div ref={sliderRef} className="keen-slider">
          {testimonialList?.map((item, index) => (
            <div
              key={item.id}
              className={`keen-slider__slide number-slide${index} !h-[350px] snap-start bg-white p-6 rounded-2xl flex-none w-full sm:!w-[45%] md:!w-[48%] xl:!w-[31%] 2xl:!w-[32%]`}
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

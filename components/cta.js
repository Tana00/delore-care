import Image from "next/image";

const CTAComponent = () => {
  return (
    <section id="cta" className="bg-blue z-0 relative my-20">
      <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-evenly">
          <div className="flex items-center justify-center lg:my-10">
            <div className="w-11/12 mx-auto lg:mr-auto 2xl:ml-0 py-10 text-center lg:text-left">
              <div className="bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto lg:ml-0">
                <Image
                  src="/assets/icons/chat.svg"
                  alt="chat"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-white my-4 text-[15px] sm:text-base leading-7 sm:leading-8">
                Got questions or need assistance? Our dedicated team is ready to
                help. Reach out through our contact form, call us, or visit us
                in person.
              </p>
              <button className="bg-red text-white w-10/12 min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative w-full h-full">
            <img
              src="/assets/images/about-cta.png"
              alt="carer"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-end lg:my-10">
            <div className="w-11/12 mx-auto lg:ml-auto 2xl:ml-0 py-10 text-center lg:text-right flex flex-col items-center lg:items-end">
              <div className="bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center mb-2 mx-auto lg:mr-0">
                <Image
                  src="/assets/icons/booking.svg"
                  alt="calender"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-white text-[15px] sm:text-base leading-7 sm:leading-8 mb-6 lg:mb-0 lg:h-[132px]">
                We're dedicated to empowering health and enhancing lives. Your
                well-being is our priority.
              </p>
              <button className="bg-red text-white w-10/12 min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-64 h-14 text-base font-medium rounded-lg hover:scale-105 transition-all">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAComponent;

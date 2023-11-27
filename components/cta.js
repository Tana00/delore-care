import Image from "next/image";
import Link from "next/link";

const CTAComponent = () => {
  return (
    <section id="cta" className="bg-blue z-0 relative my-10 md:my-20">
      <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start md:items-baseline lg:items-center justify-evenly">
          <div className="flex items-center justify-center lg:my-10 order-1">
            <div className="w-11/12 mx-auto sm:w-full lg:mr-auto 2xl:ml-0 py-10 text-center sm:text-left">
              <div className="bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto sm:ml-0">
                <Image
                  src="/assets/icons/chat.svg"
                  alt="chat"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-white my-4 text-[15px] sm:text-base leading-7 sm:leading-8 md:mr-8 lg:mr-0">
                Got questions or need assistance? Our dedicated team is ready to
                help. Reach out through our contact form, call us, or visit us
                in person.
              </p>
              <Link href="/contact-us">
                <button className="bg-red text-white w-10/12 min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full sm:h-[600px] lg:h-full sm:order-last order-2 lg:order-2 col-span-2 lg:col-auto">
            <img
              src="/assets/images/about-cta.svg"
              alt="carer"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-end lg:my-10 order-3 md:order-2 lg:order-3">
            <div className="w-11/12 mx-auto sm:w-full lg:ml-auto 2xl:ml-0 py-10 text-center sm:text-right flex flex-col items-center sm:items-end">
              <div className="bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto sm:mr-0">
                <Image
                  src="/assets/icons/booking.svg"
                  alt="calender"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-white mt-4 text-[15px] sm:text-base leading-7 sm:leading-8 sm:ml-12 md:ml-0 xl:ml-8">
                We're dedicated to empowering health and enhancing lives. Your
                well-being is our priority.
              </p>
              <br />
              <br />
              <Link href="/contact-us" className="lg:w-full w-auto">
                <button className="w-full bg-red text-white sm:w-10/12 min-[400px]:w-3/4 min-[500px]:w-3/5 md:w-64 h-14 text-base font-medium rounded-lg hover:scale-105 transition-all">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAComponent;

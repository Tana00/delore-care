import Image from "next/image";

const CTA = () => {
  return (
    <section className="bg-blue my-20">
      <div className="max-w-[1920px] mx-auto px-0 sm:px-10 md:px-0 2xl:px-40 w-full h-auto grid grid-cols-12">
        <div className="flex items-center justify-center col-span-12 md:col-span-7 2xl:col-span-6 md:my-10">
          <div className="w-11/12 md:w-4/5 lg:w-3/4 mx-auto 2xl:ml-0 py-10 text-center md:text-left">
            <p className="text-blue-light text-xl sm:text-2xl font-semibold leading-8 sm:leading-10">
              We're dedicated to empowering health and enhancing lives. Your
              well-being is our priority.
            </p>
            <p className="text-white my-4 text-[15px] sm:text-base leading-7 sm:leading-8 lg:mr-24">
              Got questions or need assistance? Our dedicated team is ready to
              help. Reach out through our contact form, call us, or visit us in
              person.
            </p>
            <button className="bg-red text-white w-10/12 min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>
        </div>
        <div className="relative w-full h-full col-span-12 md:col-span-5 2xl:col-span-6">
          <Image
            src="/assets/images/hero5.svg"
            alt="carer"
            fill
            objectFit="fill"
            className="hidden lg:block object-cover xl:object-contain"
          />
          <img
            src="/assets/images/hero5.svg"
            alt="carer"
            className="lg:hidden block w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;

import Image from "next/image";

const ContactUs = () => {
  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section id="about-us" className="z-0 relative">
        <div className="bg-[url('/assets/images/about-hero-bg.svg')] bg-cover bg-no-repeat">
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
            <div className="text-center lg:text-left col-span-6 2xl:mr-36 my-20 lg:my-0">
              <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-[40px] md:!leading-[50px] lg:!leading-[65px] xl:!leading-[80px]">
                Get in touch with Delore Care today
              </h2>
              <p className="text-white font-light text-base md:text-lg 2xl:text-3xl 2xl:!leading-[50px] !leading-7 md:!leading-8 my-4 2xl:my-8 sm:mx-4 md:mx-20 lg:mx-0">
                Do you have a question for our friendly team of experts? Simply
                fill in the short form below and we will get back to you
                shortly. If you are looking for home care for yourself or for a
                relative, we offer the personal and professional care services
                that deliver the level of support desired. Make contact with us
                today via the form.
              </p>
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
    </main>
  );
};

export default ContactUs;

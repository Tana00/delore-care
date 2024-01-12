import Image from "next/image";
import Link from "next/link";

const AboutUsComponent = () => {
  return (
    <section className="py-16 bg-gray-light">
      <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <p className="text-red font-medium">About Us</p>
        <div className="flex items-start justify-between flex-col md:flex-row my-2">
          <div className="w-full md:w-1/3">
            <p className="text-blue font-bold text-4xl xl:text-[40px] leading-[50px] xl:leading-[64px] my-4 md:my-0">
              Welcome to <br className="" /> Delore Care
            </p>
          </div>
          <div className="w-full md:w-[55%] xl:w-1/2">
            <p className="text-base xl:text-lg leading-7 xl:leading-9">
              At Delore Care, every team member is valued and appreciated. Our
              operational strategy places an inestimable value on every
              contribution. We do not have many lines of hierarchy.
            </p>
            <Link href="/company">
              <button className="my-6 bg-white text-blue w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 font-medium rounded-full text-base flex items-center justify-between px-4 border border-blue hover:scale-105 transition-all">
                <span>Read more</span>
                <Image
                  src="/assets/icons/up-arrow.svg"
                  alt="up-arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-14 mb-4">
          <Image
            src="/assets/images/about1.svg"
            alt="about us"
            width={500}
            height={500}
          />
          <Image
            src="/assets/images/about2.svg"
            alt="about us"
            width={500}
            height={500}
          />
          <Image
            src="/assets/images/about3.svg"
            alt="about us"
            width={500}
            height={500}
          />
          <Image
            src="/assets/images/about4.svg"
            alt="about us"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;

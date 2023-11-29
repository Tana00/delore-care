import Image from "next/image";
import Link from "next/link";
import { servicesList } from "@/utils";

const ServicesComponent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <div className="flex items-start justify-between flex-col md:flex-row my-2">
          <div className="w-full md:w-1/3">
            <p className="text-blue font-bold text-4xl xl:text-[40px] leading-[50px] xl:leading-[64px] my-4 md:my-0">
              Services
            </p>
          </div>
          <div className="w-full md:w-[55%] xl:w-1/2">
            <p className="text-base xl:text-lg leading-7 xl:leading-9">
              We provide care and support to people who live in their own homes
              in England.We care for a wide range of needs. Some of these
              include:
            </p>
            <Link href="/services">
              <button className="my-6 bg-white text-blue w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 font-medium rounded-full text-base flex items-center justify-between px-4 border border-blue hover:scale-105 transition-all">
                <span>See all</span>
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
      </div>
      <div className="services bg-blue h-[600px] w-full flex flex-nowrap overflow-x-scroll overflow-y-hidden my-10 gap-6 md:gap-0">
        {servicesList?.slice(0, 4)?.map((service) => (
          <div
            key={service.id}
            className="md:ml-32 w-full md:w-[900px] flex-none"
          >
            <div className="flex items-center justify-evenly gap-8 md:gap-16 relative h-full w-full">
              <Image
                src={service.src}
                alt={service.title}
                width={900}
                height={600}
                className="hidden md:block"
              />
              <img
                src={service.src}
                alt=""
                className="relative hidden sm:block md:hidden"
              />
              <div className="hidden sm:block">
                <p className="text-white font-bold text-4xl xl:text-[40px] leading-[50px] xl:leading-[64px]">
                  {service.title}
                </p>
                <p className="text-white font-light text-base xl:text-lg leading-7 xl:leading-9">
                  {service.desc}
                </p>
                <Link
                  href={`/services?service=${service.title
                    ?.toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/ /g, "-")}#services`}
                >
                  <button className="my-6 bg-red text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 font-medium rounded-full text-base flex items-center justify-between px-4 border border-blue hover:scale-105 transition-all">
                    <span>Learn more</span>
                    <Image
                      src="/assets/icons/up-arrow-red.svg"
                      alt="up-arrow"
                      width={20}
                      height={20}
                    />
                  </button>
                </Link>
              </div>
              <div className="sm:hidden block relative">
                <img
                  src={service.src}
                  alt=""
                  className="h-[600px] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 text-white w-full">
                  <div
                    className="w-full mx-auto px-8 py-4"
                    style={{
                      background: `linear-gradient(to top, rgba(13, 37, 64, 0.9) 0%, rgba(13, 37, 64, 0.7) 50%, rgba(13, 37, 64, 0) 100%)`,
                    }}
                  >
                    <p className="text-white font-bold text-3xl md:text-4xl xl:text-[40px] leading-[50px] xl:leading-[64px] pt-4">
                      {service.title}
                    </p>
                    <p className="text-white font-normal md:font-light text-base xl:text-lg leading-6 xl:leading-9">
                      {service.desc}
                    </p>
                    <button className="my-6 bg-red text-white w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-44 h-14 font-medium rounded-full text-base flex items-center justify-between px-4 border border-blue">
                      <span>Learn more</span>
                      <Image
                        src="/assets/icons/up-arrow-red.svg"
                        alt="up-arrow"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesComponent;

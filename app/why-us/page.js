import CTAComponent from "@/components/cta";

const WhyUs = () => {
  const customerCentricList = [
    {
      id: 0,
      img: "healthcare.svg",
      title: "Comprehensive Care",
      desc: "From primary care to specialized treatments, Delorecare offers a wide spectrum of medical services, ensuring that your health needs are met all under one roof.",
    },
    {
      id: 1,
      img: "badge.svg",
      title: "Quality of Service",
      desc: "We firmly believe in providing great service that goes above and beyond expectations and fosters client confidence.",
    },
    {
      id: 2,
      img: "medical-team.svg",
      title: "Dedicated Care Team",
      desc: "Our skilled and caring staff is committed to offering our patients high-quality care.",
    },
    {
      id: 3,
      img: "home-care.svg",
      title: "24/7 Home Care",
      desc: "Our clients have access to the support they need, whenever they need it, thanks to our round-the-clock care.",
    },
    {
      id: 4,
      img: "satisfaction.svg",
      title: "Satisfaction Guaranteed",
      desc: "Every time we connect with a client, we guarantee their satisfaction and stand by the quality of our services.",
    },
    {
      id: 5,
      img: "medical.svg",
      title: "Cutting-Edge Technology",
      desc: "Delorecare is at the forefront of medical advancements. We embrace the latest technology and innovative treatments to ensure you receive the best care possible.",
    },
  ];

  const excellenceList = [
    {
      id: 0,
      img: "team-leader.svg",
      title: "Leadership You Can Trust",
      desc: "Delorecare is led by a team of healthcare professionals with a wealth of experience and a deep understanding of the industry. Our leadership is focused on making strategic decisions that enhance the quality of care we provide.",
    },
    {
      id: 1,
      img: "badge.svg",
      title: "Transparent and Ethical Practices",
      desc: "We uphold the highest standards of integrity and transparency in all aspects of our operations. You can trust that your health and well-being are our top priorities, and we'll always be straightforward with you.",
    },
    {
      id: 2,
      img: "quality.svg",
      title: "Ongoing Quality Improvement",
      desc: "We have a continuous commitment to improving the quality of our services. Delorecare regularly assesses its performance, implements best practices, and invests in staff training to ensure the highest standards of care.",
    },
  ];
  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section className="z-0 relative py-8 md:py-10 lg:py-28">
        <div className="grid items-start justify-between grid-cols-1 lg:grid-cols-12 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="text-center lg:text-left col-span-6 2xl:mr-36 my-2 lg:my-0">
            <h2 className="text-blue font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px]">
              Why Choose Us?
            </h2>
          </div>
          <div className="col-span-6 w-full h-full text-center lg:text-left">
            <p className="text-gray font-normal text-base md:text-lg 2xl:text-3xl 2xl:leading-[50px] leading-6 md:leading-8 my-4 2xl:my-8 mx-4 md:mx-20 lg:mx-0">
              At Delore Care, every team member is valued and appreciated. Our
              operational strategy places an inestimable value on every
              contribution. We do not have many lines of hierarchy.
            </p>
            <div className="flex items-center lg:justify-start justify-center sm:flex-row flex-col gap-4 my-4 md:mt-10">
              <button className="bg-blue text-white w-4/5 min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-56 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-light z-0 relative my-28">
        <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <h2 className="text-blue font-bold text-3xl lg:text-[36px] leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px] py-8 md:py-10">
            Customer-Centric Approach
          </h2>
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 gap-10 pt-10 pb-20">
            <div className="col-span-4 text-left">
              {customerCentricList?.slice(0, 3)?.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex items-start justify-center flex-col h-[300px]"
                >
                  <div className="bg-white p-3 rounded-full w-14 h-14">
                    <img
                      src={`/assets/icons/${item.img}`}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-xl leading-[64px] font-semibold text-blue">
                    {item.title}
                  </p>
                  <p className="text-gray text-sm leading-8 text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl relative col-span-4 w-full h-[600px]">
              <img
                src="/assets/images/customer-centric.png"
                alt="customer centric"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 text-right">
              {customerCentricList?.slice(3, 6)?.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex items-end justify-center flex-col h-[300px]"
                >
                  <div className="bg-white p-3 rounded-full w-14 h-14">
                    <img
                      src={`/assets/icons/${item.img}`}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-xl leading-[64px] font-semibold text-blue">
                    {item.title}
                  </p>
                  <p className="text-gray text-sm leading-8 text-right">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-light z-0 relative my-28 py-10">
        <div className="px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 gap-10 pt-10 pb-20">
            <div className="col-span-5">
              <h2 className="w-40 text-blue font-bold text-3xl lg:text-[36px] leading-[40px] md:leading-[50px] lg:leading-[60px]">
                Management Excellence
              </h2>
              <div className="rounded-2xl relative w-full h-[600px] mt-16">
                <img
                  src="/assets/images/excellence.png"
                  alt="customer centric"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {excellenceList?.map((item) => (
                <div className="text-left flex items-start justify-start flex-col h-[390px]">
                  <div className="bg-white p-3 rounded-full w-14 h-14">
                    <img
                      src={`/assets/icons/${item?.img}`}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-xl font-semibold text-blue my-4 w-[200px]">
                    {item.title}
                  </p>
                  <p className="text-gray text-sm leading-8 text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTAComponent />
    </main>
  );
};

export default WhyUs;

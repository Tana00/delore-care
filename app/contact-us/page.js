"use client";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { locationList } from "@/utils";
import { ToastContext } from "@/utils/ToastContext";
import CustomInput from "@/components/form/CustomInput";
import CTA from "@/components/home/cta";

const defaultState = {
  fullName: "",
  email: "",
  message: "",
};

const ContactUs = () => {
  const [data, setData] = useState(defaultState);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [missingFields, setMissingFields] = useState([]);

  const { setShowToast, setToastMessage } = useContext(ToastContext);

  const resetMissingFields = () => {
    setMissingFields([]);
  };

  const handleDataChange = (value, name) => {
    resetMissingFields();
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateFields = () => {
    const requiredFields = ["fullName", "email", "message"];

    const filteredFields = requiredFields.filter((field) => data[field] === "");

    setMissingFields(filteredFields);

    if (filteredFields.length > 0) {
      setToastMessage(
        "Validation Error, please fill all required missing fields"
      );
      setShowToast("error");
      return false;
    }
    return true;
  };

  const handleOnSubmit = async () => {
    try {
      setButtonText("Sending...");
      if (!validateFields()) {
        return setButtonText("Send");
      } else {
        const bodyData = {
          "Full Name": data?.fullName,
          "Email Address": data?.email,
          Message: data?.message,
        };
        const res = await fetch("/api/contact", {
          body: JSON.stringify({
            email: data?.email,
            subject: `Enquiry`,
            body: bodyData,
            data,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const result = await res.json();

        if (result.status === 202) {
          setToastMessage({
            title: "Message sent",
            message: "Your message has been sent successfully.",
          });
          setShowToast("success");
          setData(defaultState);
          return setButtonText("Send");
        } else {
          setToastMessage("Message was not sent else. Please try again");
          setShowToast("error");
          return setButtonText("Send");
        }
      }
    } catch (err) {
      setToastMessage("Message not sent catch. Please try again");
      setShowToast("error");
      return setButtonText("Send");
    }
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("active-modal");
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove("active-modal");
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      // Cleanup function to remove styles when component unmounts
      document.body.classList.remove("active-modal");
      document.documentElement.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section id="about-us" className="z-0 relative">
        <div className="bg-blue-light relative">
          <div className="grid items-center justify-between grid-cols-1 lg:grid-cols-12 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
            <div className="text-center lg:text-left col-span-6 2xl:mr-36 mt-20 lg:mt-0">
              <h2 className="text-blue font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-[40px] md:!leading-[50px] lg:!leading-[65px] xl:!leading-[80px]">
                Get in touch with Delore Care today
              </h2>
              <p className="text-black text-base md:text-lg 2xl:text-3xl 2xl:!leading-[50px] !leading-7 md:!leading-8 my-4 2xl:my-8 sm:mx-4 md:mx-20 lg:mx-0">
                Do you have a question for our friendly team of experts? Simply
                fill in the short form below and we will get back to you
                shortly. If you are looking for home care for yourself or for a
                relative, we offer the personal and professional care services
                that deliver the level of support desired. Make contact with us
                today via the form.
              </p>
            </div>
            <div className="col-span-6 w-full h-full">
              <div className="w-full relative lg:flex hidden">
                <Image
                  src="/assets/images/contact-us.png"
                  alt="carers"
                  width={300}
                  height={300}
                  className="w-full h-full z-30"
                  // layout="responsive"
                />
              </div>
              <div className="w-full relative lg:hidden flex items-center justify-center">
                <Image
                  src="/assets/images/contact-us.png"
                  alt="carers"
                  width={250}
                  height={250}
                  className=""
                  // layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute top-0 right-0 h-full">
            <svg
              width="555"
              height="596"
              viewBox="0 0 555 596"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M216.5 0H556.5V596H0L216.5 0Z" fill="#12355B" />
            </svg>
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section id="contact-form" className="">
        <div className="">
          <div className="px-5 sm:px-10 lg:px-20 xl:px-40 py-20 max-w-[1920px] mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-12 border border-blue-200 rounded-2xl">
              <div className="py-8 md:py-10 w-full col-span-7 flex flex-col items-center justify-start mx-auto">
                <p className="text-2xl md:text-3xl font-semibold text-blue leading-10 mb-4 md:mb-10 w-4/5">
                  Send us a Message
                </p>
                <div className="w-4/5 grid grid-cols-1 gap-y-4 md:gap-y-6">
                  <CustomInput
                    value={data.fullName}
                    onChange={(e) =>
                      handleDataChange(e.target.value, "fullName")
                    }
                    name="full_name"
                    label="Full Name"
                    error={missingFields?.includes("fullName")}
                  />
                  <CustomInput
                    value={data.email}
                    onChange={(e) => handleDataChange(e.target.value, "email")}
                    name="email"
                    label="Email Address"
                    error={missingFields?.includes("email")}
                  />
                  <div className="w-full flex items-start justify-start flex-col">
                    <label
                      htmlFor="fullName"
                      className="text-gray text-sm mb-2"
                    >
                      Describe Your Message
                    </label>
                    <textarea
                      type="text"
                      id="fullName"
                      cols={30}
                      value={data.message}
                      onChange={(e) =>
                        handleDataChange(e.target.value, "message")
                      }
                      className={`border ${
                        missingFields?.includes("message")
                          ? "border-red"
                          : "border-blue-200"
                      } rounded-md h-[150px] w-full p-4`}
                    />
                  </div>
                  <button
                    onClick={handleOnSubmit}
                    className="mt-8 bg-blue text-white w-full md:w-28 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all"
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
              <div className="bg-blue py-8 px-6 md:px-10 text-white rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl w-full col-span-5 h-full">
                <p className="font-semibold text-lg md:text-xl lg:text-2xl md:leading-8">
                  Contact Us Anytime,
                  <br /> 7 days a Week
                </p>
                <div className="w-full text-white flex items-start flex-col gap-y-4 text-sm mt-6 sm:mt-10">
                  <p className="font-medium text-base text-red">
                    Book An Appointment
                  </p>
                  <p className="font-semibold">Mon. Fri.</p>
                  <p>5: 30am - 10:00pm</p>
                  <p className="font-semibold">Sat. - Sun.</p>
                  <p>7:00am - 10:00pm</p>
                  <button className="mt-8 bg-red text-white w-full md:w-56 h-14 text-base font-medium rounded-lg sm:mr-4 hover:scale-105 transition-all">
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Locations section */}
      <section className="bg-gray-light">
        <div className="px-5 sm:px-10 lg:px-20 xl:px-40 py-20 max-w-[1920px] mx-auto w-full">
          <h2 className="text-blue font-bold text-[28px] lg:text-[36px] mb-4">
            Other Locations
          </h2>
          <div className="grid items-start justify-between grid-cols-1 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-6 2xl:gap-16 max-w-[1920px] mx-auto w-full">
            {locationList.map((location) => (
              <div
                key={location.id}
                className="bg-white flex flex-col items-start lg:items-center justify-between rounded-lg py-8 px-6 lg:mb-10 cursor-pointer col-span-3 h-[260px] md:h-[300px] lg:h-[320px]"
              >
                <div>
                  <p className="font-medium text-sm text-red">
                    {location.type}
                  </p>
                  <h2 className="text-blue font-semibold text-xl leading-9 my-4">
                    {location.name}
                  </h2>
                  <p className="w-full md:w-1/2 text-sm font-medium text-gray">
                    {location.address}
                  </p>
                </div>
                <Link href={`/locations?location=${location.href}`}>
                  <span className="bg-white text-blue w-full min-[400px]:w-3/4 min-[500px]:w-3/5 sm:w-56 h-12 font-medium rounded-full text-base flex items-center justify-between px-4 border border-blue hover:scale-105 transition-all">
                    <div className="mr-4 flex items-center">
                      <span>View Location</span>
                    </div>
                    <Image
                      src="/assets/icons/up-arrow.svg"
                      alt="up-arrow"
                      width={20}
                      height={20}
                    />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default ContactUs;

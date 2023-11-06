"use client";
import { useState } from "react";
import Link from "next/link";
import CustomRadioButton from "@/components/form/CustomRadioButton";
import CustomInput from "@/components/form/CustomInput";
import CustomUploadButton from "@/components/form/CustomUploadButton";

const shifts = [
  { id: 0, label: "Days", value: "days" },
  { id: 1, label: "Nights", value: "nights" },
  { id: 2, label: "Weekend Only", value: "weekends" },
];

const ownTransport = [
  { id: 0, label: "Full Time", value: "full_time" },
  { id: 1, label: "Part Time", value: "part_time" },
];

const JobApplication = () => {
  const [data, setData] = useState({
    shift: "",
    transport: "",
    fName: "",
    lName: "",
    oName: "",
    location: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    mobile: "",
    tel: "",
    hasOwnTransport: null,
    hasDriversLicence: null,
    resume: "",
    driversLicence: "",
    confirm: false,
  });

  const handleDataChange = (value, name) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = (event, name) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      return handleDataChange(selectedFile, name);
    }
  };

  const handleOnSubmit = () => {
    const payload = {
      ...data,
    };
  };
  console.log("data", data);

  return (
    <main className="bg-white font-gilmer">
      {/* Hero section */}
      <section className="bg-blue-light z-0 relative py-8 md:py-10 lg:py-28">
        <div className="relative flex flex-col md:flex-row items-start justify-start px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
            <svg
              width="32"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4695 23V13.8244L31.9312 13.8244L32 9.21362L11.4695 9.21362L11.4695 0.0609322L0 11.5305L11.4695 23Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="text-left md:text-center my-2 lg:my-0 md:ml-[20%] lg:ml-[30%]">
            <h2 className="text-blue font-bold text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px]">
              Registered Nurse
            </h2>
            <p className="text-gray font-normal text-base md:text-lg 2xl:text-2xl 2xl:leading-[50px] leading-8 my-2 md:my-4 2xl:my-8">
              Fill the form below to start application process
            </p>
          </div>
        </div>
      </section>
      <section className="p-5 sm:p-10 lg:p-20 xl:px-40 max-w-[1920px] mx-auto w-full">
        <div className="py-8 w-full xl:w-10/12">
          <p className="text-blue font-bold leading-10 text-xl md:text-2xl">
            Job Type
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:mt-4 font-medium">
            <div className="text-blue-black col-span-5 text-base sm:text-lg">
              <p className="leading-10">Own Transport?</p>
              <div className="flex items-center gap-10 text-[15px] md:my-4">
                {ownTransport.map((transport) => (
                  <CustomRadioButton
                    key={transport.id}
                    label={transport.label}
                    checked={data.transport === transport.value}
                    onChange={() =>
                      handleDataChange(transport.value, "transport")
                    }
                    value={transport.value}
                  />
                ))}
              </div>
            </div>
            <div className="text-blue-black w-full col-span-7 text-base sm:text-lg">
              <p className="leading-10">Preferred Shifts</p>
              <div className="flex items-center gap-10 text-[15px] md:my-4">
                {shifts.map((shift) => (
                  <CustomRadioButton
                    key={shift.id}
                    label={shift.label}
                    checked={data.shift === shift.value}
                    onChange={() => handleDataChange(shift.value, "shift")}
                    value={shift.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10 md:py-10 w-full xl:w-10/12">
          <p className="text-blue font-bold leading-10 text-xl md:text-2xl">
            Personal Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-4">
            <CustomInput
              value={data.fName}
              onChange={(e) => handleDataChange(e.target.value, "fName")}
              name="first_name"
              label="First Name"
            />
            <CustomInput
              value={data.lName}
              onChange={(e) => handleDataChange(e.target.value, "lName")}
              name="last_name"
              label="Last Name"
            />
            <CustomInput
              value={data.oName}
              onChange={(e) => handleDataChange(e.target.value, "oName")}
              name="other_name"
              label="Other Names"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 font-medium">
            <div className="text-blue-black text-base sm:text-lg">
              <p className="leading-10">Applicant Location?</p>
              <div className="flex items-center gap-10 text-[15px] my-4">
                {[
                  { id: 0, label: "UK", value: "uk" },
                  { id: 1, label: "Overseas", value: "overseas" },
                ].map((location) => (
                  <CustomRadioButton
                    key={location.id}
                    label={location.label}
                    checked={data.location === location.value}
                    onChange={() =>
                      handleDataChange(location.value, "location")
                    }
                    value={location.value}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            <div className="col-span-2">
              <CustomInput
                value={data.address}
                onChange={(e) => handleDataChange(e.target.value, "address")}
                name="address"
                label="Street Address"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.city}
                onChange={(e) => handleDataChange(e.target.value, "city")}
                name="city"
                label="City"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.zip}
                onChange={(e) => handleDataChange(e.target.value, "zip")}
                name="zip"
                label="Zip/Postal Code"
              />
            </div>
          </div>
        </div>
        <div className="pb-10 md:py-10 w-full xl:w-10/12">
          <p className="text-blue font-bold leading-10 text-xl md:text-2xl">
            Contact Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 md:mt-10">
            <div className="col-span-2">
              <CustomInput
                value={data.email}
                onChange={(e) => handleDataChange(e.target.value, "email")}
                name="email"
                label="Your Email Address"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.mobile}
                onChange={(e) => handleDataChange(e.target.value, "mobile")}
                name="mobile"
                label="Your Mobile Number"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.tel}
                onChange={(e) => handleDataChange(e.target.value, "tel")}
                name="tel"
                label="Your Home Telephone Number"
              />
            </div>
          </div>
        </div>
        <div className="pb-8 md:py-8 w-full xl:w-10/12">
          <p className="text-blue font-bold leading-10 text-xl md:text-2xl">
            Transport
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 md:mt-4 font-medium">
            <div className="text-blue-black col-span-5 text-base sm:text-lg">
              <p className="leading-10">Own Transport?</p>
              <div className="flex items-center gap-10 text-[15px] md:my-4">
                {[
                  { id: 0, label: "Yes", value: "yes" },
                  { id: 1, label: "No", value: "no" },
                ].map((transport) => (
                  <CustomRadioButton
                    key={transport.id}
                    label={transport.label}
                    checked={data.hasOwnTransport === transport.value}
                    onChange={() =>
                      handleDataChange(transport.value, "hasOwnTransport")
                    }
                    value={transport.value}
                  />
                ))}
              </div>
            </div>
            <div className="text-blue-black w-full col-span-7 text-base sm:text-lg">
              <p className="leading-10">Driver's Licence?</p>
              <div className="flex items-center gap-10 text-[15px] md:my-4">
                {[
                  { id: 0, label: "Yes", value: "yes" },
                  { id: 1, label: "No", value: "no" },
                ].map((licence) => (
                  <CustomRadioButton
                    key={licence.id}
                    label={licence.label}
                    checked={data.hasDriversLicence === licence.value}
                    onChange={() =>
                      handleDataChange(licence.value, "hasDriversLicence")
                    }
                    value={licence.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-8 pb-6 w-full">
          <p className="text-blue font-bold leading-10 text-xl md:text-2xl">
            Document
          </p>
          <div className="mb-6 md:my-6 flex flex-col items-start gap-4">
            <CustomUploadButton
              name="Resume"
              file={data.resume}
              handleFileChange={(e) => handleFileChange(e, "resume")}
            />
            <CustomUploadButton
              name="Driver’s Licence"
              file={data.driversLicence}
              handleFileChange={(e) => handleFileChange(e, "driversLicence")}
            />
          </div>
        </div>
        <label className="inline-flex flex-row items-center cursor-pointer select-none mb-10 md:mb-16 flex-wrap">
          <input
            type="checkbox"
            checked={data.confirm}
            onChange={() => handleDataChange(!data.confirm, "confirm")}
          />
          <span className="checkmark"></span>I agree to the
          <a href="/" className="text-red mx-1.5 hover:underline">
            terms
          </a>
          and
          <a href="/" className="text-red mx-1.5 hover:underline">
            conditions
          </a>
          of the company
        </label>
        <Link href="/career/job/success">
          <div className="">
            <button
              onClick={handleOnSubmit}
              className="bg-blue text-white border border-blue rounded-lg w-56 py-3 text-base hover:bg-white hover:text-blue transition-all"
            >
              Submit Application
            </button>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default JobApplication;
// sm:w-4/5 md:w-3/4 lg:w-1/3 xl:w-1/3

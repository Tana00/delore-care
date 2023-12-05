"use client";
import { useState, useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import validator from "validator";
import CustomRadioButton from "@/components/form/CustomRadioButton";
import CustomInput from "@/components/form/CustomInput";
import CustomUploadButton from "@/components/form/CustomUploadButton";
import { toBase64 } from "@/utils";
import { ToastContext } from "@/utils/ToastContext";

const shifts = [
  { id: 0, label: "Days", value: "days" },
  { id: 1, label: "Nights", value: "nights" },
  { id: 2, label: "Weekend Only", value: "weekends" },
];

const ownTransport = [
  { id: 0, label: "Full Time", value: "full" },
  { id: 1, label: "Part Time", value: "part" },
];

const defaultState = {
  shift: shifts[0].value,
  transport: ownTransport[0].value,
  fName: "",
  lName: "",
  oName: "",
  location: "uk",
  address: "",
  city: "",
  zip: "",
  email: "",
  mobile: "",
  tel: "",
  hasOwnTransport: "yes",
  hasDriversLicence: "yes",
  resume: "",
  driversLicence: "",
  confirm: false,
  resumeFileName: "",
  licenceFileName: "",
};

const JobApplication = () => {
  const pathname = usePathname();
  const router = useRouter();
  const jobType = pathname?.split("/")[2]?.replace("%20", " ");

  const regex = /^[A-Za-z]*$/; // Allow an empty string or alphabets

  const { showToast, setShowToast, setToastMessage } = useContext(ToastContext);

  const [data, setData] = useState(defaultState);
  const [attachment, setAttachment] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Submit Application");
  const [missingFields, setMissingFields] = useState([]);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMobile, setIsValidMobile] = useState(false);
  const [isValidTel, setIsValidTel] = useState(false);
  const [isValidPostalCode, setIsValidPostalCode] = useState(false);

  const resetMissingFields = () => {
    setMissingFields([]);
    setIsValidEmail(false);
    setIsValidMobile(false);
    setIsValidTel(false);
    setIsValidPostalCode(false);
  };

  const handleDataChange = (value, name) => {
    resetMissingFields();
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = async (event, name) => {
    resetMissingFields();
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const res = await toBase64(selectedFile);

      setAttachment([...attachment, res]);
      event.target.value = "";
      return setData({
        ...data,
        [name]: selectedFile,
        ...(name === "resume" && { resumeFileName: selectedFile.name }),
        ...(name === "driversLicence" && {
          licenceFileName: selectedFile.name,
        }),
      });
    }
  };

  const validateFields = () => {
    const requiredFields = [
      "fName",
      "lName",
      "email",
      "mobile",
      "address",
      "city",
      "resume",
      "confirm",
      ...(data.hasDriversLicence === "yes" ? ["driversLicence"] : []),
    ];

    const filteredFields = requiredFields.filter(
      (field) => data[field] === "" || data[field] === false
    );
    setMissingFields(filteredFields);

    if (filteredFields.length > 0) {
      setToastMessage(
        "Validation Error, please fill all required missing fields"
      );
      setShowToast("error");
      return false;
    }

    const validateEmail = () => {
      const isValidEmail = validator.isEmail(data?.email);
      return isValidEmail;
    };

    const validatePhoneNumber = (number) => {
      const isValidPhoneNumber = validator.isMobilePhone(number);
      return isValidPhoneNumber;
    };

    const validatePostalCode = () => {
      const isValidPostalCode = validator.isPostalCode(data?.zip, "any");
      return isValidPostalCode;
    };

    if (!validateEmail()) {
      setToastMessage("Validation Error, email is invalid");
      setShowToast("error");
      setIsValidEmail(true);
      return false;
    }

    if (!validatePhoneNumber(data?.mobile)) {
      setToastMessage("Validation Error, mobile number is invalid");
      setShowToast("error");
      setIsValidMobile(true);
      return false;
    }

    if (data?.tel) {
      if (!validatePhoneNumber(data?.tel)) {
        setToastMessage("Validation Error, home telephone number is invalid");
        setShowToast("error");
        setIsValidTel(true);
        return false;
      }
    }

    if (data?.zip) {
      if (!validatePostalCode()) {
        setToastMessage("Validation Error, postal code is invalid");
        setShowToast("error");
        setIsValidPostalCode(true);
        return false;
      }
    }

    return true;
  };

  const handleOnSubmit = async () => {
    try {
      setButtonText("Submitting...");
      if (!validateFields()) {
        return setButtonText("Submit Application");
      } else {
        const bodyData = {
          "First Name": data.fName,
          "Other Name": data.oName,
          "Last Name": data.lName,
          Location: data.location?.toUpperCase(),
          "Street Address": data.address,
          City: data.city,
          "Postal Code": data.zip,
          "Email Address": data.email,
          Mobile: data.mobile,
          "Home Telephone Number": data.tel,
          "Has Own Transport": data.hasOwnTransport,
          "Has Driver's Licence": data.hasDriversLicence,
          "Preferred Shifts": data.shift,
          "Own Transport":
            data.transport === "full" ? "Full Time" : "Part Time",
        };
        const res = await fetch("/api/job-application", {
          body: JSON.stringify({
            email: data?.email,
            subject: `Job Application: ${jobType?.toUpperCase()}`,
            body: bodyData,
            files: attachment,
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
            title: "Application Submitted",
            message: "Your application has been submitted successfully.",
          });
          setShowToast("success");
          setAttachment([]);
          setData(defaultState);
          return setButtonText("Submit Application");
        } else {
          setToastMessage("Application was not sent. Please try again");
          setShowToast("error");
          return setButtonText("Submit Application");
        }
      }
    } catch (err) {
      setToastMessage("Application not sent. Please try again");
      setShowToast("error");
      return setButtonText("Submit Application");
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
    <main className="bg-white font-gilmer backdrop-blur-xl bg-white/30">
      {/* Hero section */}
      <section className="bg-blue-light z-0 relative py-8 md:py-10 lg:py-28">
        <div className="relative flex flex-col md:flex-row items-start justify-start px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full">
          <div
            onClick={() => router.back()}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition"
          >
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
            <h2 className="capitalize text-blue font-bold text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px]">
              {jobType}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 my-4">
            <CustomInput
              value={data.fName}
              onChange={(e) => {
                if (regex.test(e.target.value)) {
                  handleDataChange(e.target.value, "fName");
                } else if (e.target.value === "") {
                  handleDataChange("", "fName");
                }
              }}
              name="first_name"
              label="First Name"
              error={missingFields?.includes("fName")}
            />
            <CustomInput
              value={data.lName}
              onChange={(e) => {
                if (regex.test(e.target.value)) {
                  handleDataChange(e.target.value, "lName");
                } else if (e.target.value === "") {
                  handleDataChange("", "lName");
                }
              }}
              name="last_name"
              label="Last Name"
              error={missingFields?.includes("lName")}
            />
            <CustomInput
              value={data.oName}
              onChange={(e) => {
                if (regex.test(e.target.value)) {
                  handleDataChange(e.target.value, "oName");
                } else if (e.target.value === "") {
                  handleDataChange("", "oName");
                }
              }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10">
            <div className="col-span-2">
              <CustomInput
                value={data.address}
                onChange={(e) => handleDataChange(e.target.value, "address")}
                name="address"
                label="Street Address"
                error={missingFields?.includes("address")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.city}
                onChange={(e) => handleDataChange(e.target.value, "city")}
                name="city"
                label="City"
                error={missingFields?.includes("city")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.zip}
                onChange={(e) => handleDataChange(e.target.value, "zip")}
                name="zip"
                label="Postal Code"
                error={isValidPostalCode}
              />
            </div>
          </div>
        </div>
        <div className="pb-10 md:py-10 w-full xl:w-10/12">
          <p className="text-blue font-bold leading-10 text-xl md:text-2xl">
            Contact Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 mt-4 md:mt-10">
            <div className="col-span-2">
              <CustomInput
                value={data.email}
                onChange={(e) => handleDataChange(e.target.value, "email")}
                name="email"
                label="Your Email Address"
                error={missingFields?.includes("email") || isValidEmail}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.mobile}
                onChange={(e) => handleDataChange(e.target.value, "mobile")}
                name="mobile"
                label="Your Mobile Number"
                error={missingFields?.includes("mobile") || isValidMobile}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <CustomInput
                value={data.tel}
                onChange={(e) => handleDataChange(e.target.value, "tel")}
                name="tel"
                label="Your Home Telephone Number"
                error={isValidTel}
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
                    onChange={() => {
                      handleDataChange(licence.value, "hasDriversLicence");
                      if (licence.value === "no") {
                        const newArray = missingFields.filter(
                          (item) => item !== "hasDriversLicence"
                        );
                        setMissingFields(newArray);
                      }
                    }}
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
              error={missingFields?.includes("resume")}
            />
            {data.hasDriversLicence === "yes" && (
              <CustomUploadButton
                name="Driver’s Licence"
                file={data.driversLicence}
                handleFileChange={(e) => handleFileChange(e, "driversLicence")}
                error={
                  missingFields?.includes("driversLicence") &&
                  data.hasDriversLicence === "yes"
                }
              />
            )}
          </div>
        </div>
        <label className="inline-flex flex-row items-center cursor-pointer select-none mb-10 md:mb-16 flex-wrap">
          <input
            type="checkbox"
            checked={data.confirm}
            onChange={() => handleDataChange(!data.confirm, "confirm")}
          />
          <span className="checkmark"></span>I agree to the
          <a
            href="/terms-and-conditions"
            className="text-red mx-1.5 hover:underline"
          >
            terms & conditions
          </a>
          of the company
          <span
            className={`text-red text-lg ${
              missingFields?.includes("confirm") ? "visible" : "invisible"
            }`}
          >
            *
          </span>
        </label>
        <div className="">
          <button
            onClick={handleOnSubmit}
            className="bg-blue text-white border border-blue rounded-lg w-56 py-3 text-base hover:bg-white hover:text-blue transition-all"
            disabled={buttonText === "Submitting..."}
          >
            {buttonText}
          </button>
        </div>
      </section>

      {/* Display the Notification component */}
    </main>
  );
};

export default JobApplication;

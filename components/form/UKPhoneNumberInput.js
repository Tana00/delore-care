import React, { useState } from "react";

const UkPhoneInput = ({ label, name, value, handleDataChange, error }) => {
  const [phoneNumber, setPhoneNumber] = useState(value);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);

    // Use the regex to check if the phone number is valid
    const ukPhoneRegex =
      /^(\+44\s?|0)(\d{10}|\d{4}\s\d{6}|\d{3}\s\d{5}|\d{5}\s\d{4})$/;
    setIsValidPhoneNumber(ukPhoneRegex.test(inputValue));

    // Call the handleDataChange function from the parent component
    handleDataChange(inputValue);
  };

  return (
    <div className="font-gilmer flex flex-col items-start justify-start">
      <label htmlFor={name} className="text-gray text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="(+44 or 0) XXXX XXX XXX or XXXX XXXXXX or XXXXX XXXXX"
        className={`bg-white border ${
          error ? "border-red" : "border-blue-200"
        } p-4 rounded-lg w-full h-[56px]`}
      />
      {!isValidPhoneNumber && (
        <p style={{ color: "red" }}>Please enter a valid UK phone number.</p>
      )}
    </div>
  );
};

export default UkPhoneInput;

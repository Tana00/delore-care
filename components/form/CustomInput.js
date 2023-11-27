const CustomInput = ({ value, onChange, name, label, error }) => {
  return (
    <div className="font-gilmer flex flex-col items-start justify-start">
      <label htmlFor={name} className="text-gray text-sm font-medium mb-2">
        {label}{" "}
        {/* <span className={`text-red text-lg ${error ? "visible" : "invisible"}`}>
          *
        </span> */}
      </label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className={`bg-white border ${
          error ? "border-red" : "border-blue-200"
        } p-4 rounded-lg w-full h-[56px]`}
      />
    </div>
  );
};

export default CustomInput;

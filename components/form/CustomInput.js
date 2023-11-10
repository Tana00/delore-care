const CustomInput = ({ value, onChange, name, label }) => {
  return (
    <div className="font-gilmer flex flex-col items-start justify-start">
      <label htmlFor={name} className="text-gray text-sm font-medium mb-2">
        {label}
      </label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className="bg-white border border-blue-200 p-4 rounded-lg w-full h-[56px]"
      />
    </div>
  );
};

export default CustomInput;
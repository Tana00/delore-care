const CustomRadioButton = ({ label, checked, onChange }) => {
  return (
    <label className="custom-radio-button">
      <input type="radio" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CustomRadioButton;

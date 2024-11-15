import React from "react";

const Input = ({ itemName, value, name, handleChange, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {itemName}
    </label>
  );
};

export default Input;

import React from "react";

const Input = ({itemName}) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>{itemName}
    </label>
  );
};

export default Input;

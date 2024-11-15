import React from "react";

const Buttons = ({handleClick, value, itemName}) => {
  return <button onClick={handleClick} value={value} className="btns">{itemName}</button>;
};

export default Buttons;

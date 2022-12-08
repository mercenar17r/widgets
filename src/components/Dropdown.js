import React from "react";
const options = [
  {
    label: "The Color Red",
    value: "red",
  },

  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const Dropdown = () => {
  return <div options={options}>Dropdown</div>;
};

export default Dropdown;

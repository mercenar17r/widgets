import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={language}
        options={options}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;

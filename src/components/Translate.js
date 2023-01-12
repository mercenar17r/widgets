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
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Dropdown
        selected={language}
        options={options}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />
    </div>
  );
};

export default Translate;

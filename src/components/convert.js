import React, { useState, useEffect } from "react";

const convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New Language");
  }, [language, text]);
  return <div></div>;
};

export default convert;

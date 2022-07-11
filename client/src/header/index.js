import React, { useState } from "react";
import "./style.css";
import Themetoggle from "../components/themetoggle";
import CustomNavbar from "../components/navbar/CustomNavbar";
import Socialicons from "../components/socialicons";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <CustomNavbar />
        <Socialicons/>
      </header>
    </>
  );
};

export default Headermain;

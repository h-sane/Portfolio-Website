import React from "react";
import Silama from "../Assets/silama-logo.svg";

const SilamaLogo = ({ width = 50, height = 50 }) => {
  return <img src={Silama} alt="Silama Logo" width={width} height={height} />;
};

export default SilamaLogo;

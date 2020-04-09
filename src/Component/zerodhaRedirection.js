import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const ZerodhaRedirection = (props) => {
  useEffect(() => {
    window.location.replace("https://signup.zerodha.com/");
  }, []);
  return null;
};

export default ZerodhaRedirection;

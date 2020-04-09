import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const ZerodhaRedirection = (props) => {
  useEffect(() => {
    window.location.replace("https://zerodha.com/open-account?c=TY9422");
  }, []);
  return null;
};

export default ZerodhaRedirection;

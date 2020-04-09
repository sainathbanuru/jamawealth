import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const UpstoxRedirection = (props) => {
  useEffect(() => {
    window.location.replace("https://upstox.com/open-account/?f=7QKT");
  }, []);
  return null;
};

export default UpstoxRedirection;

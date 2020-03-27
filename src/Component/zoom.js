import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const ZoomRedirect = props => {
  useEffect(() => {
    window.location.replace("https://us04web.zoom.us/j/4572284241");
  }, []);
  return null;
};

export default ZoomRedirect;

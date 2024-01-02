import React from "react";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
      <footer className="text-center text-capitalize fw-bold p-2 my-5">
        copyright &copy; {new Date().getFullYear()} all rights reserved
      </footer>
    </>
  );
};

export default Footer;

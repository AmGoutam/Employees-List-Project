import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
      <h1 className="text-center fs-2 my-3">Employees List Project</h1>
    </>
  );
};

export default Header;

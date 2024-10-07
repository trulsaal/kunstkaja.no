import React, { useState } from "react";

const Navbar = ({ children, className }) => {
  return (
    <div className="navbar-container">
      <div>{children}</div>
    </div>
  );
};

Navbar.ButtonsContainer = ({ children }) => {
  return <div className="navbar-buttons-container">{children}</div>;
};
export default Navbar;

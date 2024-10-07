import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <div className="container">{children}</div>
    </div>
  );
};

Container.Header = ({ children }) => {
  return <div className="container-header">{children}</div>;
};

Container.Body = ({ children }) => {
  return <div className="container-body">{children}</div>;
};

Container.Footer = ({ children }) => {
  return <div className="container-footer">{children}</div>;
};
export default Container;

import React from "react";
import Icons from "../Icons/Icons";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Icons />
      {children}
    </div>
  );
};

export default Layout;

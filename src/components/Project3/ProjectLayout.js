import React from "react";
import NavBar from "../Navbar";

const ProjectLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default ProjectLayout;

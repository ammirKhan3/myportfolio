import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      className="blue"
      options={{
        strings: [
          "Software Developer",
          "Pyhton Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

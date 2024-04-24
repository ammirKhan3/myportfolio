import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      className="blue"
      options={{
        strings: ["Civil Engineer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

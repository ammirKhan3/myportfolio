import React from "react";
import ProjectLayout from "./ProjectLayout";
// Importing all images dynamically
import img4 from "./Chaklala Heights Rawalpindi Feb-2022 Final-01.png";
import img5 from "./Chaklala Heights Rawalpindi Feb-2022 Final-02.png";
import img6 from "./Chaklala Heights Rawalpindi Feb-2022 Final-03.png";
import img7 from "./Chaklala Heights Rawalpindi Feb-2022 Final-04.png";
import img8 from "./Chaklala Heights Rawalpindi Feb-2022 Final-05.png";
import img9 from "./Chaklala Heights Rawalpindi Feb-2022 Final-06.png";
import img10 from "./Chaklala Heights Rawalpindi Feb-2022 Final-07.png";
import img11 from "./Chaklala Heights Rawalpindi Feb-2022 Final-08.png";
import img12 from "./Chaklala Heights Rawalpindi Feb-2022 Final-09.png";
import img13 from "./Chaklala Heights Rawalpindi Feb-2022 Final-10.png";
import img14 from "./Chaklala Heights Rawalpindi Feb-2022 Final-11.png";
import img15 from "./Chaklala Heights Rawalpindi Feb-2022 Final-12.png";
import img16 from "./Chaklala Heights Rawalpindi Feb-2022 Final-13.png";
import img17 from "./Chaklala Heights Rawalpindi Feb-2022 Final-14.png";
import img18 from "./Chaklala Heights Rawalpindi Feb-2022 Final-15.png";
import img19 from "./Chaklala Heights Rawalpindi Feb-2022 Final-16.png";

const images = [
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const imageContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0", // Remove the gap between images
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  overflow: "auto", // Enable scrolling if needed
  backgroundColor: "transparent", // Set background to transparent
};

const imageStyle = {
  width: "100vw", // Set width to viewport width
  height: "100vh", // Set height to viewport height
};

function Projects() {
  return (
    <ProjectLayout>
      <div style={imageContainerStyle}>
        {/* Mapping through images array and rendering each image */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={imageStyle}
          />
        ))}
      </div>
    </ProjectLayout>
  );
}

export default Projects;

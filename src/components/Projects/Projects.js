import React from "react";
import ImageCarousel from "./Carousel";
import img6 from "./report-06.png";
import img7 from "./report-07.png";
import img8 from "./report-08.png";
import img9 from "./report-09.png";
import img10 from "./report-10.png";
import img11 from "./report-11.png";
import img12 from "./report-12.png";
import img13 from "./report-13.png";
import img14 from "./report-14.png";
import img15 from "./report-15.png";
import img16 from "./report-16.png";
import img17 from "./report-17.png";
import img18 from "./report-18.png";
import img19 from "./report-19.png";
import img20 from "./report-20.png";
import img21 from "./report-21.png";
import img22 from "./report-22.png";
import img23 from "./report-23.png";
import img24 from "./report-24.png";
import img25 from "./report-25.png";
import img26 from "./report-26.png";
import img27 from "./report-27.png";
import img28 from "./report-28.png";
import img29 from "./report-29.png";
import img30 from "./report-30.png";
import img31 from "./report-31.png";
import img32 from "./report-32.png";
import img33 from "./report-33.png";
import img34 from "./report-34.png";
import img35 from "./report-35.png";
import img36 from "./report-36.png";
import img37 from "./report-37.png";
import img38 from "./report-38.png";
import img39 from "./report-39.png";
import img40 from "./report-40.png";
import img41 from "./report-41.png";
import img42 from "./report-42.png";
import img43 from "./report-43.png";
import img44 from "./report-44.png";
import img45 from "./report-45.png";
import img46 from "./report-46.png";
import img47 from "./report-47.png";
import img48 from "./report-48.png";
import img49 from "./report-49.png";
import img50 from "./report-50.png";
import img51 from "./report-51.png";
import img52 from "./report-52.png";
import img53 from "./report-53.png";
import img54 from "./report-54.png";
import img55 from "./report-55.png";
import img56 from "./report-56.png";

const images = [
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
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
];

const imageContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
};

const imageStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  margin: "20px",
  width: "80%", // Adjust width as needed
  maxWidth: "800px", // Set maximum width
};

function Projects() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {/* Mapping through images array and rendering each image */}
      {images.map((image, index) => (
        <div key={index} style={imageContainerStyle}>
          <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
        </div>
      ))}
      <ImageCarousel />
    </div>
  );
}

export default Projects;

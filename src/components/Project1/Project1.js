import React from "react";
import pdfFile from "./your_pdf_file.pdf";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import img5 from "./5.jpeg";
import img6 from "./6.jpeg";
import img7 from "./7.jpeg";
import img8 from "./8.jpeg";

function Project1() {
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <object
          data={pdfFile}
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <embed src={pdfFile} type="application/pdf" />
        </object>
      </div>

      <Carousel>
        <div>
          <img
            src={img1}
            alt="Image 1"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Image 2"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Image 3"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Image 4"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img5}
            alt="Image 5"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img6}
            alt="Image 6"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img7}
            alt="Image 7"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
        <div>
          <img
            src={img8}
            alt="Image 8"
            style={{ maxWidth: "360px", maxHeight: "360px" }}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Project1;

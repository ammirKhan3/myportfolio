import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import grid1 from "./Grid1.jpg";
import grid2 from "./Grid2.jpg";
import grid3 from "./Grid3.jpg";

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={grid1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={grid2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={grid3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;

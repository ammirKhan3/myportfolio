import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./1.jpeg";
import image2 from "./2.jpeg";
import image3 from "./3.jpeg";
import image4 from "./4.jpeg";
import image5 from "./5.jpeg";
import image6 from "./6.jpeg";
import image7 from "./7.jpeg";
import image8 from "./8.jpeg";

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image6} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image7} alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image8} alt="Eighth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;

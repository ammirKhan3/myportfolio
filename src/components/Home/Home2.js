import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/1.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import ImageCarousel from "./Carousel";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Logo1 from "./Autocad.png";
import Logo2 from "./Enscape-01.png";
import Logo3 from "./adobe.png";

function Home2() {
  return (
    <Container fluid className="home-section" id="home">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've developed a passion for civil engineering, and along the way,
              I've certainly picked up some knowledge, or so I hope... 🤷‍♂️
              <br />
              <br />
              <i>
                <b className="blue">
                  {" "}
                  Fluent in civil engineering skills like{" "}
                </b>
                <b className="purple">AutoCAD, MATLAB, and STAAD.Pro.</b>
              </i>
              <br />
              <br />
              <i>
                Field of interest includes{" "}
                <b className="blue">
                  innovative civil engineering technologies and projects
                </b>{" "}
                as well as{" "}
                <b className="blue">sustainable infrastructure solutions.</b>
              </i>
              <br />
              <br />
              When possible, also proficient in utilizing, software tools such
              as <b className="purple">SAP2000 and ETABS</b> for structural
              analysis and design, and skilled in{" "}
              <b className="blue">implementing modern engineering principles</b>{" "}
              in projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <ImageCarousel />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div className="home-about-social-links">
              <img src={Logo1} alt="Logo 1" className="logo" />
              <img src={Logo2} alt="Logo 2" className="logo" />
              <img src={Logo3} alt="Logo 3" className="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

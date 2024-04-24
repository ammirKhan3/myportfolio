import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/1.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
                  Fluent in traditional civil engineering languages like{" "}
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
              When possible, also proficient in utilizing{" "}
              <b className="blue">
                software tools such as SAP2000 and ETABS
              </b>{" "}
              for structural analysis and design, and skilled in{" "}
              <b className="blue">implementing modern engineering principles</b>{" "}
              in projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

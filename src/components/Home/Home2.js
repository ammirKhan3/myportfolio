import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col xs={12} md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Aamir Khan, a dedicated Civil Engineer with a solid
              educational background and one year of practical experience in
              site engineering. My journey in civil engineering has equipped me
              with skills ranging from project management and structural design
              to construction oversight and multidisciplinary collaboration.
              <br />
              <br />
              I'm eager to contribute my skills and expertise to future projects
              in civil engineering.
              <i>
                <b className="blue">
                  {" "}
                  You can reach me at +923096083535 or aamirsuranai@gmail.com,
                  and connect on LinkedIn at{" "}
                  <a
                    href="https://www.linkedin.com/in/aamir-khan7068811a3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/aamir-khan7068811a3
                  </a>
                </b>
              </i>
              <br />
              <br />
              My field of Interest's is creating sustainable infrastructure
              solutions as a passionate Civil Engineer, leveraging my expertise
              in project management, structural design, and construction
              oversight to deliver high-quality projects with precision and
              efficiency &nbsp;
              <br />
            </p>
          </Col>
          <Col xs={12} md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iamhamzamalik"
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
                  href="https://www.linkedin.com/in/amir-hamza-38806817a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iam_hamzamalik/"
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

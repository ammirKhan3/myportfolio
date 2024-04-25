import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "./Uni.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Amir Hamza</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <div className="vertical-image">
            <img
              src={img}
              alt="Social Media Icons"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

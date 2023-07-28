import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to my world! I am <span className="blue">Amir Hamza </span>
            from <span className="blue"> Mianwali, Paskistan.</span>
            <br />I am a software developer with a passion for innovation and
            problem-solving. Armed with a Bachelor's degree in Computer Science
            from the prestigious University of Sargodha, I am dedicated to
            creating cutting-edge solutions that drive technological
            advancement. Let's embark on a journey of transforming ideas into
            reality!
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(135, 206, 250)" }}>
            "only limitation that exists is the boundless horizon of your
            imagination!"{" "}
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

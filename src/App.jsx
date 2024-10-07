import React from "react";
import Container from "./components/Container";
import "./components/Container.css";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="bg">
      <div className="big-container">
        <Container>
          <Container.Header>
            <h1 style={{ fontSize: "75px", color: "white" }}>kunstKaja</h1>
          </Container.Header>
          <Container.Body>
            <Link to="/sale" style={{ color: "white" }}>
              til salgs
            </Link>

            <Link to="/about" style={{ color: "white" }}>
              om
            </Link>
            <Link to="/portofolio" style={{ color: "white" }}>
              portefølje
            </Link>
          </Container.Body>
          <Container.Footer>
            <a href="mailto:kaja_andreaK@gmail.com">
              <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            </a>
            <a href="https://www.instagram.com/kunstkaja/" target="_blank">
              <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
            </a>
          </Container.Footer>
        </Container>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Container from "./components/Container";
import "./components/Container.css";
import "./components/Gallery.css";
import "./components/Sale.css";
import "./components/MobileNav.css";
import MobileNav from "./components/MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sale = () => {
  return (
    <div className="main">
      <MobileNav>
        <Navbar.ButtonsContainer>
          <Link style={{ textAlign: "left" }} to="/">
            Hjem
          </Link>
          <Link style={{ textAlign: "left", fontWeight: "bold" }} to="/sale">
            til salgs
          </Link>
          <Link style={{ textAlign: "left" }} to="/">
            portefølje
          </Link>
          <Link style={{ textAlign: "left" }} to="/about">
            om
          </Link>
        </Navbar.ButtonsContainer>
      </MobileNav>
      <Navbar>
        <a href="/">
          <h1
            style={{ fontSize: "2rem", textAlign: "left", lineHeight: "0.7em" }}
          >
            Kunst
            <br />
            Kaja
          </h1>
        </a>
        <Navbar.ButtonsContainer>
          <Link style={{ textAlign: "left" }} to="/">
            Hjem
          </Link>
          <Link style={{ textAlign: "left", fontWeight: "bold" }} to="/sale">
            til salgs
          </Link>
          <Link style={{ textAlign: "left" }} to="/portofolio">
            portefølje
          </Link>
          <Link style={{ textAlign: "left" }} to="/about">
            om
          </Link>
        </Navbar.ButtonsContainer>
      </Navbar>
      <Gallery>
        <Gallery.Card
          imgSrc="src\assets\IMG_5311.JPG"
          title="Ancient"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src\assets\IMG_5322.JPG"
          title="Old"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src\assets\IMG_5161.JPG"
          title="Home"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src\assets\IMG_5154.JPG"
          title="The final cut"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src/assets/test2.jpg"
          title="Red eyes"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src\assets\IMG_5149.JPG"
          title="Yosua"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src/assets/test2.jpg"
          title="Distance/moving"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src/assets/test2.jpg"
          title="Hellhole"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src/assets/test2.jpg"
          title="Meetings"
          price="8000 ,-"
          info="30 x 45 (cm)"
        />
        <Gallery.Card
          imgSrc="src/assets/test2.jpg"
          title="Olje på lerret"
          price="8000 ,-"
          info="30 x 45 (cm)"
        ></Gallery.Card>
      </Gallery>
    </div>
  );
};

export default Sale;

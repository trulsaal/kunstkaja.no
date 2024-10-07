import React from "react";
import "./components/Portofolio.css";
import "./components/Container.css";
import "./index.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Container from "./components/Container";
import "./components/Container.css";
import "./components/Gallery.css";
import "./components/Sale.css";
import "./components/MobileNav.css";
import MobileNav from "./components/MobileNav";

const Portofolio = () => {
  return (
    <div>
      <div className="main">
        <MobileNav>
          <Navbar.ButtonsContainer>
            <Link style={{ textAlign: "left" }} to="/">
              Hjem
            </Link>
            <Link style={{ textAlign: "left" }} to="/sale">
              til salgs
            </Link>
            <Link
              style={{ textAlign: "left", fontWeight: "bold" }}
              to="/portofolio"
            >
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
              style={{
                fontSize: "2rem",
                textAlign: "left",
                lineHeight: "0.7em",
              }}
            >
              Kunst
              <br />
              Kaja
            </h1>
          </a>
          <Navbar.ButtonsContainer>
            <Link style={{ textAlign: "left" }} to="/">
              hjem
            </Link>

            <Link style={{ textAlign: "left" }} to="/sale">
              til salgs
            </Link>
            <Link
              style={{ textAlign: "left", fontWeight: "bold" }}
              to="/portofolio"
            >
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
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src\assets\IMG_5322.JPG"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src\assets\IMG_5161.JPG"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src\assets\IMG_5154.JPG"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src/assets/test2.jpg"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src\assets\IMG_5149.JPG"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src/assets/test2.jpg"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src/assets/test2.jpg"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src/assets/test2.jpg"
            title="Distant lights going up"
            price="8000 ,-"
          />
          <Gallery.Card
            imgSrc="src/assets/test2.jpg"
            title="Distant lights going up"
            price="8000 ,-"
          />
        </Gallery>
      </div>
    </div>
  );
};

export default Portofolio;

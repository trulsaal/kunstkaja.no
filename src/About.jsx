import React from "react";
import MobileNav from "./components/MobileNav";
import Container from "./components/Container";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
import "./components/About.css";
import Gallery from "./components/Gallery";

const About = () => {
  return (
    <div className="about-container">
      <MobileNav>
        <Navbar.ButtonsContainer>
          <Link style={{ textAlign: "left" }} to="/">
            hjem
          </Link>

          <Link style={{ textAlign: "left" }} to="/sale">
            til salgs
          </Link>
          <Link style={{ textAlign: "left" }} to="/portofolio">
            portefølje
          </Link>
          <Link style={{ textAlign: "left", fontWeight: "bold" }} to="/about">
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
            hjem
          </Link>

          <Link style={{ textAlign: "left" }} to="/sale">
            til salgs
          </Link>
          <Link style={{ textAlign: "left" }} to="/portofolio">
            portefølje
          </Link>
          <Link style={{ textAlign: "left", fontWeight: "bold" }} to="/about">
            om
          </Link>
        </Navbar.ButtonsContainer>
      </Navbar>
      <div className="inner-about-div">
        <div
          style={{
            paddingTop: "5em",
            lineHeight: "1.5em",
          }}
        >
          <h2 style={{ fontFamily: "Outfit", fontWeight: "400" }}>
            kunstKaja | Kaja Andrea Krøvel
          </h2>
          <p style={{ fontSize: "14px" }}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
            <br />
            <br />
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            <br />
            <br />
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC.
            <br />
            <br />
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32.
          </p>

          <br />
          <br />
          <br />
          <p style={{ color: "gray" }}>
            <h4 style={{ fontFamily: "Outfit" }}>English</h4>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
            <br />
            <br />
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            <br />
            <br />
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC.
            <br />
            <br />
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div>
          <Gallery.Card imgSrc="src\assets\IMG_5311.JPG" />
        </div>
      </div>
    </div>
  );
};

export default About;

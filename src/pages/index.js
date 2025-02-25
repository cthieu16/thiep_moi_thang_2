import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Title />
      <Greeting />
      <Gallery />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2025 Thiều Trần Cương
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;

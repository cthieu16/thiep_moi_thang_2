import React from "react";
import styled from "styled-components";
import {
  BRIDE_NAME,
  GROOM_NAME,
  WEDDING_DATE,
  WEDDING_LOCATION,
} from "../../config.js";
import BackgroundVideo from "../assets/background.jpeg";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>THIỆP MỜI "GẶP NHAU CUỐI THÁNG 2"</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <img style={{width: "100%"}} src={BackgroundVideo} alt="" />
    </Layout>
  );
};

export default Title;

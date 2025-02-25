import { Divider } from "antd";
import React from "react";
import styled from "styled-components";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">Các thành viên tham gia</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        Thiều Trần Cương
        <br />
        <br />
        Đào Xuân Thủy
        <br />
        <br />
        Đào Duy Trường (Chủ Chi)
        <br />
        <br />
        Nguyễn Tiến Vinh
        <br />
        <br />
        Thiều Đại Dương
        <br />
        <br />
        Lưu Quốc Lâm
        <br />
        <br />
        Thiều Xuân Lộc
        <br />
        <br />
        Đàm Đức Hùng(Chủ Chi + Chủ Chì)
        <br />
        <br />
        Mai Đình Thi
        <br />
        <br />
        Lê Văn Minh
        <br />
        <br />
        Ngô Minh Tuấn
        <br />
        <br />
        Phạm Thành Long
        <br />
        <br />
        Lê Đức Cương
        <br />
        <br />
        Và một số cái tên khác
      </Content>
    </Wrapper>
  );
};

export default Greeting;

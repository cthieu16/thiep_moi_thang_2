import { Divider } from "antd";
import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/img1.jpeg";
import GalleryPhoto10 from "../assets/img10.jpeg";
import GalleryPhoto11 from "../assets/img11.jpeg";
import GalleryPhoto2 from "../assets/img2.jpeg";
import GalleryPhoto3 from "../assets/img3.jpeg";
import GalleryPhoto4 from "../assets/img4.jpeg";
import GalleryPhoto5 from "../assets/img5.jpeg";
import GalleryPhoto6 from "../assets/img6.jpeg";
import GalleryPhoto7 from "../assets/img7.jpeg";
import GalleryPhoto8 from "../assets/img8.jpeg";
import GalleryPhoto9 from "../assets/img9.jpeg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  { original: GalleryPhoto1, thumbnail: GalleryPhoto1 },
  { original: GalleryPhoto2, thumbnail: GalleryPhoto2 },
  { original: GalleryPhoto3, thumbnail: GalleryPhoto3 },
  { original: GalleryPhoto4, thumbnail: GalleryPhoto4 },
  { original: GalleryPhoto5, thumbnail: GalleryPhoto5 },
  { original: GalleryPhoto6, thumbnail: GalleryPhoto6 },
  { original: GalleryPhoto7, thumbnail: GalleryPhoto7 },
  { original: GalleryPhoto8, thumbnail: GalleryPhoto8 },
  { original: GalleryPhoto9, thumbnail: GalleryPhoto9 },
  { original: GalleryPhoto10, thumbnail: GalleryPhoto10 },
  { original: GalleryPhoto11, thumbnail: GalleryPhoto11 },
];

// Hàm tùy chỉnh hình ảnh lớn
const renderItem = (item) => (
  <div className="custom-image-gallery">
    <img
      src={item.original}
      alt=""
      style={{
        width: "100%",
        height: "400px", // Chiều cao cố định
        objectFit: "cover", // Cắt ảnh để không méo
      }}
    />
  </div>
);

// Hàm tùy chỉnh thumbnail
const renderThumbInner = (item) => (
  <div className="custom-thumbnail">
    <img
      src={item.thumbnail}
      alt=""
      style={{
        width: "100%",
        height: "80px", // Đặt chiều cao thumbnail cố định
        objectFit: "cover", // Đảm bảo không méo ảnh
      }}
    />
  </div>
);

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Kỉ niệm của chúng ta</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        renderItem={renderItem} // Tùy chỉnh hình ảnh lớn
        renderThumbInner={renderThumbInner} // Tùy chỉnh thumbnail
      />
    </Wrapper>
  );
};

export default Gallery;

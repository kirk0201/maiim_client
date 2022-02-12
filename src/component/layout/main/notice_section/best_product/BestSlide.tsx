import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Image from "next/image";

import React from "react";

export interface LayoutProp {
  children?: React.ReactNode;
}

function BestSlide() {
  return (
    <BestContainer>
      <StyledSwiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        centeredSlides
        loop
      >
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image src="/best_product/best1_1.jpg" width={1000} height={500} />
            <StyledButton_01>자세히 보기</StyledButton_01>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/best_product/best2_2.jpg" width={1000} height={500} />
          <StyledButton_02>자세히 보기</StyledButton_02>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/best_product/best3_3.jpg" width={1000} height={500} />
          <StyledButton_03>자세히 보기</StyledButton_03>
        </SwiperSlide>
      </StyledSwiper>
    </BestContainer>
  );
}
export default BestSlide;

const BestContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  top: 146px;
`;
const StyledButton_01 = styled.button`
  position: absolute;
  background-color: transparent;
  width: 130px;
  font-size: 14px;
  padding: 10px 20px;
  color: #aed581;
  border: 1px solid #aed581;
  border-radius: 6px;
  font-weight: 800;
  z-index: 7;
  cursor: pointer;
  top: 300px;
  left: 590px;
  box-shadow: 5px 5px 5px 1px;
  &:hover {
    background-color: #aed581;
    box-shadow: none;
    color: white;
    transition: all 0.7s;
    border: 1px solid #aed581;
  }
`;
const StyledButton_02 = styled(StyledButton_01)`
  top: 320px;
  left: 530px;
`;
const StyledButton_03 = styled(StyledButton_01)`
  top: 345px;
  left: 530px;
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  padding-top: 10px;
  width: calc(1000px * 3 + 10px);
  margin-left: calc((1000px * 3 + 10px) / -2);
  left: 50%;
  .swiper-slide-prev,
  .swiper-slide-next {
    opacity: 0.2;
  }
  .swiper-slide-active {
    transition: opacity 2s;
  }
  .swiper-slide {
    position: relative;
  }
`;

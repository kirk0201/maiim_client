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
          <Image src="/best_product/best1_1.jpg" width={1000} height={500} />
          <StyledButton_01>자세히 보기</StyledButton_01>
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

  @media (max-width: 47.9375em) {
    //모바일
    top: 10vh;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 14vh;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 16vh;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    top: 22vh;
  }
`;
const StyledButton_01 = styled.button`
  position: absolute;
  background-color: transparent;
  width: 80px;
  font-size: 0.6rem;
  padding: 10px 10px;
  color: #aed581;
  border: 1px solid #aed581;
  border-radius: 6px;
  font-weight: 800;
  z-index: 7;
  cursor: pointer;

  box-shadow: 5px 5px 5px 1px;
  &:hover {
    background-color: #aed581;
    box-shadow: none;
    color: white;
    transition: all 0.7s;
    border: 1px solid #aed581;
  }
  @media (max-width: 47.9375em) {
    //모바일

    top: 150px;
    left: 270px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 220px;
    left: 420px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 250px;
    left: 480px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 130px;
    font-size: 14px;
    padding: 10px 20px;

    top: 300px;
    left: 590px;
  }
`;
const StyledButton_02 = styled(StyledButton_01)`
  @media (max-width: 47.9375em) {
    //모바일
    top: 160px;
    left: 260px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 230px;
    left: 370px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 260px;
    left: 430px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    top: 320px;
    left: 530px;
  }
`;
const StyledButton_03 = styled(StyledButton_01)`
  @media (max-width: 47.9375em) {
    //모바일
    top: 170px;
    left: 260px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 240px;
    left: 380px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 280px;
    left: 450px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    top: 345px;
    left: 530px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: calc(500px * 3 + 10px);
  margin-left: calc((500px * 3 + 10px) / -2);
  left: 50%;
  @media (max-width: 47.9375em) {
    //모바일
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: calc(700px * 3 + 10px);
    margin-left: calc((700px * 3 + 10px) / -2);
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: calc(800px * 3 + 10px);
    margin-left: calc((800px * 3 + 10px) / -2);
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
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
  }
`;

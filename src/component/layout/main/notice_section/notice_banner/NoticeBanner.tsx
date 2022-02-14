import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

export default function NoticeBanner() {
  return (
    <StyledSwiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      loop
      direction="vertical"
    >
      <SwiperSlide>마임 학성지사 웹 개발중</SwiperSlide>
      <SwiperSlide>2022년 2월달 스케쥴</SwiperSlide>
      <SwiperSlide>화장품 건강보조식품 업데이트</SwiperSlide>
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
  height: 20px;
  text-align: center;
  @media (max-width: 47.9375em) {
    //모바일
    font-size: 0.9em;
    line-height: 1.2em;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    font-size: 1rem;
    &::before {
      position: absolute;
      content: "";
      top: 0.1vh;
      left: 5vw;
      width: 1px;
      height: 2.5vh;
      background-color: #808080;
    }
  }
`;

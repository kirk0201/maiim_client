import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Image from "next/image";

export default function Banner() {
  return (
    <Container>
      <StyledSwiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop
      >
        <SwiperSlide>
          <StyledSlide>
            <Image
              className="test"
              src="/main01.png"
              width="1600px"
              height="900px"
            />
          </StyledSlide>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlide>
            <Image src="/main02.png" width="1600px" height="900px" />
          </StyledSlide>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlide>
            <Image src="/main03.png" width="1600px" height="900px" />
          </StyledSlide>
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  top: 10vh;
  @media (max-width: 47.9375em) {
    //모바일

    .swiper-button-prev::after {
      position: absolute;
      display: block;
      z-index: 11;
      top: 5.5rem;
      line-height: 1;
      margin-top: -2em;
      cursor: pointer;
    }
    .swiper-button-next::after {
      position: absolute;
      display: block;
      z-index: 11;
      top: 5.5rem;
      line-height: 1;
      margin-top: -2em;
      cursor: pointer;
    }
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 13vh;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 15vh;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반

    top: 20vh;
  }
`;
const StyledSwiper = styled(Swiper)`
  position: relative;

  .swiper-pagination-bullet-active {
    background-color: white !important;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    background-color: grey;
  }
  .swiper-slide-active {
    height: 300px;
  }
`;
const StyledSlide = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 47.9375em) {
    //모바일
    height: 300px;
    image-rendering: -moz-crisp-edges;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    image-rendering: -moz-crisp-edges;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
`;

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
  font-size: 20px;
  font-weight: 500;
  width: 300px;
  height: 20px;
  background-color: red;
  margin-left: 30px;
`;

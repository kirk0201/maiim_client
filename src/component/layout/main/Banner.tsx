import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import SlideImage from "../../common/SlideImage";

export default function Banner() {
  return (
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
        <SlideImage src="/banner1.jpg" width="1800px" height="700px" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="/banner2.jpg" width="1800px" height="700px" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="/banner3.jpg" width="1800px" height="700px" />
      </SwiperSlide>
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  position: relative;
  height: 630px;
  .swiper-pagination-bullet-active {
    background-color: white !important;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    background-color: grey;
  }
`;

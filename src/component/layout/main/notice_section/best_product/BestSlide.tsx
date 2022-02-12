import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Image from "next/image";

import React from "react";
import Button from "../../../../common/Button";

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
            <Button01>자세히 보기</Button01>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/best_product/best2_2.jpg" width={1000} height={500} />
          <Button>자세히 보기</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/best_product/best3_3.jpg" width={1000} height={500} />
          <Button>자세히 보기</Button>
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
  top: 40px;
`;
const Button01 = styled(Button)`
  position: absolute;
  top: 0;
  left: 50;
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
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

import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import NoticeBanner from "./notice_banner/NoticeBanner";
import BestSlide from "./best_product/BestSlide";

export default function Notice() {
  const [bestProduct, setBestProduct] = useState<boolean>(true);

  const offBestProduct = () => {
    setBestProduct(!bestProduct);
  };
  return (
    <>
      <NoticeContainer>
        <StyledLeft>
          <StyledLeftContainer>
            <div className="noticeTitle">공지사항</div>
            <NoticeBanner />
          </StyledLeftContainer>
        </StyledLeft>
        <StyledRight>
          <StyledRightContainer>
            <span className="bestText">Best &nbsp;</span>
            <span className="productText">Product</span>
            <StyledArrow>
              <Image
                src={
                  bestProduct ? "/arrow/downArrow.png" : "/arrow/upArrow.png"
                }
                width={50}
                height={50}
                onClick={offBestProduct}
              ></Image>
            </StyledArrow>
          </StyledRightContainer>
        </StyledRight>
      </NoticeContainer>
      {bestProduct && <BestSlide />}
    </>
  );
}
const NoticeContainer = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    position: relative;
    top: 10vh;
    display: flex;
    z-index: 5;
    font-size: 1rem;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반

    position: relative;
    top: 9.125rem;
    display: flex;

    font-size: 1.25rem;
  }
`;

const StyledLeft = styled.div`
  position: relative;
  width: 50%;
  background-color: #333;
  max-width: 1100px;
`;
const StyledLeftContainer = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    position: relative;
    max-width: 1100px;
    background-color: #333;
    color: white;
    padding: 1.25em 0;
    display: flex;
    font-weight: 500;
    height: 2.5em;
    flex-direction: column;
    .noticeTitle {
      display: flex;
      justify-content: center;
      margin: 5px 0;
      align-items: center;
      font-size: 0.7em;
    }
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    position: relative;
    max-width: 1100px;
    width: 31.25em;
    background-color: #333;
    color: white;
    padding: 20px 0;
    display: flex;
    font-weight: 500;
    width: 100%;
    .noticeTitle {
      margin-left: 8em;
    }
  }
`;

const StyledRight = styled.div`
  width: 50%;
  background-color: #f6f5ef;
  font-weight: 700;
  position: relative;
  display: flex;
`;

const StyledRightContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  .bestText {
    display: block;
    color: #33691e;
  }
  .productText {
    display: block;
  }
`;

const StyledArrow = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5em;
  @media (max-width: 47.9375em) {
    //모바일
    animation: arrow 1s linear infinite;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    &:hover {
      animation: arrow 1s linear infinite;
    }
  }

  @keyframes arrow {
    0% {
      top: -5px;
    }
    100% {
      top: 5px;
    }
  }
`;

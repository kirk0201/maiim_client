import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import NoticeBanner from "../../../common/NoticeBanner";
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
            공지사항
            <NoticeBanner />
          </StyledLeftContainer>
        </StyledLeft>
        <StyledRight>
          <StyledRightContainer>
            <span style={{ color: "#33691e" }}>Best &nbsp;</span> Product
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
  position: relative;
  top: 148px;
  display: flex;
  z-index: 5;
  font-size: 20px;
  font-weight: 700;
`;

const StyledLeft = styled.div`
  position: relative;
  width: 50%;
  background-color: #333;
`;
const StyledLeftContainer = styled.div`
  position: relative;
  max-width: 1100px;
  width: 500px;
  margin: 0 auto;
  background-color: #333;
  color: white;
  padding: 20px 0;
  display: flex;
`;

const StyledRight = styled.div`
  width: 50%;
  background-color: #f6f5ef;
  position: relative;
`;

const StyledRightContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const StyledArrow = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

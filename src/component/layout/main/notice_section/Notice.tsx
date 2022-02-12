import Image from "next/image";
import styled from "styled-components";
import NoticeBanner from "../../../common/NoticeBanner";

export default function Notice() {
  return (
    <NoticeContainer>
      <StyledLeft>
        <StyledLeftContainer>
          공지사항
          <NoticeBanner />
        </StyledLeftContainer>
      </StyledLeft>
      <StyledRight>
        <StyledRightContainer>
          Best Product
          <StyledArrow>
            <Image src="/1x/arrow.png" width={50} height={50}></Image>
          </StyledArrow>
        </StyledRightContainer>
      </StyledRight>
    </NoticeContainer>
  );
}
const NoticeContainer = styled.div`
  position: relative;
  display: flex;
  font-size: 20px;
  font-weight: 700;
`;

const StyledLeft = styled(NoticeContainer)`
  width: 50%;
  background-color: #333;
`;

const StyledLeftContainer = styled(StyledLeft)`
  max-width: 1100px;
  width: 500px;
  margin: 0 auto;
  background-color: #333;
  color: white;
  padding: 20px 0;
  display: flex;
`;

// #f6f5ef
const StyledRight = styled(NoticeContainer)`
  width: 50%;
  background-color: #f6f5ef;
  display: relative;
`;

const StyledRightContainer = styled(StyledRight)`
  display: relative;
  margin: 0 auto;
  /* background-color: red; */
  justify-content: center;
  align-items: center;
`;
const StyledArrow = styled.div`
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

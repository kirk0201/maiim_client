import styled from "styled-components";
import NoticeBanner from "../../common/NoticeBanner";
import { Container } from "./Header";

export default function Notice() {
  return (
    <NoticeContainer>
      <StyledNotice>
        <StyledContainer>
          공지사항
          <NoticeBanner />
        </StyledContainer>
      </StyledNotice>
    </NoticeContainer>
  );
}

const NoticeContainer = styled.div`
  position: relative;
`;

const StyledNotice = styled(NoticeContainer)`
  width: 50%;
  background-color: #333;
`;

const StyledContainer = styled(StyledNotice)`
  max-width: 1100px;
  margin: 0 auto;
  background-color: #333;
  color: white;
  padding: 20px 50px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
`;

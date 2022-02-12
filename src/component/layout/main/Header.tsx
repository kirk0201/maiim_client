import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Head>
        <title>마임 학성지사</title>
      </Head>
      <Container>
        <ContentContainer>
          <ImageContainer>
            <Image
              src="/logo.png"
              width="300px"
              height="70px"
              objectFit="none"
            ></Image>
            <ImageSpan>학성지사</ImageSpan>
            <MenuContainer>
              <Image src="/menu.png" width="40px" height="50px"></Image>
            </MenuContainer>
          </ImageContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const ContentContainer = styled.div`
  /* width: 1100px; */
  margin: 0 auto;
  background-color: ${({ theme }) => theme.container_bg};
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 2;
  position: relative;
  padding: 10px 0;
`;
const ImageSpan = styled.span`
  display: flex;
  align-items: flex-end;
  line-height: 2.5;
  font-size: 12px;
`;
const MenuContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

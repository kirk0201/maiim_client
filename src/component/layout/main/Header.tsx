import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background-color: ${theme.container_bg};
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 2;
  position: relative;
  padding: 10px 0;
`;
const MenuContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
export default function Header() {
  return (
    <>
      <Head>
        <title>마임 학성지사</title>
      </Head>
      <Container>
        <ImageContainer>
          <Image
            src="/logo.png"
            width="300px"
            height="70px"
            objectFit="none"
          ></Image>
          <MenuContainer>
            <Image src="/menu.png" width="40px" height="50px"></Image>
          </MenuContainer>
        </ImageContainer>
      </Container>
    </>
  );
}

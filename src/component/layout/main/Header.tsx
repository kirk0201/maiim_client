import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../../common/NavBar";

interface INav {
  menu_1: boolean;
  menu_2: boolean;
  menu_3: boolean;
  menu_4: boolean;
  menu_5: boolean;
}
export default function Header() {
  const [hamburger, setHamburger] = useState(false);
  const [nav, setNav] = useState<INav>({
    menu_1: false,
    menu_2: false,
    menu_3: false,
    menu_4: false,
    menu_5: false,
  });
  const onHambugerClick = () => {
    setHamburger(!hamburger);
    setNav({
      menu_1: false,
      menu_2: false,
      menu_3: false,
      menu_4: false,
      menu_5: false,
    });
  };

  const mouseOver = (e: any): void => {
    switch (e.target.innerText) {
      case "마임 학성지사":
        return setNav({
          ...nav,
          menu_1: true,
          menu_2: false,
          menu_3: false,
          menu_4: false,
          menu_5: false,
        });
      case "공지사항":
        return setNav({
          ...nav,
          menu_2: true,
          menu_1: false,
          menu_3: false,
          menu_4: false,
          menu_5: false,
        });
      case "마임 매거진":
        return setNav({
          ...nav,
          menu_3: true,
          menu_2: false,
          menu_1: false,
          menu_4: false,
          menu_5: false,
        });
      case "마임 제품":
        return setNav({
          ...nav,
          menu_4: true,
          menu_2: false,
          menu_3: false,
          menu_1: false,
          menu_5: false,
        });
      case "추천 페이지":
        return setNav({
          ...nav,
          menu_5: true,
          menu_2: false,
          menu_3: false,
          menu_4: false,
          menu_1: false,
        });
    }
  };
  const mouseLeave = (e: any): void => {
    setNav({
      ...nav,
      menu_1: false,
      menu_2: false,
      menu_3: false,
      menu_4: false,
      menu_5: false,
    });
  };
  return (
    <>
      <Head>
        <title>마임 학성지사</title>
      </Head>
      <Container>
        <ContentContainer>
          <ImageContainer>
            <Image src="/logo.png" width="330" height="65"></Image>
          </ImageContainer>

          <TextSpan>학성지사</TextSpan>
          <MenuContainer>
            <Image
              src="/menu.png"
              width="40"
              height="50"
              onClick={onHambugerClick}
            ></Image>
          </MenuContainer>
        </ContentContainer>
      </Container>
      <NavBar
        hamburger={hamburger}
        mouseOver={mouseOver}
        mouseLeave={mouseLeave}
        nav={nav}
      />
    </>
  );
}
const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const ContentContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.container_bg};
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const ImageContainer = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    display: flex;
    position: relative;
    padding: 1rem 0;
    width: 50vw;
    height: 5vh;
    z-index: 10;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0.625em 0;
    height: 12vh;
    z-index: 10;
  }
`;
const TextSpan = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    position: absolute;
    top: 6vh;
    right: 16vw;
    font-size: 0.5rem;
    z-index: 10;

  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반

    position: absolute;
    display: flex;
    top: 12vh;
    right: 35vw;
    font-size: 0.8rem;
    z-index: 10;

  }
`;
const MenuContainer = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    position: absolute;
    top: 3vh;
    left: 5vw;
    width: 7vw;
    z-index: 10;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    display: none;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    display: none;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    display: none;
  }
`;

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
            <Image
              src="/logo.png"
              width="300px"
              height="70px"
              objectFit="none"
            ></Image>
            <ImageSpan>학성지사</ImageSpan>
            <MenuContainer>
              <Image
                src="/menu.png"
                width="40px"
                height="50px"
                onClick={onHambugerClick}
              ></Image>
            </MenuContainer>
          </ImageContainer>
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
  margin: 0 auto;
  background-color: ${({ theme }) => theme.container_bg};
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0.625em 0;
`;
const ImageSpan = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    display: flex;
    align-items: flex-end;
    line-height: 2.5;
    font-size: 0.5rem;
    margin-left: -30px;
    flex: 1;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    display: flex;
    align-items: flex-end;
    line-height: 2.5;
    font-size: 0.8rem;
  }
`;
const MenuContainer = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    position: absolute;
    top: 1.25em;
    right: 1.25em;
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

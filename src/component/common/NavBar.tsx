import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import MenuItem from "../layout/main/content_menu/MenuItem";

interface Iprops {
  nav: INav;
}
interface INav {
  menu_1: boolean;
  menu_2: boolean;
  menu_3: boolean;
  menu_4: boolean;
  menu_5: boolean;
}

function NavBar() {
  const [nav, setNav] = useState<INav>({
    menu_1: false,
    menu_2: false,
    menu_3: false,
    menu_4: false,
    menu_5: false,
  });

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
    <HeadContainer>
      <Head>
        {/* Dongle400 Noto sans KR 500 Roboto500 폰트 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle&family=Noto+Sans+KR:wght@500&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContentContainer>
        <HeadNav onMouseOver={mouseOver}>
          <HeadLi>마임 학성지사</HeadLi>
          <HeadLi>공지사항</HeadLi>
          <HeadLi>마임 매거진</HeadLi>
          <HeadLi>마임 제품</HeadLi>

          <HeadLi>추천 페이지</HeadLi>
        </HeadNav>
      </ContentContainer>
      {nav.menu_1 && (
        <MenuItem mouseOver={mouseOver} nav={nav} mouseLeave={mouseLeave} />
      )}
      {nav.menu_2 && (
        <MenuItem mouseOver={mouseOver} nav={nav} mouseLeave={mouseLeave} />
      )}
      {nav.menu_3 && (
        <MenuItem mouseOver={mouseOver} nav={nav} mouseLeave={mouseLeave} />
      )}
      {nav.menu_4 && (
        <MenuItem mouseOver={mouseOver} nav={nav} mouseLeave={mouseLeave} />
      )}
      {nav.menu_5 && (
        <MenuItem mouseOver={mouseOver} nav={nav} mouseLeave={mouseLeave} />
      )}
    </HeadContainer>
  );
}
export default NavBar;

const HeadContainer = styled.div`
  z-index: 10;
  top: 90px;
  width: 100%;
  background-color: ${({ theme }) => theme.container_bg};
  position: fixed;
  font-size: 16px;
  font-weight: 500;
  color: #808080;
  box-shadow: 5px 5px 4px 1px;
  @media (max-width: 767px) {
    //모바일
  }

  @media (min-width: 768px) and (max-width: 991px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    // 테블릿 가로
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
  }
`;
const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const HeadNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const HeadLi = styled.li`
  list-style: none;
  padding: 20px 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.nav_bg};
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: scale(1.1);
  }
`;

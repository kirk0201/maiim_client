import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import MenuItem from "../layout/main/nav_menu/MenuItem";
interface Iprops {
  hamburger: boolean;
  mouseLeave: (e: any) => void;
  mouseOver: (e: any) => void;
  nav: INav;
}
interface INav {
  menu_1: boolean;
  menu_2: boolean;
  menu_3: boolean;
  menu_4: boolean;
  menu_5: boolean;
}

function NavBar({ hamburger, mouseOver, mouseLeave, nav }: Iprops) {
  return (
    <HeadContainer onMouseLeave={mouseLeave}>
      <Head>
        {/* Dongle400 Noto sans KR 500 Roboto500 폰트 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle&family=Noto+Sans+KR:wght@500&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContentContainer className={hamburger ? "isClicked" : "isUnClicked"}>
        <HeadNav onMouseOver={mouseOver}>
          <HeadLi>마임 학성지사</HeadLi>
          <HeadLi>공지사항</HeadLi>
          <HeadLi>마임 매거진</HeadLi>
          <HeadLi>마임 제품</HeadLi>

          <HeadLi>추천 페이지</HeadLi>
        </HeadNav>
      </ContentContainer>
      {nav.menu_1 && (
        <MenuItem
          mouseOver={mouseOver}
          nav={nav}
          mouseLeave={mouseLeave}
          hamburger={hamburger}
        />
      )}
      {nav.menu_2 && (
        <MenuItem
          mouseOver={mouseOver}
          nav={nav}
          mouseLeave={mouseLeave}
          hamburger={hamburger}
        />
      )}
      {nav.menu_3 && (
        <MenuItem
          mouseOver={mouseOver}
          nav={nav}
          mouseLeave={mouseLeave}
          hamburger={hamburger}
        />
      )}
      {nav.menu_4 && (
        <MenuItem
          mouseOver={mouseOver}
          nav={nav}
          mouseLeave={mouseLeave}
          hamburger={hamburger}
        />
      )}
      {nav.menu_5 && (
        <MenuItem
          mouseOver={mouseOver}
          nav={nav}
          mouseLeave={mouseLeave}
          hamburger={hamburger}
        />
      )}
    </HeadContainer>
  );
}
export default NavBar;

const HeadContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.container_bg};
  position: fixed;
  z-index: 2;
  font-size: 1rem;
  font-weight: 500;
  color: #808080;

  @media (max-width: 47.9375em) {
    //모바일
    .isClicked {
      display: block;
    }
    .isUnClicked {
      display: none;
    }
    top: 9.7vh;
    box-shadow: 3px 3px 2px 1px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 5.652rem;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 5.652rem;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    top: 14.6vh;
  }
`;
const ContentContainer = styled.div`
  max-width: 68.75em;
  margin: 0 auto;
`;

const HeadNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const HeadLi = styled.li`
  list-style: none;
  cursor: pointer;
  text-align: center;
  @media (max-width: 47.9375em) {
    //모바일
    padding: 1rem 0;
    width: 20%;
    font-size: 0.6rem;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    padding: 1.25em 1.25em;
  }

  &:hover {
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.nav_bg};
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: scale(1.1);
  }
`;

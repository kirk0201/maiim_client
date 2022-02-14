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
    <HeadContainer>
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
  @media (max-width: 47.9375em) {
    //모바일
    .isClicked {
      display: block;
    }
    .isUnClicked {
      display: none;
    }
    z-index: 10;
    top: 5.625rem;
    width: 100%;
    background-color: ${({ theme }) => theme.container_bg};
    position: fixed;
    font-size: 0.9em;
    font-weight: 500;
    color: #808080;
    box-shadow: 5px 5px 4px 1px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    z-index: 10;
    top: 5.652rem;
    width: 100%;
    background-color: ${({ theme }) => theme.container_bg};
    position: fixed;
    font-size: 1em;
    font-weight: 500;
    color: #808080;
    box-shadow: 5px 5px 4px 1px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    z-index: 10;
    top: 5.652rem;
    width: 100%;
    background-color: ${({ theme }) => theme.container_bg};
    position: fixed;
    font-size: 1em;
    font-weight: 500;
    color: #808080;
    box-shadow: 5px 5px 4px 1px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    z-index: 10;
    top: 5.625rem;
    width: 100%;
    background-color: ${({ theme }) => theme.container_bg};
    position: fixed;
    font-size: 1em;
    font-weight: 500;
    color: #808080;
    box-shadow: 5px 5px 4px 1px;
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
  padding: 1.25rem 1.25rem;
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

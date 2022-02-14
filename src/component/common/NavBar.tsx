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
  box-shadow: 3px 3px 2px 1px;

  @media (max-width: 47.9375em) {
    //모바일
    .isClicked {
      display: block;
    }
    .isUnClicked {
      display: none;
    }

    top: 9.7vh;

  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 7vh;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 9vh;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    top: 14vh;
  }
`;
const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 47.9375em) {
    //모바일
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 600px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 800px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    max-width: 1100px;
  }
`;

const HeadNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const HeadLi = styled.li`

  list-style: none;
  cursor: pointer;
  text-align: center;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;

  @media (max-width: 47.9375em) {
    //모바일
    width: 20vw;
    padding: 1.25rem 0;
    font-size: 0.6rem;

  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 133px;
    font-size: 0.9rem;
    padding: 1.25rem 1rem;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 133px;
    font-size: 0.9rem;
    padding: 1.25rem 1rem;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반

    width: 133px;

    padding: 1.25em 1.25em;
    /* &:nth-child(1)::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 10px;
      top: 0;
      left: 30px;
      background-color: #808080;
    }
    &:nth-child(2)::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 10px;
      top: 23px;
      left: 617px;
      background-color: #808080;
    }
    :nth-child(3)::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 10px;
      top: 23px;
      left: 835px;
      background-color: #808080;
    }
    :nth-child(4)::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 10px;
      top: 23px;
      left: 1073px;
      background-color: #808080;
    }
    :nth-child(5)::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 10px;
      top: 23px;
      left: 1302px;
      background-color: #808080;
    } */
  }

  &:hover {
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.nav_bg};
    color: white;

    transform: scale(1.1);
  }
`;

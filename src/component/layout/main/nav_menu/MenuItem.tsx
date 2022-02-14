import React from "react";
import styled from "styled-components";

interface Iprops {
  nav: INav;
  mouseOver: (e: any) => void;
  mouseLeave: (e: any) => void;
  hamburger: boolean;
}
interface INav {
  menu_1: boolean;
  menu_2: boolean;
  menu_3: boolean;
  menu_4: boolean;
  menu_5: boolean;
}

function MenuItem({ mouseOver, nav, mouseLeave }: Iprops) {
  return (
    <Container onMouseOver={mouseOver}>
      <ItemContainer onMouseLeave={mouseLeave}>
        {nav.menu_1 && (
          <ItemUl_01>
            <ItemLi>인사말</ItemLi>
            <ItemLi>오시는 길</ItemLi>
          </ItemUl_01>
        )}
        {nav.menu_2 && (
          <ItemUl_02>
            <ItemLi>공지사항</ItemLi>
          </ItemUl_02>
        )}
        {nav.menu_3 && (
          <ItemUl_03>
            <ItemLi>마임 매거진</ItemLi>
          </ItemUl_03>
        )}
        {nav.menu_4 && (
          <ItemUl_04>
            <ItemLi>화장품</ItemLi>
            <ItemLi>건강식품</ItemLi>
          </ItemUl_04>
        )}
        {nav.menu_5 && (
          <ItemUl_05>
            <ItemLi>추천 페이지</ItemLi>
          </ItemUl_05>
        )}
      </ItemContainer>
    </Container>
  );
}
export default MenuItem;

const Container = styled.div`
  width: 100%;
  position: fixed;
  height: 100px;
  z-index: 10;
  background-color: ${({ theme }) => theme.nav_bg};
  top: 146px;
  color: #cfcaca;
  font-size: 16px;
`;

const ItemContainer = styled.div`
  width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;
const ItemUl_01 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일
    width: 123.472px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 132.81px;
  }
`;
const ItemUl_02 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일
    width: 92.972px;
    padding-left: 125px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 98.89px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 265px;
  }
`;
const ItemUl_03 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일
    width: 110.236px;
    padding-left: 217px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 118.09px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 495px;
  }
`;
const ItemUl_04 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일
    width: 97px;
    padding-left: 327px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 103.38px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 745px;
  }
`;
const ItemUl_05 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일
    width: 110.236px;
    padding-left: 428px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 118.09px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 980px;
  }
`;
const ItemLi = styled.li`
  text-align: center;
  padding: 10px 10px;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    color: ${({ theme }) => theme.nav_hover_text};
    border: 1px solid white;
    border-radius: 7px;
    background-color: white;
  }
`;

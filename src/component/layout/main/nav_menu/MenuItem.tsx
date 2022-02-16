import React, { useRef, useEffect } from "react";
import styled from "styled-components";

interface Iprops {
  nav: INav;
  mouseOver: (e: any) => void;
  mouseLeave: () => void;
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
  // const mouse = (e) => {
  //   console.log(ref.current);
  // };

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (
        0 <= e.clientX &&
        e.clientX <= 766 &&
        69 <= e.clientY &&
        e.clientY <= 217
      ) {
        console.log("in!");
      } else {
        mouseLeave();
        console.log("out!");
      }
    });
  });

  return (
    <Container
      onMouseLeave={mouseLeave}
      className={
        nav.menu_1 || nav.menu_2 || nav.menu_3 || nav.menu_4 || nav.menu_5
          ? "active"
          : ""
      }
    >
      <ItemContainer>
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
  z-index: 3;
  position: absolute;
  color: #cfcaca;
  height: 15vh;
  background-color: ${({ theme }) => theme.nav_bg};
  padding: 0.5rem 0;

  @media (max-width: 47.9375em) {
    //모바일
    top: 19%;
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
    position: fixed;
    color: #cfcaca;
    height: 19vh;
    top: 21vh;
    animation: slide 0.4s linear;
    .active {
      @keyframes slide {
        0% {
          /* z-index: -2; */
          top: 0%;
        }
        100% {
          /* z-index: -2; */

          top: 21%;
        }
      }
    }
    .noActive {
      display: none;
    }
  }
`;

const ItemContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 47.9375em) {
    //모바일

    font-size: 0.6rem;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    font-size: 0.8rem;
    width: 600px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    font-size: 0.8rem;
    width: 800px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    font-size: 0.9rem;
    width: 1100px;
  }
`;
const ItemUl_01 = styled.ul`
  width: 20vw;
  @media (max-width: 47.9375em) {
    //모바일

    width: 20vw;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 130px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 130px;
    padding-left: 20px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 130px;
    padding-left: 23px;
  }
`;
const ItemUl_02 = styled.ul`
  width: 20vw;
  padding-left: 20vw;
  @media (max-width: 47.9375em) {
    //모바일

    width: 20vw;
    padding-left: 20vw;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 133px;
    padding-left: 114px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 133px;
    padding-left: 173px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 133px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 253px;
  }
`;
const ItemUl_03 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일

    width: 20vw;
    padding-left: 40vw;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 133px;
    padding-left: 233px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 133px;
    padding-left: 334px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 133px;

    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 484px;
  }
`;
const ItemUl_04 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일

    width: 20vw;
    padding-left: 60vw;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 133px;
    padding-left: 355px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 133px;
    padding-left: 495px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 133px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 717px;
  }
`;
const ItemUl_05 = styled.ul`
  @media (max-width: 47.9375em) {
    //모바일

    width: 20vw;
    padding-left: 80vw;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    width: 133px;
    padding-left: 480px;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    width: 133px;
    padding-left: 653px;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반
    width: 133px;
    /* 메뉴별 랜더링시 일자정렬을 위한 패딩 값 */
    padding-left: 947px;
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

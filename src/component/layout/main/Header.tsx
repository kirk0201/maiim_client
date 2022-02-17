import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../../common/NavBar";
import Login from "../login/Login";
import AccountBtn from "../../common/AccountBtn";

interface INav {
  menu_1: boolean;
  menu_2: boolean;
  menu_3: boolean;
  menu_4: boolean;
  menu_5: boolean;
}
interface IUser {
  findUser: {
    email: string;
    password: string;
    name: string;
    nickName: string;
    birth: string;
    address: string;
    phone: string;
    gender: string;
  };
}
export default function Header() {
  const [isLoginState, setIsLoginState] = useState({
    token: "",
    findUser: {},
    login: false,
  });
  const [hamburger, setHamburger] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [nav, setNav] = useState<INav>({
    menu_1: false,
    menu_2: false,
    menu_3: false,
    menu_4: false,
    menu_5: false,
  });

  useEffect(() => {}, [isLoginState]);
  const onChangeLoginState = (token: string, data: object) =>
    setIsLoginState({
      ...isLoginState,
      token: token,
      findUser: data,
      login: !false,
    });

  const onChangeLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  };

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
  const mouseLeave = () => {
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
          <MenuContainer>
            <Image
              src="/menu.png"
              width="40"
              height="50"
              onClick={onHambugerClick}
            ></Image>
          </MenuContainer>
          <ImageContainer>
            <Image src="/logo.png" width="330" height="65"></Image>
          </ImageContainer>
          <TextDiv>학성지사</TextDiv>

          {isLoginState.login ? (
            <AccountBtn isLoginState={isLoginState} />
          ) : (
            <SignupBtn onClick={onChangeLoginModal}>로그인</SignupBtn>
          )}

          {isLoginModal && (
            <Login
              onChangeLoginModal={onChangeLoginModal}
              onChangeLoginState={onChangeLoginState}
              isLoginState={isLoginState}
              isLoginModal
            />
          )}
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
  top: 0;
  width: 100%;
  z-index: 10;
`;
const ContentContainer = styled.div`
  position: absolute;

  background-color: ${({ theme }) => theme.container_bg};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  z-index: 10;
  @media (max-width: 47.9375em) {
    //모바일

    padding: 2vh 0;
    width: 50vw;
    min-height: 45px;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
  }

  @media (min-width: 75em) {
    // 데스크탑 일반

    padding: 0.625em 0;
    height: 12vh;
  }
`;
const TextDiv = styled.div`
  position: relative;

  @media (max-width: 47.9375em) {
    //모바일

    top: 45px;
    font-size: 0.5rem;
  }

  @media (min-width: 48em) and (max-width: 61.9375em) {
    // 테블릿 세로
    top: 5vh;
    right: 0;
    font-size: 0.7rem;
  }

  @media (min-width: 62em) and (max-width: 74.9375em) {
    // 테블릿 가로
    top: 7vh;
    right: 0;
    font-size: 0.7rem;
  }

  @media (min-width: 75em) {
    // 데스크탑 일반

    top: 12vh;
    font-size: 0.8rem;
  }
`;
const SignupBtn = styled.div`
  cursor: pointer;
  position: fixed;
  top: 1vh;
  right: 4vw;
  color: #808080;
  transition: all 0.5;
  font-size: 0.8rem;
  &:hover {
    color: lightgreen;
  }
  &:active {
    transform: scale(0.9);
  }
`;
const MenuContainer = styled.div`
  @media (max-width: 47.9375em) {
    //모바일
    position: absolute;
    top: 3vh;
    left: 5vw;
    width: 6vw;
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

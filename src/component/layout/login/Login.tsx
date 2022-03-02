import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { DesktopFC, TabletFC, MobileFC } from "../../common/MediaQuery";
import { useMediaQuery } from "react-responsive";
import Signup from "./Signup";
import Input from "../../common/Input";
import LoginBtn from "../../common/LoginBtn";
import SubTextAndBtn from "../../common/SubTextAndBtn";
import axios from "axios";
interface Iprops {
  onChangeLoginModal: () => void;
  onChangeLoginState: (token: string, data: object) => void;
  isLoginModal: boolean;
  isLoginState: {
    token: string;
    findUser: object;
    login: boolean;
  };
}
const Backdrop = () => {
  return <Container></Container>;
};
const Overlay = ({
  onChangeLoginModal,
  onChangeLoginState,
  isLoginModal,
  isLoginState,
}: Iprops) => {
  const [isSignModal, setIsSignModal] = useState(false);
  const [isLoginData, setIsLoginData] = useState({ email: "", password: "" });

  const onChangeSignModal = () => {
    setIsSignModal(!isSignModal);
  };
  const onChangeLoginData = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setIsLoginData({ ...isLoginData, [name]: value });
  };
  console.log("상태", isLoginState);

  const onHandleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.LOCALHOST}/users/login`,
        {
          email: isLoginData.email,
          password: isLoginData.password,
        }
      );
      console.log("로그인 성공!", data);
      onChangeLoginState(data.token, data.findUser);
      console.log("상태", isLoginState);
      onChangeLoginModal();
    } catch (error: any) {
      if (error.response) {
        const errorData = error.response;
        console.log(error.response);
        alert(`오류코드 [${errorData.status}] : ${errorData.data.message}`);
      } else if (error.request) {
        console.log(error.request);
      } else {
        alert("알 수 없는 오류로 로그인에 실패하였습니다.");
      }
    }
  };

  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1199,
  });
 return <SignupWrapper>
      <SignupContainer>
        {(isDesktop || isTablet) && (
          <ImageContainer>
            <StyledSwiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop
            >
              <SwiperSlide>
                <Image
                  width={700}
                  height={700}
                  src="/signup/vision_04.jpg"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={700}
                  height={700}
                  src="/signup/vision_02.jpg"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={700}
                  height={700}
                  src="/signup/vision_03.jpg"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={700}
                  height={700}
                  src="/signup/vision_01.jpg"
                ></Image>
              </SwiperSlide>
            </StyledSwiper>
          </ImageContainer>
        )}
        <ContentContainer>
          {isSignModal ? (
            <Signup
              onChangeSignModal={onChangeSignModal}
              onChangeData={onChangeLoginData}
            />
          ) : (
            <LoginWrapper>
              <Text>로그인</Text>
              <SubText>환영합니다! 이메일과 패스워드를 입력하세요.</SubText>
              <form onSubmit={onHandleLogin}>
                <Input
                  name="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required={true}
                  onChangeData={onChangeLoginData}
                >
                  이메일
                </Input>
                <Input
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required={true}
                  onChangeData={onChangeLoginData}
                >
                  비밀번호
                </Input>

                <LoginBtn>로그인</LoginBtn>
              </form>
              <SubTextAndBtn
                left="아직 아이디가 없으신가요?"
                right="회원가입"
                onClick={onChangeSignModal}
              />
              <ExitBtn>
                <Image
                  onClick={onChangeLoginModal}
                  width={30}
                  height={30}
                  src="/signup/close.png"
                ></Image>
              </ExitBtn>
            </LoginWrapper>
          )}
        </ContentContainer>
      </SignupContainer>
    </SignupWrapper>
}
function Login({
  onChangeLoginModal,
  onChangeLoginState,
  isLoginModal,
  isLoginState,
}: Iprops) {
  // const [isSignModal, setIsSignModal] = useState(false);
  // const [isLoginData, setIsLoginData] = useState({ email: "", password: "" });

  // const onChangeSignModal = () => {
  //   setIsSignModal(!isSignModal);
  // };
  // const onChangeLoginData = (e: any) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setIsLoginData({ ...isLoginData, [name]: value });
  // };
  // console.log("상태", isLoginState);

  // const onHandleLogin = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `${process.env.LOCALHOST}/users/login`,
  //       {
  //         email: isLoginData.email,
  //         password: isLoginData.password,
  //       }
  //     );
  //     console.log("로그인 성공!", data);
  //     onChangeLoginState(data.token, data.findUser);
  //     console.log("상태", isLoginState);
  //     onChangeLoginModal();
  //   } catch (error: any) {
  //     if (error.response) {
  //       const errorData = error.response;
  //       console.log(error.response);
  //       alert(`오류코드 [${errorData.status}] : ${errorData.data.message}`);
  //     } else if (error.request) {
  //       console.log(error.request);
  //     } else {
  //       alert("알 수 없는 오류로 로그인에 실패하였습니다.");
  //     }
  //   }
  // };

  // const isDesktop = useMediaQuery({ minWidth: 1200 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({
  //   minWidth: 768,
  //   maxWidth: 1199,
  // });
  return (
    // <Container>
    // <SignupWrapper>
    //   <SignupContainer>
    //     {(isDesktop || isTablet) && (
    //       <ImageContainer>
    //         <StyledSwiper
    //           modules={[Autoplay, Pagination]}
    //           pagination={{ clickable: true }}
    //           slidesPerView={1}
    //           autoplay={{ delay: 3000 }}
    //           loop
    //         >
    //           <SwiperSlide>
    //             <Image
    //               width={700}
    //               height={700}
    //               src="/signup/vision_04.jpg"
    //             ></Image>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <Image
    //               width={700}
    //               height={700}
    //               src="/signup/vision_02.jpg"
    //             ></Image>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <Image
    //               width={700}
    //               height={700}
    //               src="/signup/vision_03.jpg"
    //             ></Image>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <Image
    //               width={700}
    //               height={700}
    //               src="/signup/vision_01.jpg"
    //             ></Image>
    //           </SwiperSlide>
    //         </StyledSwiper>
    //       </ImageContainer>
    //     )}
    //     <ContentContainer>
    //       {isSignModal ? (
    //         <Signup
    //           onChangeSignModal={onChangeSignModal}
    //           onChangeData={onChangeLoginData}
    //         />
    //       ) : (
    //         <LoginWrapper>
    //           <Text>로그인</Text>
    //           <SubText>환영합니다! 이메일과 패스워드를 입력하세요.</SubText>
    //           <form onSubmit={onHandleLogin}>
    //             <Input
    //               name="email"
    //               type="email"
    //               placeholder="이메일을 입력하세요"
    //               required={true}
    //               onChangeData={onChangeLoginData}
    //             >
    //               이메일
    //             </Input>
    //             <Input
    //               name="password"
    //               type="password"
    //               placeholder="비밀번호를 입력하세요"
    //               required={true}
    //               onChangeData={onChangeLoginData}
    //             >
    //               비밀번호
    //             </Input>

    //             <LoginBtn>로그인</LoginBtn>
    //           </form>
    //           <SubTextAndBtn
    //             left="아직 아이디가 없으신가요?"
    //             right="회원가입"
    //             onClick={onChangeSignModal}
    //           />
    //           <ExitBtn>
    //             <Image
    //               onClick={onChangeLoginModal}
    //               width={30}
    //               height={30}
    //               src="/signup/close.png"
    //             ></Image>
    //           </ExitBtn>
    //         </LoginWrapper>
    //       )}
    //     </ContentContainer>
    //   </SignupContainer>
    // </SignupWrapper>
    // </Container>
  );
}
export default Login;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignupWrapper = styled.div`
  position: relative;
  width: 80vw;
  background-color: white;
  display: flex;
  border-radius: 1.25rem;
  box-shadow: 5px 5px 5px 1px;

  @media (max-width: 767px) {
    //모바일
    height: 500px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    // 테블릿 가로
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    height: 650px;
  }
`;
const SignupContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;
const ImageContainer = styled.div`
  position: relative;
  top: 0%;
  left: 0%;
`;

// 배너
const StyledSwiper = styled(Swiper)`
  /* width: 600px; */

  border-top-left-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 5px 1px;
  }
  @media (max-width: 767px) {
    //모바일
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    // 테블릿 가로 세로
    width: 40vw;
    height: 70vh;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    width: 40vw;
    height: 85vh;
  }
`;

// 나가기 버튼
const ExitBtn = styled.div`
  position: absolute;
  &:active {
    transform: scale(0.8);
  }
  @media (max-width: 767px) {
    //모바일
    top: 2%;
    right: 2%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    // 테블릿 세로
    top: 2%;
    right: 2%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    // 테블릿 가로
    top: 5%;
    right: 5%;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    top: 0%;
    right: 0%;
  }
`;

// Input Container
const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    //모바일
    top: 5%;
    left: 5%;
    width: 90%;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    // 테블릿 가로 세로
    font-size: 0.8rem;
    left: 60%;
    width: 30%;
    height: 70%;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    top: 15%;
    left: 60%;
    width: 30%;
    height: 70%;
  }
`;
const Text = styled.div`
  position: relative;
  font-size: 3em;
  padding: 30px 0;
`;
const SubText = styled.div`
  color: #aaaaaa;
`;
const LoginWrapper = styled.div`
  width: 100%;
  .inActive {
    display: none;
  }
  .active {
    display: block;
  }
`;
// const SubText_02 = styled(SubText)`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   padding-top: 1rem;
//   font-size: 0.9em;

//   .signupText {
//     color: #111727b5;
//     font-weight: 600;
//     &:hover {
//       animation: signup 2s infinite linear;
//     }

//   }
//   @keyframes signup {
//     0% {
//       transform: scale(0.9);
//     }
//     100% {
//       transform: scale(1.1);
//     }
//   }
// `;

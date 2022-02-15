import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
interface Iprops {
  onChangeSignup: () => void;
  isSignup: boolean;
}
function Signup({ onChangeSignup, isSignup }: Iprops) {
  return (
    <Container>
      <SignupWrapper>
        <SignupContainer>
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
                  src="/signup/vision_01.jpg"
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
                  src="/signup/vision_04.jpg"
                ></Image>
              </SwiperSlide>
            </StyledSwiper>
          </ImageContainer>
          <ContentContainer>
            <div className="mainText">Welcome</div>
            <div className="subText">
              환영합니다! 이메일과 패스워드를 입력하세요.
            </div>
            <div className="input">
              <div className="text">Email</div>
              <input placeholder="Enter your Email" type="text" />
            </div>
            <div className="input">
              <div className="text">Password</div>
              <input placeholder="Enter your Password" type="password" />
            </div>
            <div className="loginDiv">
              <button className="loginBtn">Login</button>
            </div>
            <span className="signupSpan">
              아직 아이디가 없으신가요?{" "}
              <span className="signupBtn">회원가입</span>
            </span>
          </ContentContainer>
          <ExitBtn>
            <Image
              onClick={onChangeSignup}
              width={30}
              height={30}
              src="/signup/close.png"
            ></Image>
          </ExitBtn>
        </SignupContainer>
      </SignupWrapper>
    </Container>
  );
}
export default Signup;

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
  height: 650px;
  background-color: white;
  display: flex;
  border-radius: 1.25rem;
  box-shadow: 5px 5px 5px 1px;
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
const StyledSwiper = styled(Swiper)`
  /* width: 600px; */
  width: 40vw;
  height: 85vh;

  border-top-left-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const ExitBtn = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;

  &:hover {
    animation: signup 1.5s infinite;
  }
  @keyframes signup {
    0% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(2);
    }
  }
`;
const ContentContainer = styled.div`
  width: 30%;
  height: 70%;
  top: 15%;
  position: absolute;
  left: 60%;
  display: flex;
  flex-direction: column;

  .mainText {
    position: relative;
    font-size: 3rem;
    padding: 30px 0;
  }
  .subText {
    color: #808080;
  }
  .input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    margin-top: 2rem;
    .text {
      font-size: 0.7rem;
      padding-bottom: 5px;
      font-weight: bold;
    }
    input {
      border: 1px solid #b8b5b5;
      font-size: 0.9rem;
      height: 5vh;
      border-radius: 0.3rem;
      padding-left: 10px;

      &:focus {
        outline-color: #75aff1d3;
      }
    }
  }
  .loginDiv {
    padding-top: 1.5rem;
    display: flex;
    justify-content: center;

    .loginBtn {
      color: white;
      width: 100%;
      height: 2rem;
      background-color: #111727;
    }
  }
  .signupSpan {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    padding-top: 1rem;
    font-weight: 100;
    color: #808080;
    .signupBtn {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;

      color: #111727;
      &:hover {
        color: lightskyblue;
        animation: signup 2s infinite linear;
      }
    }
    @keyframes signup {
      0% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1.1);
      }
    }
  }
`;

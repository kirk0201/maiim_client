import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Input from "../../common/Input";
import LoginButton from "../../common/LoginButton";
import SubTextAndBtn from "../../common/SubTextAndBtn";

interface Iprops {
  onChangeSignModal: () => void;
}
function Signup({ onChangeSignModal }: Iprops) {
  return (
    <>
      <Container>
        <ExitBtn>
          <Image
            onClick={onChangeSignModal}
            width={30}
            height={30}
            src="/arrow/westArrow.svg"
          ></Image>
        </ExitBtn>
        <form>
          <SignupText>회원가입</SignupText>
          <Line />
          <Input placeholder="Email" type="email">
            Email
          </Input>
          <Input placeholder="Password" type="Password">
            password
          </Input>
          <Input placeholder="이름" type="text">
            Name
          </Input>
          <Input placeholder="닉네임" type="text">
            NickName
          </Input>
          <Input placeholder="Birth" type="date">
            Name
          </Input>
          <Input placeholder="text" type="text">
            주소
          </Input>
          <Input placeholder="Phone" type="tel">
            Phone
          </Input>
        </form>
        <LoginButton>Sign up</LoginButton>
        <BottomLine />
        <SubTextAndBtn
          onClick={onChangeSignModal}
          left="이미 계정이 있으신가요?"
          right="Login"
        />
      </Container>
    </>
  );
}
export default Signup;

const Container = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  display: block;
  overflow: auto;
  padding-right: 50px;

  input {
    display: block;
  }
`;
const SignupText = styled.div`
  font-size: 1.5rem;
`;
const Line = styled.div`
  margin: 2vh 0;
  height: 1px;
  background-color: #aaa;
`;
const BottomLine = styled(Line)`
  margin-top: 1rem;
`;
const ExitBtn = styled.div`
  cursor: pointer;
  position: relative;
  text-align: right;
`;

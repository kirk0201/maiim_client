import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../common/Input";
import LoginBtn from "../../common/LoginBtn";
import SubTextAndBtn from "../../common/SubTextAndBtn";
import axios from "axios";

interface Iprops {
  onChangeSignModal: () => void;
  onChangeData: (e: any) => void;
}

function Signup({ onChangeSignModal, onChangeData }: Iprops) {
  const [signData, setSignData] = useState({
    email: "",
    password: "",
    name: "",
    nickName: "",
    birth: "",
    address: "",
    phone: "",
    gender: "",
  });
  const [disabled, setDisabled] = useState(false);

  const onHandleSubmit = async (e: any) => {
    setDisabled(true);
    e.preventDefault();

    // 중복방지를 위한 1초 지연
    await new Promise((el) => setTimeout(el, 1000));
    try {
      const data = await axios.post(`${process.env.LOCALHOST}/users/join`, {
        email: signData.email,
        password: signData.password,
        name: signData.name,
        nickname: signData.nickName,
        birth: signData.birth,
        address: signData.address,
        phone: signData.phone,
        gender: signData.gender,
      });
      console.log("데이터가 전송되었습니다", data);
      onChangeSignModal();
      setDisabled(false);
    } catch (error: any) {
      if (error.response) {
        const errorData = error.response;
        alert(`에러코드[${errorData.status}] : ${errorData.data.message}`);
        console.log("response", error.response);
      } else if (error.request) {
        console.log("request", error.request);
      } else {
        alert("회원가입이 정상적으로 처리되지 않았습니다. 다시 시도해 주세요.");
      }
    }
  };
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

        <SignupText>회원가입</SignupText>
        <Line />
        <form onSubmit={onHandleSubmit}>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            onChangeData={onChangeData}
            required={true}
          >
            Email
          </Input>
          <Input
            name="password"
            placeholder="Password"
            type="Password"
            onChangeData={onChangeData}
            required={true}
          >
            password
          </Input>
          <Input
            name="name"
            placeholder="이름"
            type="text"
            onChangeData={onChangeData}
            required={true}
          >
            Name
          </Input>
          <Input
            name="nickName"
            placeholder="닉네임"
            type="text"
            onChangeData={onChangeData}
            required={true}
          >
            NickName
          </Input>
          <Input
            name="birth"
            placeholder="Birth"
            type="date"
            onChangeData={onChangeData}
            required={true}
          >
            Birth
          </Input>
          <Input
            name="address"
            placeholder="text"
            type="text"
            onChangeData={onChangeData}
            required={true}
          >
            주소
          </Input>
          <Input
            name="phone"
            placeholder="000-0000-0000"
            type="tel"
            onChangeData={onChangeData}
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            required={true}
          >
            Phone
          </Input>
          <CheckBox onChange={onChangeData}>
            <label>
              <input name="gender" type="radio" value={1} required />
              남자
            </label>
            <label>
              <input name="gender" type="radio" value={2} required />
              여자
            </label>
          </CheckBox>
          <LoginBtn>Sign up</LoginBtn>
        </form>
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
const CheckBox = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-evenly;
`;

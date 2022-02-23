import styled from "styled-components";
import Image from "next/image";
import MyBtn from "./MyBtn";
function AccountBtn({ isLoginState, onChangeAccountModal }: any) {
  return (
    <>
      <Container onClick={onChangeAccountModal}>
        <Image width={40} height={40} src="/account.svg"></Image>
        <div>{isLoginState.findUser.name}</div>
      </Container>
    </>
  );
}

export default AccountBtn;

const Container = styled.button`
  position: absolute;
  width: 15%;
  height: 80%;
  right: 5vw;
  top: 1vh;
  border: none;
  background-color: #fafafa;
  &:hover {
    box-shadow: 1px 1px 3px 1px;
    border-radius: 10px;
  }
  &:active {
    transform: scale(0.8);
  }
  div {
    line-height: 1;
    font-size: 0.3rem;
  }
  @media (max-width: 767px) {
    //모바일
    /* width: 10%; */
    /* height: 100%; */
    min-width: 47px;
    max-width: 50px;
    max-height: 70px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    // 테블릿 가로 세로
    width: 6%;
    height: 90%;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    width: 4%;
    height: 80%;
  }
`;

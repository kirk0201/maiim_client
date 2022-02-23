import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface Iprops {
  onChangeAccountModal: () => void;
  accountModalState: boolean;
}
function MyBtn({ onChangeAccountModal, accountModalState }: Iprops) {
  const ref = useRef<HTMLDivElement | null>(null);

  const accountOut = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      console.log("click");
      onChangeAccountModal();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", accountOut);
    return () => {
      document.removeEventListener("mousedown", accountOut);
    };
  }, [accountModalState]);

  return (
    <Container ref={ref}>
      <MyPage>내 정보</MyPage>
      <LogOut>로그아웃</LogOut>
    </Container>
  );
}
export default MyBtn;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 1vh;
  right: 5vw;
  font-size: 0.6em;
  min-width: 60px;
  height: 80%;
  text-align: center;
  &:hover {
    box-shadow: 1px 1px 3px 1px;
    border-radius: 10px;
  }
`;
const MyPage = styled.div`
  display: block;
  padding: 5px 5px;
  margin: 5px 5px;
  background-color: #97b498;
  border-radius: 7px;
  color: white;
`;
const LogOut = styled.div`
  display: block;
  /* width: 8vw; */
  padding: 5px 5px;
  margin: 5px 5px;
  background-color: #97b498;
  border-radius: 7px;
  color: white;
`;

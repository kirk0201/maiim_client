import React from "react";
import styled from "styled-components";

function Input({ type, placeholder, children }: any) {
  return (
    <>
      <Text>
        <div>{children}</div>
        <input type={type} placeholder={placeholder}></input>
      </Text>
    </>
  );
}
export default Input;

const Text = styled.div`
  /* display: flex; */
  position: relative;
  width: 100%;
  margin-top: 2rem;
  font-size: 0.8em;
  div {
    padding-bottom: 5px;
  }
  input {
    border-radius: 0.3rem;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: block;
    border: 1px solid #b8b5b5;
    font-size: 1.3em;
    height: 7vh;
    padding-left: 10px;
    &:focus {
      outline: 2px solid #9aec9d;
    }
  }
`;

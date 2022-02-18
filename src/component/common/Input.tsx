import React from "react";
import styled from "styled-components";
interface Iprops {
  name?: string;
  type: string;
  placeholder: string;
  onChangeData?: (e: any) => void;
  onChangeSignData?: (e: any) => void;
  children: any;
  pattern?: string;
  required?: boolean;
}
function Input({
  name,
  type,
  placeholder,
  onChangeData,
  pattern,
  required,
  children,
  onChangeSignData,
}: Iprops) {
  return (
    <>
      <Text>
        <div>{children}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChangeData || onChangeSignData}
          pattern={pattern}
          required={required}
        ></input>
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

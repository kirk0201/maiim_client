import styled from "styled-components";
import { LayoutProp } from "../layout/main/notice_section/best_product/BestSlide";

function Button({ children }: LayoutProp) {
  console.log(children);

  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  background-color: transparent;
  width: 150px;
  font-size: 18px;
  padding: 10px 20px;
  border: 3px solid black;
  border-radius: 6px;
  font-weight: 800;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: #333333;
    color: white;
    transition: 0.7s;
  }
`;

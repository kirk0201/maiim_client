import styled from "styled-components";
import { LayoutProp } from "../layout/main/notice_section/best_product/BestSlide";

function BannerButton({ children }: LayoutProp) {
  console.log(children);

  return <StyledButton>{children}</StyledButton>;
}

export default BannerButton;

const StyledButton = styled.button`
  position: absolute;
  background-color: transparent;
  width: 150px;
  font-size: 14px;
  padding: 10px 20px;
  color: #808080;
  border: 1px solid #808080;
  border-radius: 6px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: #333333;
    color: white;
    transition: 0.7s;
  }
`;

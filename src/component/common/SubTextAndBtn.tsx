import styled from "styled-components";
interface Iprops {
  left: string;
  right: string;
  onClick?: () => void;
}
function SubTextAndBtn({ left, right, ...children }: Iprops) {
  return (
    <Container>
      {left} <span {...children}>{right}</span>
    </Container>
  );
}
export default SubTextAndBtn;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: #aaaaaa;
  span {
    color: #111727b5;
    font-weight: 600;
    cursor: pointer;
    &:active {
      transition: all 0.3s;
      transform: scale(0.9);
    }
  }
`;

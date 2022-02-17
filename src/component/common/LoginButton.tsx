import styled from "styled-components";

function LoginButton({ children }: any) {
  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  );
}
export default LoginButton;

const Container = styled.div`
  width: 100%;
  padding-top: 1.5rem;
`;
const Button = styled.button`
  border: none;
  width: 100%;
  height: 2rem;
  background-color: #97b498;
  color: white;
  &:hover {
    background-color: #7a917a;
  }
`;

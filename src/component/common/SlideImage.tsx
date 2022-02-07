import styled from "styled-components";
import Image from "next/image";

interface ImageProps {
  src: string;
  width: string;
  height: string;
}

function SlideImage({ src, width, height }: ImageProps) {
  return (
    <StyledSlide>
      <Image src={src} width={width} height={height}></Image>
    </StyledSlide>
  );
}
export default SlideImage;

const StyledSlide = styled.div`
  display: flex;
  justify-content: center;
`;

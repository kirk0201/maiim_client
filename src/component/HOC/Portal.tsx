import { useState, useEffect, useRef, Children, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: any;
}
// const Portal: React.FC<Props> = ({ children }) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [mounted, setMounted] = useState(false);

//   useLayoutEffect(() => {
//     ref.current = document.querySelector("overlay-root");

//     setMounted(true);

//     return () => setMounted(false);
//   }, []);
//   console.log(ref.current, "ref.current?");
//   console.log(mounted, "mounted");

//   return (
//     <>{mounted && ref.current ? createPortal(children, ref.current) : null}</>
//   );
// };
// export default Portal;

const Portal: React.FC<Props> = ({ children }) => {
  const el = document.createElement("div");
  const wrapper: React.RefObject<HTMLElement> = useRef(el);

  useEffect(() => {
    const current = wrapper.current as HTMLElement;
    current.setAttribute("id", "overlay");
    document.body.appendChild(current);

    return () => {
      document.body.removeChild(current);
    };
  }, []);

  if (!wrapper.current) {
    return <>{null}</>;
  }
  return createPortal(children, wrapper.current);
};

export default Portal;

import { useState, useEffect, useRef, Ref } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: any;
  selector: string;
}
const Portal: React.FC<Props> = ({ children, selector }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);

    return () => setMounted(false);
  }, [selector]);
  return mounted ? createPortal(children, ref.current) : null;
};
export default Portal;

import React from "react";
import { useMediaQuery } from "react-responsive";

const DesktopFC: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  return <React.Fragment>{isDesktop && children}</React.Fragment>;
};

const MobileFC: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const TabletFC: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    query: `(min-width:768px and , max-width: 1199px)`,
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>;
};

export { DesktopFC, MobileFC, TabletFC };

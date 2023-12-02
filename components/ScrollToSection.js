// components/ScrollToSection.tsx

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Element, scroller } from "react-scroll";

const ScrollToSection = ({ children }) => {
  const param = useParams();

  useEffect(() => {
    if (param) {
      scroller.scrollTo(param, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [param]);

  return <>{children}</>;
};

export default ScrollToSection;

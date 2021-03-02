import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <image
      width="100%"
      height="auto"
      href={isDark ? "/images/egg/LogoTextNewDark.png" : "/images/egg/LogoTextNewWhite.png"}
    />
  );
};

export default Logo;

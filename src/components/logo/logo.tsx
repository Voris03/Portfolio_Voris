import React from "react";
import Icon from "../Icon/icon";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";


const Logo: React.FC = () => {
  return (
    <StyledLogo onClick={()=>{scroll.scrollToTop()}}>
      <Icon iconId={"logo"} viewBox={"0 0 54 54"}/>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`

`

export default Logo;

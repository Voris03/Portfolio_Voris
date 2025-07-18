import styled from "styled-components";
import theme from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  letter-spacing: 3px;
`;

const SocialItem = styled.li``;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.5;
`;

export const S = {
  Footer,
  Name,
  SocialItem,
  SocialList,
  SocialLink,
  Copyright,
};

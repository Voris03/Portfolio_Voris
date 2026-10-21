import styled from "styled-components";
import theme from "../../styles/Theme";
import { font } from "../../styles/Common";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: rgba(31, 31, 32, 0.85);
  backdrop-filter: blur(4px);
`;

const Dialog = styled.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  padding: 50px 40px 40px;
  text-align: center;
  background-color: ${theme.colors.secondBg};
  border-top: 3px solid ${theme.colors.accent};

  @media ${theme.media.mobile} {
    padding: 50px 20px 30px;
  }
`;

const Label = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  padding: 4px 10px 2px;
  font-family: ${theme.fonts.title};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #ffffff1a;
`;

const Title = styled.h3`
  ${font({
    family: theme.fonts.title,
    weight: 700,
    Fmax: 22,
    Fmin: 18,
  })}
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin-bottom: 30px;
  color: #ffffffcc;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;

  span,
  span::before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 5px;
    top: 14px;
    transform: rotate(45deg);
    transition: ${theme.animations.transition};
  }

  span::before {
    left: 0;
    top: 0;
    transform: rotate(-90deg);
  }

  &:hover span,
  &:hover span::before {
    background-color: ${theme.colors.accent};
  }
`;

export const S = {
  Overlay,
  Dialog,
  Label,
  Title,
  Text,
  CloseButton,
};

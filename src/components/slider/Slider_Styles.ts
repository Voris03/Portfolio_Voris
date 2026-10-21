import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import theme from "../../styles/Theme";
import { font } from "../../styles/Common";

const Slider = styled.div`
  max-width: 760px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// fixed min-height keeps the controls from jumping between short and long quotes
const Viewport = styled.div`
  width: 100%;
  min-height: 250px;
  overflow: hidden;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }

  @media ${theme.media.mobile} {
    min-height: 330px;
  }
`;

const Slide = styled(motion.div)`
  text-align: center;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const Text = styled.p`
  ${font({ weight: 300, lineHeight: 1.6, Fmax: 21, Fmin: 17 })}
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin: 32px 0 40px;

  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    margin-bottom: 18px;
    background-color: ${theme.colors.accent};
  }
`;

const Name = styled.span`
  font-family: ${theme.fonts.title};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Role = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  color: #ffffff80;
`;

// Controls: ‹ 01 / 04 ›

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const Arrow = styled.button<{ $next?: boolean }>`
  width: 36px;
  height: 36px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 9px;
    border-left: 1px solid ${theme.colors.font};
    border-bottom: 1px solid ${theme.colors.font};
    transform: translate(-30%, -50%) rotate(45deg);
    transition: ${theme.animations.transition};

    ${(props) =>
      props.$next &&
      css`
        transform: translate(-70%, -50%) rotate(-135deg);
      `}
  }

  &:hover::before {
    border-color: ${theme.colors.accent};
  }
`;

const Counter = styled.span`
  min-width: 70px;
  text-align: center;
  font-family: ${theme.fonts.title};
  font-size: 14px;
  letter-spacing: 3px;
  color: #ffffff60;

  span {
    color: ${theme.colors.font};
  }
`;

const Progress = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 20px;
`;

// thin segments instead of dots; the hit area is taller than the line
const Bar = styled.button<{ $active?: boolean }>`
  width: 32px;
  height: 14px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background-color: #ffffff33;
    transition: ${theme.animations.transition};

    ${(props) =>
      props.$active &&
      css`
        background-color: ${theme.colors.accent};
      `}
  }

  &:hover::before {
    background-color: ${theme.colors.accent};
  }
`;

export const S = {
  Slider,
  Viewport,
  Slide,
  Text,
  Author,
  Name,
  Role,
  Controls,
  Arrow,
  Counter,
  Progress,
  Bar,
};

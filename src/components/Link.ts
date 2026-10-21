import styled, { css } from "styled-components";
import theme from "../styles/Theme";

// $active is a transient prop: styled-components does not pass it to the DOM
export const Link = styled.a<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    bottom: 5px;
    z-index: -1;
    height: 0;
    transition: ${theme.animations.transition};

    ${(props) =>
      props.$active &&
      css`
        height: 10px;
      `}
  }
`;

import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";
import theme from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";

// Works

const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
  }
`;

// flex item animated by framer-motion when the filter changes
const WorkMotion = styled(motion.div)`
  width: calc(50% - 15px);
  align-self: stretch;

  @media ${theme.media.tablet} {
    width: 100%;
  }
`;

// Work

const Work = styled.div`
  text-align: left;
  background-color: ${theme.colors.secondBg};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${Link} {
    padding: 10px 0;
  }
`;

const Description = styled.div`
  padding: 25px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageWrapper = styled.a`
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover,
  &:focus-visible {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  object-position: top;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 12px;
`;

const Stack = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${theme.colors.accent};
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;
`;

export const S = {
  Works,
  WorkMotion,
  Work,
  Description,
  ImageWrapper,
  Image,
  Title,
  Text,
  Stack,
  Links,
};

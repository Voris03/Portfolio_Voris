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

// Work

const Work = styled(motion.div)`
  text-align: left;
  background-color: ${theme.colors.secondBg};
  width: 330px;
  max-width: 540px;
  width: 100%;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }

    a {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  a {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: ${theme.animations.transition};
    background: transparent;
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    a {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

export const S = {
  Works,
  Work,
  Description,
  ImageWrapper,
  Image,
  Title,
  Text,
};

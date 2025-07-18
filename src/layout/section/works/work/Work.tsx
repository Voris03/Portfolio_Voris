import React from "react";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import { S } from "../Works_Styles";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  codeLink?: string;
  demoLink?: string;
};

const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <Link href={props.demoLink} target="_blank" rel="noopener noreferrer">
        <S.ImageWrapper>
          <S.Image src={props.src} alt="" />
          <Button>view project</Button>
        </S.ImageWrapper>
      </Link>

      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href={props.demoLink}>
          demo
        </Link>
        <Link href={props.codeLink}>code</Link>
      </S.Description>
    </S.Work>
  );
};

export default Work;

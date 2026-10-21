import React from "react";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import { S } from "../Works_Styles";
import { useLanguage } from "../../../../i18n/LanguageContext";

type WorkPropsType = {
  title: string;
  text: string;
  stack: string;
  src: string;
  demoLink?: string;
  onCodeClick: () => void;
  onDemoClick: () => void;
};

const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  const { t } = useLanguage();

  // without a public demo the image and the demo button open a modal
  const demoProps = props.demoLink
    ? { href: props.demoLink, target: "_blank", rel: "noopener noreferrer" }
    : { as: "button" as const, type: "button" as const, onClick: props.onDemoClick };

  return (
    <S.Work>
      <S.ImageWrapper {...demoProps} aria-label={`${props.title}: ${t.works.view}`}>
        <S.Image src={props.src} alt={props.title} loading={"lazy"} />
        <Button as={"span"}>{t.works.view}</Button>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <S.Stack>{props.stack}</S.Stack>
        <S.Links>
          <Link $active {...demoProps}>
            {t.works.demo}
          </Link>
          <Link as={"button"} type={"button"} onClick={props.onCodeClick}>
            {t.works.code}
          </Link>
        </S.Links>
      </S.Description>
    </S.Work>
  );
};

export default Work;

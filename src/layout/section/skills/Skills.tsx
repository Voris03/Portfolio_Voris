import React from "react";
import FlexWrapper from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import Skill from "./skill/Skill";
import Container from "../../../components/Container";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

const skillData = [
  {
    iconId: "html",
    title: "HTML5",
    description:
      "Разработка структурированной и семантической разметки с использованием HTML5. Обеспечение соответствия современным веб-стандартам для создания адаптивных и эффективных веб-сайтов.",
  },
  {
    iconId: "css",
    title: "CSS3",
    description:
      "Опыт работы с CSS3 для создания адаптивных и визуально привлекательных интерфейсов. Использование flexbox, grid и анимаций для улучшения пользовательского опыта.",
  },
  {
    iconId: "react",
    title: "REACT",
    description:
      "Разработка интерактивных веб-приложений с использованием React. Применение современных подходов, таких как хуки и компоненты высшего порядка, для создания гибкой архитектуры приложений.",
  },
  {
    iconId: "typescript",
    title: "TYPESCRIPT",
    description:
      "Написание типобезопасного кода с использованием TypeScript для повышения качества и стабильности приложений. Использование типов для создания надежных и масштабируемых решений.",
  },
  {
    iconId: "styled-components",
    title: "STYLED COMPONENTS",
    description:
      "Стилизация React-компонентов с помощью библиотеки Styled Components для создания динамичных и удобных в поддержке пользовательских интерфейсов.",
  },
  {
    iconId: "figma",
    title: "WEB DESIGN",
    description:
      "Проектирование и разработка интуитивно понятных пользовательских интерфейсов. Применение современных инструментов и принципов дизайна для улучшения визуальной привлекательности и удобства использования веб-продуктов.",
  },
];

const Skills: React.FC = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify="space-between">
          {skillData.map((s, index) => {
            return (
              <Fade>
                <Skill
                  iconId={s.iconId}
                  title={s.title}
                  description={s.description}
                  key={index}
                />
              </Fade>
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

export default Skills;

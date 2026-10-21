import React from "react";
import FlexWrapper from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import Skill from "./skill/Skill";
import Container from "../../../components/Container";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";
import { Localized, useLanguage } from "../../../i18n/LanguageContext";

const skillData: Array<{
  iconId: string;
  title: Localized;
  description: Localized;
}> = [
  {
    iconId: "react",
    title: { en: "React & Next.js", ru: "React и Next.js" },
    description: {
      en: "My main tools. I've used them for everything from a Telegram mini app to the trading interface of a fintech platform: SSR, routing and components that are easy to reuse.",
      ru: "Мой основной инструмент. На них я делал всё — от Telegram-приложения до торгового интерфейса финтех-платформы: SSR, роутинг и компоненты, которые удобно переиспользовать.",
    },
  },
  {
    iconId: "typescript",
    title: { en: "TypeScript", ru: "TypeScript" },
    description: {
      en: "I write everything in TypeScript. API clients are generated from OpenAPI, so if the backend renames a field, I find out at build time — not from a bug report.",
      ru: "Пишу на TypeScript. API-клиенты генерирую из OpenAPI: если бэкенд переименовал поле, я узнаю об этом при сборке, а не из баг-репорта.",
    },
  },
  {
    iconId: "data",
    title: { en: "State & Data", ru: "Состояние и данные" },
    description: {
      en: "TanStack Query, Effector or Redux — whatever fits the project. I've wired up WebSockets for live prices, order statuses and balances that update without a page reload.",
      ru: "TanStack Query, Effector или Redux — что подходит проекту. Подключал WebSocket для живых котировок, статусов ордеров и баланса, которые обновляются без перезагрузки.",
    },
  },
  {
    iconId: "css",
    title: { en: "UI & Styling", ru: "UI и стили" },
    description: {
      en: "I turn mockups into responsive layouts that look right in every browser. Tailwind, SCSS, Mantine, Chakra UI or Styled Components — whatever the team already uses.",
      ru: "Превращаю макеты в адаптивную вёрстку, которая одинаково выглядит во всех браузерах. Tailwind, SCSS, Mantine, Chakra UI или Styled Components — что уже принято в команде.",
    },
  },
  {
    iconId: "layers",
    title: { en: "Architecture", ru: "Архитектура" },
    description: {
      en: "I like code that still makes sense half a year later, so I use Feature-Sliced Design and build interfaces from small reusable pieces. A clear structure saves the whole team time.",
      ru: "Люблю код, в котором легко разобраться и через полгода, поэтому использую Feature-Sliced Design и собираю интерфейс из небольших переиспользуемых частей. Понятная структура экономит время всей команде.",
    },
  },
  {
    iconId: "testing",
    title: { en: "Testing & Tools", ru: "Тесты и инструменты" },
    description: {
      en: "I write tests with Vitest, Jest and React Testing Library so that refactoring isn't scary. Git, Docker and CI/CD are just part of an ordinary working day.",
      ru: "Пишу тесты на Vitest, Jest и React Testing Library, чтобы рефакторинг не пугал. Git, Docker и CI/CD — обычная часть рабочего дня.",
    },
  },
  {
    iconId: "server",
    title: { en: "Backend with Go", ru: "Backend на Go" },
    description: {
      en: "On my current project I also write Go services: REST, gRPC, PostgreSQL, Redis, Kafka. Tuning the SQL queries there cut the event catalog's load time from 16 seconds to 1.",
      ru: "На текущем проекте пишу и сервисы на Go: REST, gRPC, PostgreSQL, Redis, Kafka. Оптимизация SQL-запросов там сократила загрузку каталога событий с 16 секунд до 1.",
    },
  },
  {
    iconId: "ai",
    title: { en: "AI-assisted development", ru: "Разработка с AI" },
    description: {
      en: "AI agents are part of how I work: Claude Code, Codex and MCP help with code review, refactoring, tests and docs. I review everything they write — the final call is mine.",
      ru: "AI-агенты — часть моей работы: Claude Code, Codex и MCP помогают с ревью, рефакторингом, тестами и документацией. Всё, что они пишут, я проверяю — решение остаётся за мной.",
    },
  },
  {
    iconId: "figma",
    title: { en: "Web Design", ru: "Веб-дизайн" },
    description: {
      en: "I work side by side with designers and care about the small things — spacing, states, hover effects — that make an interface feel finished.",
      ru: "Работаю бок о бок с дизайнерами и обращаю внимание на мелочи — отступы, состояния, ховеры, — из-за которых интерфейс выглядит законченным.",
    },
  },
];

const Skills: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>{t.skills.title}</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify="space-between">
          {skillData.map((s) => {
            return (
              <Fade key={s.iconId}>
                <Skill
                  iconId={s.iconId}
                  title={s.title[lang]}
                  description={s.description[lang]}
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

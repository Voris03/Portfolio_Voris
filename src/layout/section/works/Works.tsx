import React, { useCallback, useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import Modal from "../../../components/modal/Modal";
import guessPredict from "../../../assets/images/guesspredict.webp";
import skylineStroi from "../../../assets/images/skylinestroi.webp";
import arctech from "../../../assets/images/arctech.webp";
import belImport from "../../../assets/images/belimport.webp";
import goGift from "../../../assets/images/goGift.jpeg";
import statusEst from "../../../assets/images/status_estate.jpg";
import cleanMW from "../../../assets/images/cleanmywin.webp";
import uksRechica from "../../../assets/images/uksrechica.webp";
import Work from "./work/Work";
import Container from "../../../components/Container";
import TabMenu, { TabsStatusType } from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";
import { AnimatePresence } from "framer-motion";
import { Localized, useLanguage } from "../../../i18n/LanguageContext";

const tabsStatuses: Array<TabsStatusType> = ["all", "web", "site", "cms"];

type WorkType = {
  id: number;
  title: string;
  src: string;
  text: Localized;
  stack: string;
  type: Exclude<TabsStatusType, "all">;
  // no demoLink — the demo button opens the "demo is not available" modal
  demoLink?: string;
};

// Source code is never linked: the code button always opens the NDA modal
const worksData: Array<WorkType> = [
  {
    id: 7,
    title: "GuessPredict",
    src: guessPredict,
    text: {
      en: "A prediction market where people bet on sports, crypto and world events. I worked on the event catalog, live price charts, trading and the user's portfolio — all updating in real time.",
      ru: "Рынок предсказаний: ставки на спорт, крипту и мировые события. Я делал каталог событий, живые графики цен, торговлю и портфель пользователя — всё обновляется в реальном времени.",
    },
    stack: "Next.js · TypeScript · TanStack Query · Effector · Mantine · WebSockets · Go",
    type: "web",
    demoLink: "https://guesspredict.com/",
  },
  {
    id: 8,
    title: "SkyLineStroi",
    src: skylineStroi,
    text: {
      en: "Website for a Minsk construction company: roofing, facades, fences and terraces. Visitors can look through real projects, play with a 3D configurator and send a request in one step.",
      ru: "Сайт строительной компании из Минска: кровля, фасады, заборы, террасы. Можно посмотреть реальные объекты, покрутить 3D-конфигуратор и оставить заявку в один шаг.",
    },
    stack: "Next.js · React · Responsive layout",
    type: "site",
    demoLink: "https://skylinestroi.by/",
  },
  {
    id: 9,
    title: "Arctech",
    src: arctech,
    text: {
      en: "Online catalog of industrial refrigeration equipment and CAREL automation for a Belarusian supplier: search, cart, knowledge base and a light/dark theme.",
      ru: "Онлайн-каталог промышленного холодильного оборудования и автоматики CAREL для белорусского поставщика: поиск, корзина, база знаний и светлая/тёмная тема.",
    },
    stack: "Next.js · React · Responsive layout",
    type: "web",
    demoLink: "https://arctech.by/",
  },
  {
    id: 6,
    title: "BelImport",
    src: belImport,
    text: {
      en: "Website for a company that supplies spare parts and repairs heavy machinery. The main goal was simple: make it easy for a visitor to leave a request.",
      ru: "Сайт компании, которая поставляет запчасти и ремонтирует спецтехнику. Главная задача была простой — чтобы посетителю было легко оставить заявку.",
    },
    stack: "Next.js · Chakra UI",
    type: "site",
    demoLink: "https://belimport-front.vercel.app/",
  },
  {
    id: 5,
    title: "GoGift",
    src: goGift,
    text: {
      en: "A Telegram mini app for a gift bot. I built the interface, connected it to the backend API and covered the key components with tests.",
      ru: "Telegram-приложение для бота подарков. Сделал интерфейс, подключил backend API и покрыл ключевые компоненты тестами.",
    },
    stack: "Next.js · Chakra UI · Telegram Mini Apps",
    type: "web",
    demoLink: "https://t.me/gogift_official_bot",
  },
  {
    id: 3,
    title: "Nc Invest",
    src: statusEst,
    text: {
      en: "One-page website about real estate in Northern Cyprus. Plain HTML, CSS and JavaScript, with a slider and a contact form.",
      ru: "Одностраничный сайт о недвижимости на Северном Кипре. Чистые HTML, CSS и JavaScript, слайдер и форма обратной связи.",
    },
    stack: "HTML · CSS · JavaScript",
    type: "site",
    demoLink: "https://voris03.github.io/Status_Estate/",
  },
  {
    id: 4,
    title: "Cleanmywin",
    src: cleanMW,
    text: {
      en: "Single-page app for selling cars: loads fast, simple to navigate, nothing extra.",
      ru: "Одностраничное приложение для продажи автомобилей: быстро грузится, просто устроено, ничего лишнего.",
    },
    stack: "Next.js · Chakra UI",
    type: "web",
  },
  {
    id: 10,
    title: "UKS Rechica",
    src: uksRechica,
    text: {
      en: "I maintain the website of a capital construction department on Joomla: update content, add pages and make sure everything keeps working.",
      ru: "Веду сайт управления капитального строительства на Joomla: обновляю контент, добавляю страницы и слежу, чтобы всё работало.",
    },
    stack: "Joomla · CMS · HTML · CSS",
    type: "cms",
    demoLink: "https://uksrechica.by/",
  },
];

type ModalStateType = {
  kind: "code" | "demo";
  project: string;
} | null;

const Works: React.FC = () => {
  const { lang, t } = useLanguage();
  const [currentFilterStatus, setCurrentFilterStatus] =
    useState<TabsStatusType>("all");
  const [modal, setModal] = useState<ModalStateType>(null);

  const filteredWorks =
    currentFilterStatus === "all"
      ? worksData
      : worksData.filter((work) => work.type === currentFilterStatus);

  const tabsItems = tabsStatuses.map((status) => ({
    status,
    title: t.works.tabs[status],
  }));

  const closeModal = useCallback(() => setModal(null), []);

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>{t.works.title}</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={setCurrentFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />

        <FlexWrapper justify="space-between" align={"flex-start"} wrap={"wrap"}>
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <S.WorkMotion
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work
                    title={w.title}
                    src={w.src}
                    text={w.text[lang]}
                    stack={w.stack}
                    demoLink={w.demoLink}
                    onCodeClick={() => setModal({ kind: "code", project: w.title })}
                    onDemoClick={() => setModal({ kind: "demo", project: w.title })}
                  />
                </S.WorkMotion>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>

      <Modal
        isOpen={modal !== null}
        label={modal?.kind === "code" ? `${modal.project} · ${t.works.nda}` : modal?.project}
        title={modal?.kind === "code" ? t.modal.codeTitle : t.modal.demoTitle}
        text={modal?.kind === "code" ? t.modal.codeText : t.modal.demoText}
        onClose={closeModal}
      />
    </S.Works>
  );
};

export default Works;

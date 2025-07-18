import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import socialImg from "../../../assets/images/project1.webp";
import timerImg from "../../../assets/images/project2.webp";
import statusEst from "../../../assets/images/status_estate.jpg"
import CleanMW from "../../../assets/images/cleanmywin.webp"
import Work from "./work/Work";
import Container from "../../../components/Container";
import TabMenu, { TabsStatusType } from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{
  status: TabsStatusType;
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "SPA",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 1,
  },
  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "react",
    id: 2,
  },
  {
    title: "Nc Invest",
    src: statusEst,
    text:"Адаптивный одностраничный сайт для продвижения недвижимости на Северном Кипре. Проект выполнен с использованием HTML, CSS и JavaScript, включает интерактивные элементы, такие как слайдер и форма обратной связи, обеспечивая удобство использования и современный дизайн.",
    type: "landing",
    id: 3,
    codeLink: "https://github.com/Voris03/Status_Estate",
    demoLink: "https://voris03.github.io/Status_Estate/",
  },
  {
    title: "Cleanmywin",
    src: CleanMW,
    text:"Одностраничное веб-приложение для продажи автомобилей, используя Next.js и библиотеку Chakra UI. Проект относится к категории SPA (Single Page Application), обеспечивая быструю загрузку, удобную навигацию и современный пользовательский интерфейс.",
    type: "spa",
    id: 4,
    codeLink: "https://github.com/Voris03/Cleanmyvin",
    demoLink: "https://voris03.github.io/Status_Estate/",
  },
];

const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }

  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }

  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />

        <FlexWrapper justify="space-between" align={"flex-start"} wrap={"wrap"}>
          <AnimatePresence>
            {filteredWorks.map((w, index) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
    
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work title={w.title} src={w.src} text={w.text} key={w.id} codeLink={w.codeLink} demoLink={w.demoLink}/>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};

export default Works;

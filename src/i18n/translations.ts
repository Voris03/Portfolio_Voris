// UI strings. Content lists (skills, works, testimonials) keep their
// texts next to the data as { en, ru } — see Localized in LanguageContext.

const en = {
  meta: {
    title: "Vladimir Vidus — Frontend Developer",
  },
  menu: {
    home: "Home",
    skills: "Skills",
    works: "Works",
    testimony: "Testimony",
    contact: "Contact",
  },
  langSwitch: {
    label: "RU",
    ariaLabel: "Switch language to Russian",
  },
  main: {
    greeting: "Hi There!",
    iAm: "I am",
    name: "Vladimir Vidus",
    role: "Frontend Developer",
    typewriter: [
      "Frontend Developer.",
      "React · Next.js · TypeScript.",
      "Backend experience with Go.",
    ],
    slogan: ["Turning ideas", "into fast,", "clean interfaces"],
    sloganCaption: "// code that works",
  },
  skills: {
    title: "My Skills",
  },
  works: {
    title: "My Works",
    tabs: {
      all: "All",
      web: "Web Apps",
      site: "Websites",
      cms: "CMS",
    },
    view: "view project",
    demo: "demo",
    code: "code",
    nda: "NDA",
  },
  modal: {
    close: "Close",
    codeTitle: "Source code is under NDA",
    codeText:
      "The code of commercial projects belongs to clients and is covered by non-disclosure agreements, so I don't publish it. I'm happy to walk through the architecture and my part of the work in an interview.",
    demoTitle: "Demo is not available",
    demoText:
      "This project has no public version right now. I can show it and talk about the implementation in an interview.",
    ok: "Got it",
  },
  testimony: {
    title: "Testimony",
    prev: "Previous testimonial",
    next: "Next testimonial",
    goTo: "Go to testimonial",
  },
  contact: {
    title: "Contact",
    name: "name",
    email: "email",
    subject: "subject",
    message: "message",
    send: "Send message",
  },
  slogan: {
    title: "I Am Available For Freelance",
    hire: "Hire me",
  },
  footer: {
    name: "Vladimir",
    rights: "Vladimir Vidus, All Rights Reserved.",
  },
};

export type TranslationsType = typeof en;

const ru: TranslationsType = {
  meta: {
    title: "Владимир Видус — Frontend-разработчик",
  },
  menu: {
    home: "Главная",
    skills: "Навыки",
    works: "Работы",
    testimony: "Отзывы",
    contact: "Контакты",
  },
  langSwitch: {
    label: "EN",
    ariaLabel: "Переключить язык на английский",
  },
  main: {
    greeting: "Привет!",
    iAm: "Я",
    name: "Владимир Видус",
    role: "Frontend-разработчик",
    typewriter: [
      "Frontend-разработчик.",
      "React · Next.js · TypeScript.",
      "Опыт backend на Go.",
    ],
    slogan: ["Превращаю идеи", "в быстрые,", "чистые интерфейсы"],
    sloganCaption: "// код, который работает",
  },
  skills: {
    title: "Мои навыки",
  },
  works: {
    title: "Мои работы",
    tabs: {
      all: "Все",
      web: "Веб-приложения",
      site: "Сайты",
      cms: "CMS",
    },
    view: "смотреть проект",
    demo: "демо",
    code: "код",
    nda: "NDA",
  },
  modal: {
    close: "Закрыть",
    codeTitle: "Исходный код под NDA",
    codeText:
      "Код коммерческих проектов принадлежит заказчикам и закрыт соглашениями о неразглашении, поэтому я его не публикую. На собеседовании могу подробно рассказать об архитектуре и своей части работы.",
    demoTitle: "Демо недоступно",
    demoText:
      "Сейчас у проекта нет публичной версии. Могу показать его и рассказать о реализации на собеседовании.",
    ok: "Понятно",
  },
  testimony: {
    title: "Отзывы",
    prev: "Предыдущий отзыв",
    next: "Следующий отзыв",
    goTo: "Перейти к отзыву",
  },
  contact: {
    title: "Контакты",
    name: "имя",
    email: "email",
    subject: "тема",
    message: "сообщение",
    send: "Отправить",
  },
  slogan: {
    title: "Открыт для фриланса",
    hire: "Нанять меня",
  },
  footer: {
    name: "Владимир",
    rights: "Владимир Видус. Все права защищены.",
  },
};

export const translations = { en, ru };

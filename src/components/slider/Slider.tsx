import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { S } from "./Slider_Styles";
import { Localized, useLanguage } from "../../i18n/LanguageContext";

type TestimonialType = {
  text: Localized;
  userName: Localized;
  role?: Localized;
};

const testimonials: Array<TestimonialType> = [
  {
    text: {
      en: "As his team lead, I could hand Vladimir a feature and not check on every step. He breaks the task down himself, flags risks early and isn't shy to say when something in the spec doesn't add up. That's exactly what you want from a frontend developer.",
      ru: "Как тимлид я мог отдать Владимиру фичу и не контролировать каждый шаг. Он сам разбивает задачу, заранее говорит о рисках и не стесняется сказать, если в ТЗ что-то не сходится. Именно этого ждёшь от фронтенд-разработчика.",
    },
    userName: { en: "Sergey Gardeychik", ru: "Сергей Гардейчик" },
    role: { en: "Team Lead", ru: "Тимлид" },
  },
  {
    text: {
      en: "Vladimir picks things up fast. Give him a task he's never done before, and a couple of days later he's already suggesting how to do it better. Easy to work with, and he's never afraid to ask questions.",
      ru: "Владимир очень быстро вникает. Даёшь задачу, с которой он раньше не сталкивался, — через пару дней он уже предлагает, как сделать лучше. С ним легко работать, и он не стесняется задавать вопросы.",
    },
    userName: { en: "Denis Muraveiko", ru: "Денис Муравейко" },
  },
  {
    text: {
      en: "Working with Vladimir is simply pleasant. He's calm, keeps his word on deadlines and doesn't leave things half-done. Once he's taken a task, you can stop worrying about it.",
      ru: "С Владимиром просто приятно работать. Спокойный, держит слово по срокам и не бросает задачи на полпути. Если он взял задачу, о ней можно не волноваться.",
    },
    userName: { en: "Andrei Knyazhishche", ru: "Андрей Княжище" },
  },
  {
    text: {
      en: "What I like about Vladimir is that he thinks before he codes. He'll ask why a feature is needed, look for a simpler way and only then start writing. The result is usually cleaner than you expect.",
      ru: "Мне нравится, что Владимир сначала думает, а потом пишет код. Спросит, зачем нужна фича, поищет путь попроще и только потом садится за работу. Результат обычно аккуратнее, чем ждёшь.",
    },
    userName: { en: "Maxim Kalinin", ru: "Максим Калинин" },
  },
];

const AUTOPLAY_INTERVAL = 8000;
const SWIPE_DISTANCE = 60;

const slideVariants = {
  enter: (direction: number) => ({ x: direction * 40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction * -40, opacity: 0 }),
};

const formatNumber = (n: number) => String(n).padStart(2, "0");

const Slider = () => {
  const { lang, t } = useLanguage();
  const count = testimonials.length;
  // direction: 1 — forward, -1 — back; drives the slide-in side
  const [[index, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (step: number) => {
      setSlide(([current]) => [(current + step + count) % count, step]);
    },
    [count]
  );

  const goTo = (target: number) => {
    setSlide(([current]) => [target, target > current ? 1 : -1]);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => paginate(1), AUTOPLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [index, isPaused, paginate]);

  const current = testimonials[index];

  return (
    <S.Slider
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") paginate(-1);
        if (e.key === "ArrowRight") paginate(1);
      }}
    >
      <S.Viewport>
        {/* old and new slides share one grid cell and cross-fade, so fast
            clicks never queue up animations */}
        <AnimatePresence initial={false} custom={direction}>
          <S.Slide
            key={index}
            custom={direction}
            variants={slideVariants}
            initial={"enter"}
            animate={"center"}
            exit={"exit"}
            transition={{ duration: 0.35, ease: "easeOut" }}
            drag={"x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_DISTANCE) paginate(1);
              if (info.offset.x > SWIPE_DISTANCE) paginate(-1);
            }}
          >
            <S.Text>{current.text[lang]}</S.Text>
            <S.Author>
              <S.Name>{current.userName[lang]}</S.Name>
              {current.role && <S.Role>{current.role[lang]}</S.Role>}
            </S.Author>
          </S.Slide>
        </AnimatePresence>
      </S.Viewport>

      <S.Controls>
        <S.Arrow
          type={"button"}
          aria-label={t.testimony.prev}
          onClick={() => paginate(-1)}
        />

        <S.Counter aria-live={"polite"}>
          <span>{formatNumber(index + 1)}</span> / {formatNumber(count)}
        </S.Counter>

        <S.Arrow
          $next
          type={"button"}
          aria-label={t.testimony.next}
          onClick={() => paginate(1)}
        />
      </S.Controls>

      <S.Progress>
        {testimonials.map((item, i) => (
          <S.Bar
            key={item.userName.en}
            type={"button"}
            $active={i === index}
            aria-label={`${t.testimony.goTo} ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </S.Progress>
    </S.Slider>
  );
};

export default Slider;

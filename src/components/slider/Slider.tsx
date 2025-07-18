import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/slider.css";
import { S } from "./Slider_Styles";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    text={
      "Vladimir is a quick learner with strong problem-solving skills and attention to detail. He consistently showed initiative and was a great team player with excellent communication skills. His technical proficiency made him a valuable asset to our team."
    }
    userName={"Denis Muraveiko"}
  />,
  <Slide
    text={
      "Working with Vladimir was a pleasure. His enthusiasm for learning and positive attitude helped foster great teamwork. He’s skilled, dependable, and always delivers high-quality work. He would be an excellent addition to any team."
    }
    userName={"Andrei Knyazhishche"}
  />,
  <Slide
    text={
      "Vladimir is a talented and driven individual with a keen interest in technology. He approaches tasks with creativity and analytical thinking, always delivering excellent results. I’m confident he will excel in any environment he joins."
    }
    userName={"Maxim Kalinin"}
  />,
];

const Slider = () => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay={true}
      animationDuration={1000}
      autoPlayInterval={5000}
    />
  </S.Slider>
);

export default Slider;

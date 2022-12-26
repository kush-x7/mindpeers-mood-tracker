import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import emojisList from "../../assets";
import "./emojiSelector.css";

interface EmojiSelectorProps {
  setDisplayMood: (args: string) => void;
  setFeelingsList: (args: Array<{ id: number; name: string }>) => void;
  setEmojiBgColor: (args: string) => void;
}

const EmojiSelector = ({
  setDisplayMood,
  setFeelingsList,
  setEmojiBgColor,
}: EmojiSelectorProps) => {
  const activeEmojiIndex = 0;

  // First time calling this effect the update mood and feeling data according to the initial emoji
  useEffect(() => {
    setDisplayMood(emojisList[activeEmojiIndex].name);
    setFeelingsList(emojisList[activeEmojiIndex].feelingsList);
    setEmojiBgColor(emojisList[activeEmojiIndex].bgColor);
  }, []);

  return (
    <Swiper
      style={{ overflow: "visible", overflowX: "clip" }}
      className="swiper-container"
      centeredSlides={true}
      spaceBetween={10}
      slidesPerView={3}
      initialSlide={activeEmojiIndex}
      onSlideChange={(swiper: any) => {
        // In the start reset the scale of all slides to 1
        swiper.slides.forEach((slide: any) => {
          slide.style.transform = "scale(0.8)";
        });

        // set the scale of the active slide to 1.25
        swiper.slides[swiper.activeIndex].style.transform = "scale(1.25)";

        const displayMood = emojisList[swiper.activeIndex].name;
        setDisplayMood(displayMood);
        setFeelingsList(emojisList[swiper.activeIndex].feelingsList);
        setEmojiBgColor(emojisList[swiper.activeIndex].bgColor);
      }}
    >
      {emojisList.map((emoji) => {
        return (
          <SwiperSlide key={emoji.id} className="emoji-animation">
            <div className="emoji-container ">
              <img src={emoji.icon} alt="logo" className="emoji" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EmojiSelector;

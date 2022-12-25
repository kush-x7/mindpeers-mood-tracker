// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./emojiSelector.css";

import emojisList from "../../assets";
import { useEffect } from "react";

interface EmojiSelectorProps {
  setDisplayMood: (args: string) => void;
}

const EmojiSelector = ({ setDisplayMood }: EmojiSelectorProps) => {
  const activeEmojiIndex = 0;

  useEffect(() => {
    setDisplayMood(emojisList[0].name);
  }, []);

  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={200}
      slidesPerView={3}
      initialSlide={activeEmojiIndex}
      // effect={"cube"}
      // onSlideChangeEnd={(swiper) => {
      //   console.log("Current SLide index " + swiper.activeIndex);
      //   const displayMood = emojisList[swiper.activeIndex].name;
      //   setDisplayMood(displayMood);
      // }}
      onSlideChange={(swiper) => {
        console.log("Current SLide index " + swiper.activeIndex);
        const displayMood = emojisList[swiper.activeIndex].name;
        setDisplayMood(displayMood);
        console.log(displayMood);
      }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {emojisList.map((emoji) => {
        return (
          <SwiperSlide key={emoji.id}>
            <img src={emoji.icon} alt={emoji.name} className="emoji" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EmojiSelector;

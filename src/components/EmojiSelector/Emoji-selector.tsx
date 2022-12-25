import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import emojisList from "../../assets";
import "./emojiSelector.css";

interface EmojiSelectorProps {
  setDisplayMood: (args: string) => void;
  setFeelingsList: (args: Array<{ id: number; name: string }>) => void;
}

const EmojiSelector = ({
  setDisplayMood,
  setFeelingsList,
}: EmojiSelectorProps) => {
  const activeEmojiIndex = 0;

  // First time calling this effect the update mood and feeling data according to the initial emoji
  useEffect(() => {
    setDisplayMood(emojisList[activeEmojiIndex].name);
    setFeelingsList(emojisList[activeEmojiIndex].feelingsList);
  }, []);

  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={10}
      slidesPerView={3}
      initialSlide={activeEmojiIndex}
      onSlideChange={(swiper) => {
        const displayMood = emojisList[swiper.activeIndex].name;
        setDisplayMood(displayMood);
        setFeelingsList(emojisList[swiper.activeIndex].feelingsList);
        // console.log(swiper.activeIndex);
      }}
      onSwiper={(swiper) => console.log(swiper, "kush")}
    >
      {emojisList.map((emoji) => {
        return (
          <SwiperSlide key={emoji.id}>
            <div className="emoji-container">
              <img src={emoji.icon} alt="logo" className="emoji" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EmojiSelector;
function getDerivedStateFromProps(props: any, state: any) {
  throw new Error("Function not implemented.");
}

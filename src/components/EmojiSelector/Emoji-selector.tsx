// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import emojisList from "../../assets";

const EmojiSelector = () => {
  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {emojisList.map((emoji) => {
        return (
          <SwiperSlide key={emoji.id}>
            <img src={emoji.icon} alt={emoji.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EmojiSelector;

import {
  A11y,
  Autoplay,
  Pagination,
  Scrollbar
} from "swiper/modules";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../../components/ReviewCard";

const ReviewSlider = () => {
  return (
    <Swiper
    loop={true}
    modules={[ Pagination, Scrollbar, A11y, Autoplay]}
    autoplay={true}
    breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
    spaceBetween={50}
    >
      <SwiperSlide>
        <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard></ReviewCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;

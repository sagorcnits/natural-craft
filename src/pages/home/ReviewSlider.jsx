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
        <ReviewCard name={"Jhone Doe"} image={"https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1714485763~exp=1714489363~hmac=f6421763e300cce35a90b74e1fb93e6f159da68b81ac61bebfa58a787f4111d1&w=740"} description={"Recently, I had the pleasure of experiencing the charm of wooden crafts firsthand, and I must say, it was a truly enchanting journey into the world of artisanal craftsmanship."}></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard name={"angila doe"} image={"https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?t=st=1714485854~exp=1714489454~hmac=0b92bb50a94d187dfeec54dbe978482c2347178ee164945dd1c295dacdacb6a3&w=740"} description={"Recently, I had the pleasure of experiencing the charm of wooden crafts firsthand, and I must say, it was a truly enchanting journey into the world of artisanal craftsmanship."}></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard name={"devile"} image={"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1714485894~exp=1714489494~hmac=954eebbf724a12004f3b20118dd496898c75e713a87732437e59da47df78f8a0&w=740"} description={"In conclusion, my journey into the world of wooden crafts has been a revelation—a testament to the enduring power of human creativity"}></ReviewCard>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default ReviewSlider;

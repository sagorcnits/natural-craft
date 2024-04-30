import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";


const Banner = () => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="rounded-md overflow-hidden  md:h-[550px] h-[300px] bg-[url('https://img.freepik.com/free-photo/artisan-doing-woodcutting_23-2150600744.jpg?t=st=1714125765~exp=1714129365~hmac=a5438d9fcf92080b2e443aab8a69d35b9101fea20c4b0a462e6b347fa67ba4a6&w=740')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
          <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
              Wooden Furniture & Sculptures
            </h1>
            <p className="poppins-reguler">Beautiful Villa with Ocean View</p>
            <p>
              This stunning villa offers breathtaking views of the ocean and
              luxurious amenities. Perfect for those seeking ultimate comfort
              and relaxation.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden  md:h-[550px] h-[300px] bg-[url('https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178339.jpg?t=st=1714126350~exp=1714129950~hmac=7f4fc16ce2983081aa37df6cc77c345ef8221521755bec6ae809ffe7bb05a534&w=740')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
          <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">Wooden Home Decor</h1>
            <p className="poppins-reguler">Beautiful Villa with Ocean View</p>
            <p>
              This stunning villa offers breathtaking views of the ocean and
              luxurious amenities. Perfect for those seeking ultimate comfort
              and relaxation.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden  md:h-[550px] h-[300px] bg-[url('https://img.freepik.com/premium-photo/handmade-wooden-utensils-wooden-kitchen-essentials_893610-9267.jpg?w=740')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
          <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
              Wooden Utensils and Kitchenware
            </h1>
            <p className="poppins-reguler">Beautiful Villa with Ocean View</p>
            <p>
              This stunning villa offers breathtaking views of the ocean and
              luxurious amenities. Perfect for those seeking ultimate comfort
              and relaxation.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

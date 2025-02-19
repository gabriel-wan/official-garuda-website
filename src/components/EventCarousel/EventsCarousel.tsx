import slides from "../../assets/eventsCarousel/EventsCarousel.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import EventSlide from "./EventSlide";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="!p-12 ! !w-full !h-full rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="!bg-center !bg-cover !w-96 !h-[288px] rounded-xl">
            <EventSlide
              slide={slide}
              slideIndex={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

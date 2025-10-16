// import slides from "../../assets/eventsCarousel/EventsCarousel.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import EventSlide from "./EventSlide";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="!p-12 ! !w-full !h-full rounded-xl"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide className="!bg-center !bg-cover !w-96 !h-[288px] rounded-xl">
//             <EventSlide
//               slide={slide}
//               slideIndex={index}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
import slides from "../../assets/eventsCarousel/EventsCarousel.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCoverflow, Pagination } from "swiper/modules";
import EventSlide from "./EventSlide";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function EventsBanner() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-6 lg:px-12">
      <Swiper
        effect="coverflow"
        mousewheel={{ forceToAxis: true }} // enables trackpad / wheel scroll
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        grabCursor={true}                  // optional visual cue
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="!w-full !h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!bg-center !bg-cover !w-96 !h-[288px] rounded-xl overflow-hidden"
          >
            <EventSlide slide={slide} slideIndex={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

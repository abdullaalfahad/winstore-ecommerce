'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      }}
      className="w-full"
    >
      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>
    </Swiper>
  );
}

function HeroSlide() {
  return (
    <section className="bg-[url('/hero-banner.png')] bg-cover bg-center bg-no-repeat">
      <div
        className="
          max-w-7xl mx-auto px-4 py-10 
          grid grid-cols-1 lg:grid-cols-2 
          gap-10 items-center 
          min-h-[400px] lg:min-h-[500px]
        "
      >
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1
            className="
              font-bold mb-4 
              text-3xl sm:text-4xl lg:text-5xl
            "
          >
            <span className="text-[#2C3E50]">Shop </span>
            <span className="text-[#00A8A8]">Computer</span>
            <br />
            <span className="text-[#00A8A8]">& experience</span>
          </h1>

          <p
            className="
              text-gray-600 text-sm 
              max-w-md mx-auto lg:mx-0
            "
          >
            You Cannot Inspect Quality Into The Product. It Is Already There By Design.
            <br />I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.
          </p>

          <button
            className="
              bg-[#14B1F0] text-white px-6 lg:px-8 py-2 
              rounded font-semibold w-fit 
              mx-auto lg:mx-0 
              mt-4
              hover:bg-[#00909A] transition
            "
          >
            View More
          </button>
        </div>

        <div className="relative flex justify-center hidden lg:flex lg:justify-end">
          <div
            className="
              absolute
              -top-10 lg:-top-40 
              right-auto lg:-right-10
              w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
              bg-gradient-to-r from-amber-400 to-orange-500 
              rounded-full flex items-center justify-center shadow-lg
            
            "
          >
            <div
              className="
                text-center text-white 
                text-2xl sm:text-3xl lg:text-[47px] 
                leading-none
              "
            >
              <div>40%</div>
              <div>Off</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

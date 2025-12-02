'use client';

import { getCategories } from '@/lib/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const categoryImages: Record<string, string> = {
  electronics: '/electronics-device.jpg',
  jewelery: '/gold-jewelry-min.jpg',
  "men's clothing": '/mens-fashion.jpeg',
  "women's clothing": '/fashion-clothes-accessories.jpg',
};

export default function CategoryCarousel() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Duplicate categories to loop twice visually
  const loopCategories = [...categories, ...categories];

  return (
    <section className="bg-gradient-to-b from-[#F3EDC9] to-[#FFFFFF]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative">
          <button className="swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <ChevronLeft className="w-6 h-6 text-[#2C3E50]" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1.3}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-4"
          >
            {loopCategories.map((category, index) => (
              <SwiperSlide key={`${category}-${index}`}>
                <Link href={`/category/${category}`} className="block cursor-pointer">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition h-full">
                    <Image
                      src={categoryImages[category] || '/placeholder.svg'}
                      alt={category}
                      width={100}
                      height={100}
                      className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                    />

                    <div className="p-4 flex items-center justify-between bg-white absolute bottom-5 bg-[#FEF9F9F2] -left-2 right-4">
                      <h3 className="text-[#2C3E50] capitalize">{category}</h3>
                      <span className="text-[#14B1F0] text-sm group-hover:underline">Shop</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <ChevronRight className="w-6 h-6 text-[#2C3E50]" />
          </button>
        </div>
      </section>
    </section>
  );
}

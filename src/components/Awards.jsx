// src/components/Awards.jsx
import React from 'react';
import { awards } from '../data/awards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function Awards() {
  return (
    <section id="awards" className="bg-stone-900 text-white py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          AWARDS
        </h2>
        <div className="w-24 h-1 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1,                  // tiny non-zero so it moves
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          className="py-4"
        >
          {awards.map((award) => (
            <SwiperSlide
              key={award.id}
              style={{ width: '320px' }} // make each slide wider
              className="flex flex-col items-center"
            >
              <img
                src={award.img}
                alt={award.title}
                className="
                  w-64 h-56            /* 14rem = 224px square */
                  object-cover
                  rounded-lg           /* soft square corners */
                  border-4 border-white-300
                  mb-4
                "
              />
              <p className="text-center">{award.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

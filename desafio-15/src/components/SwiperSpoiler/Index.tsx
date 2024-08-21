"use client";

import Container from "@/components/Container/Index";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { IconArrow, IconHouse } from "@/assets";
import { SLIDE_SPOILER } from "@/constants";

const Index = () => {
  const swiperRef = useRef() as any;

  return (
    <div className="w-full relative">
      <button
        className="w-12 h-12 bg-orange-normal rounded-full hidden md:flex items-center justify-center absolute -left-6 z-10 top-1/2 hover:bg-orange-500 transition-all ease-linear"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        <Image src={IconArrow} alt="" />
      </button>
      <Swiper
        className=""
        slidesPerView={3}
        spaceBetween={32}
        speed={800}
        loop
        autoHeight
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        pagination={{ dynamicBullets: true, clickable: true }}
      >
        {SLIDE_SPOILER.map(({ id, image }) => (
          <SwiperSlide className="" key={id}>
            <div className="bg-gray-100 rounded w-full max-w-sm"
            
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="500">
              <div className="relative w-full h-[280px]">
                <Image className="" src={image} alt="Spoiler" fill />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="w-12 h-12 bg-orange-normal rounded-full hidden  md:flex items-center justify-center absolute -right-6 z-10 top-1/2 hover:bg-orange-500 transition-all ease-linear rotate-180"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        <Image src={IconArrow} alt="" />
      </button>
    </div>
  );
};

export default Index;

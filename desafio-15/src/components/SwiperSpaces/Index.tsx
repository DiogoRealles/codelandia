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
import { SLIDE_SPACES } from "@/constants";

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
        {SLIDE_SPACES.map(({ id, icon, text }) => (
          <SwiperSlide className="" key={id}>
            <div
              className="bg-gray-100 rounded border-white/20 py-14 flex justify-center items-center flex-col gap-8 w-full max-w-sm"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              <div className="relative w-20 h-20">
                <Image src={icon} alt="Icon" fill />
              </div>
              <p className="text-green-dark font-body text-title-24 text-center">
                {text}
              </p>
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

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import picture2 from "public/images/2.jpg";
import Image from "next/image";
import H1 from "~/components/ui/h1";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import "~/styles/swiper-styles.css";

export default function Page() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="h-[100vh] w-full"
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="w-full">Hello world slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <article className="align-center mt-4 flex flex-col  px-4">
          <H1 className="mb-10 text-center">Slide 2</H1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            qui ad saepe architecto. Eaque facilis libero iusto fuga fugiat?
            Tempora adipisci, officiis dolorem autem assumenda quod illo
            deserunt nemo in?
          </p>
          <Image
            src={picture2}
            alt="Picture of sand stone"
            className="mx-auto my-5"
          ></Image>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <div>slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
}

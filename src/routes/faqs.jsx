import React from 'react'
import ProyectsLayout  from '../components/proyectsLayout'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import proyecto1 from '../imagenes/proyecto_nucleo2.png'
import proyecto2 from '../imagenes/Software_1.png'

import { EffectCube, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export default function FaqsPage() {
  return (
    <ProyectsLayout title="Mis proyectos">
      <Swiper
        effect={"cube"}
        spaceBetween={30}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="absolute w-2/4 -bottom-64 lg:top-80 lg:-left-56"
      >
        <SwiperSlide>
          <img src={proyecto1}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={proyecto2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={proyecto1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={proyecto2} />
        </SwiperSlide>
      </Swiper>
    </ProyectsLayout>
  )
}

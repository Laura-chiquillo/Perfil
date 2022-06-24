import React from 'react'
import ProyectsLayout from '../components/proyectsLayout'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import proyecto1 from '../imagenes/proyecto_nucleo2.png'
import proyecto2 from '../imagenes/Software_1.png'
import proyecto3 from '../imagenes/HSoftware.png'

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
          <div>
            <img src={proyecto1} />
            <p>Desarrollo de Información para el cargue, validación y procesamiento de datos. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={proyecto2} />
            <p>un sistema de información que le permita poder optimizar sus procesos realizados desde el área de tesorería.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={proyecto3} />
            <p>Estructuración de un proceso de envío y recepción de notas de los internos de medicina.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={proyecto1} />
            <p>Desarrollo de Información para el cargue, validación y procesamiento de datos. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={proyecto2} />
            <p>un sistema de información que le permita poder optimizar sus procesos realizados desde el área de tesorería.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={proyecto3} />
            <p>Estructuración de un proceso de envío y recepción de notas de los internos de medicina.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </ProyectsLayout>
  )
}

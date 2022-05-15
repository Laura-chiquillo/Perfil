import React from 'react'
import proyecto from '../imagenes/proyectos.jpg'
import { Layout } from '../components/layout'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="item absolute w-full h-full border-solid border-x-secondary-700" data-value="1">
    <img src={proyecto} alt="" />
  </div>,
  <div className="item absolute border-solid border-x-secondary-700" data-value="2">
    <img src={proyecto} alt="" />
  </div>,
];

export default function FaqsPage() {
  return (
    <Layout>
      <div className="absolute lg:left-72 left-1/3 top-1/3">
        <AliceCarousel
          animationType="fadeout"
          animationDuration={800}
          disableButtonsControls
          infinite
          items={items}
          mouseTracking
            />
      </div>
    </Layout>
  )
}

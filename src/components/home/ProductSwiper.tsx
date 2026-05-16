import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './product-swiper.css'

const SLIDES = [
  'https://swiperjs.com/demos/images/abstract-1.jpg',
  'https://swiperjs.com/demos/images/abstract-2.jpg',
  'https://swiperjs.com/demos/images/abstract-3.jpg',
  'https://swiperjs.com/demos/images/abstract-4.jpg',
  'https://swiperjs.com/demos/images/abstract-5.jpg',
  'https://swiperjs.com/demos/images/abstract-6.jpg',
  'https://swiperjs.com/demos/images/abstract-7.jpg',
  'https://swiperjs.com/demos/images/abstract-8.jpg',
  'https://swiperjs.com/demos/images/abstract-9.jpg',
] as const

export default function ProductSwiper() {
  return (
    <section className="bg-white py-12">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className="product-swiper"
      >
        {SLIDES.map((src, index) => (
          <SwiperSlide key={src}>
            <img src={src} alt={`Product ${index + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

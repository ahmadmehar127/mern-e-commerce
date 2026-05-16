import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import image1 from '@/assets/images-1.webp'
import image2 from '@/assets/images-2.webp'
import image3 from '@/assets/images-3.webp'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './product-swiper.css'

const SLIDES = [
  { src: image1, alt: 'Featured product 1' },
  { src: image2, alt: 'Featured product 2' },
  { src: image3, alt: 'Featured product 3' },
  { src: image1, alt: 'Featured product 1' },
  { src: image2, alt: 'Featured product 2' },
  { src: image3, alt: 'Featured product 3' },
  { src: image1, alt: 'Featured product 1' },
  { src: image2, alt: 'Featured product 2' },
  { src: image3, alt: 'Featured product 3' },
] as const

export default function ProductSwiper() {
  return (
    <section className="py-12">
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
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={`${slide.alt}-${index}`}>
            <img src={slide.src} alt={slide.alt} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

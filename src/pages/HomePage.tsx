import FeaturedProductsSection from '@components/home/FeaturedProductsSection'
import HeroSection from '@components/home/HeroSection'
import ProductSwiper from '@components/home/ProductSwiper'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductSwiper />
      <FeaturedProductsSection />
    </>
  )
}

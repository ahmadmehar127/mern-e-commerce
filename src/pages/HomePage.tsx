import CategoryBannersSection from '@components/home/CategoryBannersSection'
import FeaturedProductsSection from '@components/home/FeaturedProductsSection'
import HeroSection from '@components/home/HeroSection'
import ProductSwiper from '@components/home/ProductSwiper'
import CommunitySection from '@components/home/CommunitySection'
import WhyLoveSection from '@components/home/WhyLoveSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBannersSection />
      <ProductSwiper />
      <FeaturedProductsSection />
      <WhyLoveSection />
      <CommunitySection />
    </>
  )
}

import { Link } from 'react-router-dom'
import { CATEGORY_BANNERS } from '@/config/categoryBanners'

export default function CategoryBannersSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-14 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px md:grid-cols-3">
      {CATEGORY_BANNERS.map((banner) => (
        <Link
          key={banner.id}
          to={banner.to}
          className="group relative block min-h-[300px] overflow-hidden md:min-h-[380px] lg:min-h-[440px]"
        >
          <img
            src={banner.image}
            alt={banner.label}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-8 md:py-10">
            <span className="block text-center text-2xl font-bold uppercase tracking-[0.18em] text-white md:text-3xl">
              {banner.label}
            </span>
          </span>
        </Link>
      ))}
      </div>
    </section>
  )
}

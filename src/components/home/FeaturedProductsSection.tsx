import { Link } from 'react-router-dom'
import homeRing1 from '@/assets/home-ring1.avif'
import homeRing2 from '@/assets/home-ring2.avif'
import { ROUTES } from '@routes/index'

type ProductCardProps = {
  title: string
  price: string
  image: string
}

function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <article className="relative min-h-[min(420px,70vw)] overflow-hidden rounded-2xl md:min-h-[480px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-6 md:p-8">
        <div>
          <h2 className="!m-0 !text-2xl !font-medium !leading-tight !tracking-tight text-white md:!text-3xl">
            {title}
          </h2>
          <p className="!mt-1 !text-sm !font-normal text-white/90 md:!text-base">
            {price}
          </p>
        </div>

        <div className="flex shrink-0 gap-2 sm:gap-3">
          <Link to={ROUTES.products} className="btn-outline-light">
            Explore
          </Link>
          <Link to={ROUTES.products} className="btn-shop">
            Shop
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function FeaturedProductsSection() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-14 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2 md:gap-5">
        <ProductCard
          title="Oura Ring 4"
          price="From $349"
          image={homeRing2}
        />
        <ProductCard
          title="Oura Ring 4 Ceramic"
          price="$499"
          image={homeRing1}
        />
      </div>
    </section>
  )
}

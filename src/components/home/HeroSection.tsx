import { Link } from 'react-router-dom'
import heroFinal from '@/assets/image-7.webp'
import { ROUTES } from '@routes/index'

export default function HeroSection() {
  return (
    <section
      className="relative -mt-14 min-h-svh overflow-hidden bg-cover bg-[center_35%] bg-no-repeat pt-14"
      style={{ backgroundImage: `url(${heroFinal})` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/50 via-white/15 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-[1400px] items-center px-6 py-10 lg:px-12 lg:py-14 xl:px-16">
        <div className="max-w-xl text-left">
          <h1 className="!m-0 space-y-0 !text-[clamp(2.75rem,6vw,4.5rem)] !font-normal !leading-[1.02] !tracking-[-0.02em] text-neutral-900">
            <span className="block font-semibold">Sleeker.</span>
            <span className="block font-semibold">Smarter.</span>
            <span className="block font-serif text-[1.05em] font-normal italic text-[#9a7b4f]">
              Made for you.
            </span>
          </h1>

          <Link to={ROUTES.products} className="btn-primary mt-8">
            Discover Oura Ring 4
          </Link>
        </div>
      </div>
    </section>
  )
}

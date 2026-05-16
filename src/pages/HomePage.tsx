import { Link } from 'react-router-dom'
import { decrement, increment } from '@features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { ROUTES } from '@routes/index'

const counterBtn =
  'rounded border-2 border-transparent bg-neutral-100 px-2.5 py-1 font-mono text-base text-neutral-900 transition-colors hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2'

export default function HomePage() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <section className="relative isolate -mt-14 flex min-h-[min(52vh,520px)] scroll-mt-14 flex-col items-center justify-center gap-6 overflow-hidden bg-[url(/shop-hero.png)] bg-cover bg-[position:center_28%] bg-no-repeat px-5 pt-14 text-center">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white"
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h6>New season</h6>
        <h1 className="max-w-lg">Waterproof essentials for every day</h1>
        <p className="max-w-md">
          Discover outerwear, bags, and accessories built for modern weather.
        </p>
        <Link
          to={ROUTES.products}
          className="mt-2 inline-block bg-neutral-950 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white no-underline hover:opacity-85 hover:no-underline"
        >
          Shop now
        </Link>
        <div className="mt-4 flex items-center gap-2.5">
          <button
            type="button"
            className={`${counterBtn} min-w-9 font-semibold`}
            onClick={() => dispatch(decrement())}
            aria-label="Decrement count"
          >
            −
          </button>
          <button
            type="button"
            className={counterBtn}
            onClick={() => dispatch(increment())}
          >
            Count is {count}
          </button>
        </div>
      </div>
    </section>
  )
}

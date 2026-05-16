import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function CartPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-5 py-12 text-center">
      <h1 className="mb-3 text-3xl font-medium tracking-tight text-neutral-950">
        Cart
      </h1>
      <p className="text-neutral-600">
        Your bag is empty. Browse the catalog to add items.
      </p>
      <Link
        to={ROUTES.products}
        className="mt-4 font-medium text-neutral-950 underline-offset-4 hover:underline"
      >
        Shop products
      </Link>
    </section>
  )
}

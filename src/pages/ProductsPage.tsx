import { useSearchParams } from 'react-router-dom'

function titleCase(s: string) {
  return s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function ProductsPage() {
  const [params] = useSearchParams()
  const category = params.get('category')
  const collection = params.get('collection')

  const heading =
    collection === 'new'
      ? 'New in'
      : collection === 'stories'
        ? 'World'
        : category
          ? titleCase(category)
          : 'All products'

  return (
    <section className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-5 py-12 text-center">
      <h1 className="mb-3 text-3xl font-medium tracking-tight text-neutral-950">
        {heading}
      </h1>
      <p className="text-neutral-600">
        Product listing will go here once the catalog API is wired up.
      </p>
    </section>
  )
}

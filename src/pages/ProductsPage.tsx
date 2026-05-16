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
    <section className="page">
      <h1>{heading}</h1>
      <p>Product listing will go here once the catalog API is wired up.</p>
    </section>
  )
}

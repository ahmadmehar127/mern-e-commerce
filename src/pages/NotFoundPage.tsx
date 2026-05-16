import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function NotFoundPage() {
  return (
    <section className="page">
      <h1>Page not found</h1>
      <p>Nothing lives at this URL.</p>
      <Link to={ROUTES.home} className="mt-2">
        Back to home
      </Link>
    </section>
  )
}

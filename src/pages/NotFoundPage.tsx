import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function NotFoundPage() {
  return (
    <section id="center" className="page-simple">
      <h1>Page not found</h1>
      <p>Nothing lives at this URL.</p>
      <Link to={ROUTES.home} className="not-found-link">
        Back to home
      </Link>
    </section>
  )
}

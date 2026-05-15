import { NavLink } from 'react-router-dom'
import { AppRoutes, ROUTES } from './routes'
import './App.css'

function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <NavLink to={ROUTES.home} className="site-brand" end>
          MERN Shop
        </NavLink>
        <nav className="site-nav" aria-label="Main">
          <NavLink
            to={ROUTES.home}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to={ROUTES.products}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Products
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App

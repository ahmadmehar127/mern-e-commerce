import ShopNavbar from '@components/layout/ShopNavbar'
import SiteFooter from '@components/layout/SiteFooter'
import { AppRoutes } from './routes'

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <ShopNavbar />
      <main className="flex flex-1 flex-col pt-14">
        <AppRoutes />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

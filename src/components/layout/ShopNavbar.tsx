import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SHOP_NAV_ITEMS } from '../../config/shopNav'
import { ROUTES } from '../../routes/paths'

const linkBase =
  'whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-950 no-underline transition-opacity hover:opacity-65'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? `${linkBase} opacity-100 ring-1 ring-neutral-950/15 ring-inset rounded-sm px-2 py-1 -mx-1 -my-1`
    : linkBase
}

type ShopNavbarProps = {
  /** Items in bag — wire to cart slice when available */
  cartCount?: number
}

export default function ShopNavbar({ cartCount = 0 }: ShopNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-[200] border-b border-white/25 bg-white/40 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/35">
      <div className="mx-auto flex min-h-14 max-w-[100vw] items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 xl:px-16">
        <NavLink
          to={ROUTES.home}
          className="shrink-0 text-[13px] font-black uppercase tracking-[0.32em] text-neutral-950 no-underline hover:opacity-75"
          end
          onClick={closeMenu}
        >
          MERN Shop
        </NavLink>

        <nav
          className="hidden min-w-0 flex-1 justify-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex max-w-full items-center justify-center gap-6 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:gap-8">
            {SHOP_NAV_ITEMS.map((item) => (
              <li key={item.to} className="shrink-0">
                <NavLink
                  to={item.to}
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <button
            type="button"
            className="flex items-center gap-2 border-0 bg-transparent p-0 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 hover:opacity-65"
            aria-label="Search products"
          >
            <Search className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
            <span className="hidden sm:inline">Search</span>
          </button>

          <NavLink
            to={ROUTES.cart}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 no-underline hover:opacity-65"
            onClick={closeMenu}
          >
            <ShoppingBag className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
            <span className="hidden sm:inline">Cart ({cartCount})</span>
            <span className="sm:hidden" aria-hidden>
              ({cartCount})
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-neutral-950 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-shop-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <X className="size-5" strokeWidth={2.25} />
            ) : (
              <Menu className="size-5" strokeWidth={2.25} />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-shop-nav"
          className="border-t border-white/30 bg-white/80 px-4 py-4 backdrop-blur-xl lg:hidden"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col gap-1">
            {SHOP_NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'block rounded-sm bg-neutral-950/5 px-3 py-3 text-xs font-bold uppercase tracking-[0.22em] text-neutral-950 no-underline'
                      : 'block rounded-sm px-3 py-3 text-xs font-bold uppercase tracking-[0.22em] text-neutral-950 no-underline hover:bg-white/60'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

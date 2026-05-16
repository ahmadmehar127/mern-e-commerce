import { ROUTES } from '../routes/paths'

export type ShopNavItem = {
  label: string
  to: string
}

/** Main catalog links — map to products with filters (read in ProductsPage later). */
export const SHOP_NAV_ITEMS: ShopNavItem[] = [
  { label: 'New in', to: `${ROUTES.products}?collection=new` },
  { label: 'Women', to: `${ROUTES.products}?category=women` },
  { label: 'Men', to: `${ROUTES.products}?category=men` },
  { label: 'Bags', to: `${ROUTES.products}?category=bags` },
  { label: 'Accessories', to: `${ROUTES.products}?category=accessories` },
  { label: 'Home away', to: `${ROUTES.products}?category=home` },
  { label: 'World', to: `${ROUTES.products}?collection=stories` },
]

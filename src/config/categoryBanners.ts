import categoryBag from '@/assets/categories/sports-bag.jpg'
import categoryGloves from '@/assets/categories/sparring-gloves.jpg'
import categoryShoes from '@/assets/categories/boxing-shoes-2.jpg'
import { ROUTES } from '@routes/paths'

export type CategoryBanner = {
  id: string
  label: string
  image: string
  to: string
}

export const CATEGORY_BANNERS: CategoryBanner[] = [
  {
    id: 'shoes',
    label: 'Shoes',
    image: categoryShoes,
    to: `${ROUTES.products}?category=shoes`,
  },
  {
    id: 'bag',
    label: 'Bag',
    image: categoryBag,
    to: `${ROUTES.products}?category=bags`,
  },
  {
    id: 'gloves',
    label: 'Gloves',
    image: categoryGloves,
    to: `${ROUTES.products}?category=gloves`,
  },
]

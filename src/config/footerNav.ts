import { ROUTES } from '@routes/paths'

export const FOOTER_MY_ACCOUNT = [
  { label: 'My orders', to: ROUTES.products },
  { label: 'Cart', to: ROUTES.cart },
  { label: 'Student discount', to: ROUTES.products },
  { label: 'Affiliate program', to: ROUTES.products },
  { label: 'Wholesale registration', to: ROUTES.products },
] as const

export const FOOTER_ABOUT = [
  { label: 'Gift card', to: ROUTES.products },
  { label: 'Blog', to: ROUTES.products },
  { label: 'About MERN Shop', to: ROUTES.home },
] as const

export const FOOTER_HELP = [
  { label: 'Orders', to: ROUTES.products },
  { label: 'Payment methods', to: ROUTES.products },
  { label: 'Privacy policy', to: ROUTES.products },
  { label: 'Shipping', to: ROUTES.products },
  { label: 'Return policy', to: ROUTES.products },
  { label: 'Request a return', to: ROUTES.products },
  { label: 'FAQ', to: ROUTES.products },
] as const

export const FOOTER_SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
  },
] as const

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  FacebookSocialIcon,
  InstagramSocialIcon,
  TikTokSocialIcon,
  YouTubeSocialIcon,
} from '@components/icons/SocialIcons'
import {
  FOOTER_ABOUT,
  FOOTER_HELP,
  FOOTER_MY_ACCOUNT,
  FOOTER_SOCIAL,
} from '@/config/footerNav'

const SOCIAL_ICONS = {
  Instagram: InstagramSocialIcon,
  Facebook: FacebookSocialIcon,
  TikTok: TikTokSocialIcon,
  YouTube: YouTubeSocialIcon,
} as const

function FooterColumnHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
      {children}
    </h3>
  )
}

function FooterLinkList({
  items,
}: {
  items: readonly { label: string; to: string }[]
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.to} className="footer-link">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function SiteFooter() {
  const [email, setEmail] = useState('')
  const year = new Date().getFullYear()

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="site-footer bg-black text-neutral-400">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="footer-link inline-block no-underline">
              <span className="block text-2xl font-black tracking-[0.2em] text-white">
                MERN
              </span>
              <span className="block text-2xl font-black tracking-[0.35em] text-white">
                SHOP
              </span>
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white">
              B2B
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
              MERN Shop
            </p>
          </div>

          <div>
            <FooterColumnHeading>My account</FooterColumnHeading>
            <FooterLinkList items={FOOTER_MY_ACCOUNT} />
            <h3 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wide text-white">
              About us
            </h3>
            <FooterLinkList items={FOOTER_ABOUT} />
          </div>

          <div>
            <FooterColumnHeading>Help</FooterColumnHeading>
            <FooterLinkList items={FOOTER_HELP} />
          </div>

          <div>
            <FooterColumnHeading>Contact us</FooterColumnHeading>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Customer service
                <br />
                Mon–Fri: 9am–6pm EST
                <br />
                Sat–Sun: 10am–4pm EST
              </p>
              <p>
                Wholesale:{' '}
                <a href="mailto:wholesale@mernshop.com" className="footer-link">
                  wholesale@mernshop.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+18005551234" className="footer-link">
                  +1 (800) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:support@mernshop.com" className="footer-link">
                  support@mernshop.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <FooterColumnHeading>MERN Shop newsletter</FooterColumnHeading>
            <p className="mb-6 text-sm leading-relaxed">
              Subscribe to the newsletter to get access to exclusive prizes and
              promotions with every order on our website.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <label className="block">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="My e-mail..."
                  required
                  className="w-full border-0 border-b border-neutral-600 bg-transparent py-2 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
                />
              </label>
              <button type="submit" className="btn-footer-subscribe">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-500">
              Copyright © {year} — MERN Shop
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-neutral-500">Follow MERN Shop news</span>
              <ul className="flex items-center gap-3">
                {FOOTER_SOCIAL.map((social) => {
                  const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS]
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                        aria-label={social.label}
                      >
                        <Icon className="size-5" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { BadgeCheck, Headset, PackageOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: PackageOpen,
    title: 'Free and easy return',
    description:
      'Not satisfied? Return your purchase for free within 30 days.',
  },
  {
    icon: BadgeCheck,
    title: '30 day guarantee',
    description:
      'Any problem with your product? Avail your 30 day guarantee.',
  },
  {
    icon: Headset,
    title: 'Exceptional customer service',
    description:
      'Your concerns are of value to us. Our representatives are available to help you around the clock.',
  },
]

export default function WhyLoveSection() {
  return (
    <section className="bg-neutral-100 px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:items-start lg:gap-16">
        <h2 className="!m-0 text-left text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-950 md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          Why people love
          <br />
          MERN Shop
        </h2>

        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col items-center text-center sm:px-2"
            >
              <Icon
                className="size-14 stroke-[1.25] text-neutral-950"
                aria-hidden
              />
              <h3 className="!mt-5 !mb-0 !text-sm !font-bold uppercase tracking-wide text-neutral-950 md:!text-base">
                {title}
              </h3>
              <p className="!mt-3 !text-sm !leading-relaxed !text-neutral-800 md:!text-[15px]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

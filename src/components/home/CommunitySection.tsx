import InstagramIcon from '@components/icons/InstagramIcon'
import { COMMUNITY_POSTS, type CommunityPost } from '@/config/communityPosts'

type CommunityPostTileProps = {
  post: CommunityPost
}

function CommunityPostTile({ post }: CommunityPostTileProps) {
  return (
    <a
      href={post.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square overflow-hidden bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
      aria-label={`View Instagram post ${post.id}`}
    >
      <img
        src={post.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      <span className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <InstagramIcon className="size-10 text-white md:size-12" />
      </span>
    </a>
  )
}

export default function CommunitySection() {
  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-16 lg:px-12">
      <h2 className="!mb-8 !text-center !text-2xl !font-bold uppercase tracking-wide text-neutral-950 md:!mb-10 md:!text-3xl">
        Our community
      </h2>

      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 md:grid-cols-5">
          {COMMUNITY_POSTS.map((post) => (
            <CommunityPostTile key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

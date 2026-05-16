import community01 from '@/assets/community/community-01.png'
import community02 from '@/assets/community/community-02.png'
import community03 from '@/assets/community/community-03.png'
import community04 from '@/assets/community/community-04.png'
import community05 from '@/assets/community/community-05.png'

export type CommunityPost = {
  id: string
  image: string
  instagramUrl: string
}

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    image: community01,
    instagramUrl: 'https://www.instagram.com/p/C8example1/',
  },
  {
    id: '2',
    image: community02,
    instagramUrl: 'https://www.instagram.com/p/C8example2/',
  },
  {
    id: '3',
    image: community03,
    instagramUrl: 'https://www.instagram.com/p/C8example3/',
  },
  {
    id: '4',
    image: community04,
    instagramUrl: 'https://www.instagram.com/p/C8example4/',
  },
  {
    id: '5',
    image: community05,
    instagramUrl: 'https://www.instagram.com/p/C8example5/',
  },
]

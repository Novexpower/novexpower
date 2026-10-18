import {sanityClient} from './client'
import {heroQuery} from './queries'

export type SanityHero = {
  heading?: string
  subheading?: string
  centerImageSrc?: string
}

export async function getHero(): Promise<SanityHero | null> {
  return sanityClient.fetch<SanityHero | null>(heroQuery)
}

import {defineQuery} from 'next-sanity'

export const heroQuery = defineQuery(`*[_type == "hero"][0]{
  heading,
  subheading,
  "centerImageSrc": centerImage.asset->url
}`)

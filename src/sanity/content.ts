import {sanityClient} from './client'
import {collaborators} from '@/data/collaborators'
import {faqs} from '@/data/faq'
import {team_members} from '@/data/team_members'
import {updates as fallbackEvents} from '@/data/updates'
import {footerDetails} from '@/data/footer'
import {menuItems} from '@/data/menuItems'
import {siteDetails} from '@/data/siteDetails'

export type SanityImage = {src: string}

export type SanityContent = {
  hero: {heading?: string; subheading?: string; centerImageSrc?: string} | null
  collaborators: typeof collaborators
  teamMembers: typeof team_members
  faqs: typeof faqs
  events: Array<{
    title: string
    slug: string
    description?: string
    body?: unknown[]
    date?: string
    location?: string
    image: string
  }>
  footer: typeof footerDetails
  navigation: typeof menuItems
  site: typeof siteDetails
}

const contentQuery = `{
  "hero": *[_type == "hero"][0]{
    heading,
    subheading,
    "centerImageSrc": centerImage.asset->url
  },
  "collaborators": *[_type == "collaborator"] | order(name asc){
    name,
    url,
    "logo": logo.asset->url
  },
  "teamMembers": *[_type == "teamMember"] | order(name asc){
    name,
    email,
    role,
    message,
    "avatar": avatar.asset->url
  },
  "faqs": *[_type == "faq"] | order(_createdAt asc){
    question,
    answer
  },
  "events": *[_type == "event"] | order(_createdAt desc){
    title,
    "slug": slug.current,
    description,
    body,
    date,
    location,
    "image": image.asset->url
  },
  "footer": *[_type == "footerSettings"][0]{
    subheading,
    quickLinks,
    email,
    telephone,
    socials
  },
  "navigation": *[_type == "navigation"][0].items,
  "site": *[_type == "siteSettings"][0]{
    siteName,
    siteUrl,
    metadata,
    language,
    locale,
    "siteLogo": siteLogo.asset->url,
    googleAnalyticsId
  }
}`

type ContentResponse = {
  hero: SanityContent['hero']
  collaborators: SanityContent['collaborators']
  teamMembers: SanityContent['teamMembers']
  faqs: SanityContent['faqs']
  events: SanityContent['events']
  footer: SanityContent['footer']
  navigation: SanityContent['navigation']
  site: SanityContent['site']
}

export async function getSanityContent(): Promise<SanityContent> {
  const content = await sanityClient.fetch<ContentResponse>(contentQuery)

  return {
    hero: content.hero,
    collaborators: content.collaborators?.length ? content.collaborators : collaborators,
    teamMembers: content.teamMembers?.length ? content.teamMembers : team_members,
    faqs: content.faqs?.length ? content.faqs : faqs,
    events: content.events?.length
      ? content.events
      : fallbackEvents.map((event) => ({
          title: event.name,
          slug: event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
          description: event.name,
          date: event.date,
          location: event.location,
          image: event.image,
        })),
    footer: content.footer || footerDetails,
    navigation: content.navigation?.length ? content.navigation : menuItems,
    site: content.site
      ? {
          ...siteDetails,
          ...content.site,
          metadata: {...siteDetails.metadata, ...content.site.metadata},
        }
      : siteDetails,
  }
}

import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {PortableText} from 'next-sanity'
import {sanityClient} from '@/sanity/client'

type Event = {
  title: string
  description?: string
  body?: Parameters<typeof PortableText>[0]['value']
  date?: string
  location?: string
  image?: string
}

async function getEvent(slug: string): Promise<Event | null> {
  return sanityClient.fetch<Event | null>(
    `*[_type == "event" && slug.current == $slug][0]{
      title,
      description,
      body,
      date,
      location,
      "image": image.asset->url
    }`,
    {slug},
  )
}

export default async function EventPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const event = await getEvent(slug)

  if (!event) notFound()

  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Link href="/#events" className="text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-300">
        Back to events
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-slate-950 sm:text-5xl dark:text-white">{event.title}</h1>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-sky-700 dark:text-sky-300">
        {event.date && <span>{event.date}</span>}
        {event.location && <span>{event.location}</span>}
      </div>
      {event.image && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={event.image} alt={event.title} fill priority className="object-cover" />
        </div>
      )}
      {event.description && <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">{event.description}</p>}
      {event.body && (
        <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
          <PortableText value={event.body} />
        </div>
      )}
    </article>
  )
}

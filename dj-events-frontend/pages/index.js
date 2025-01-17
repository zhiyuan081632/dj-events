import Layout from '@/components/Layout'
import Link from 'next/link'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import fetch from 'node-fetch';

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const post_url = `${API_URL}/events?_sort=date:ASC&_limit=3`;
  console.log('post_url:', post_url);
  const res = await fetch(post_url)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}

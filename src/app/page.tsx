import { getHomepageAktuality, getProgramEvents } from '@/lib/api';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "LUDUS Bratislava - Divadelné centrum, škola a divadlo",
  description: "Škola Ludus pre mladých, Ludus Academy pre dospelých, Divadlo Ludus pre všetkých, divadelné letné tábory pre deti a tínedžerov.",
  openGraph: {
    title: "LUDUS Bratislava - Divadelné centrum, škola a divadlo",
    description: "Škola Ludus pre mladých, Ludus Academy pre dospelých, Divadlo Ludus pre všetkých, divadelné letné tábory pre deti a tínedžerov.",
  }
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const aktuality = await getHomepageAktuality();

  // Fetch upcoming events
  const allEvents = await getProgramEvents();
  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = allEvents
    .filter(e => e.event_date >= today)
    .slice(0, 4);

  return <HomeClient aktuality={aktuality} upcomingEvents={upcomingEvents} />;
}

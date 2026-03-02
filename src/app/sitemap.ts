import { MetadataRoute } from 'next';
import { getProgramEvents, getRepertoar } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://ludus-space.sk';

    // Static routes
    const staticRoutes = [
        '',
        '/skola-ludus',
        '/divadlo-ludus',
        '/ludus-academy',
        '/ludus-tabor',
        '/historia',
        '/kontakt',
        '/program',
        '/skola-ludus/prihlaska',
        '/skola-ludus/skolne',
        '/skola-ludus/vyucba',
        '/skola-ludus/galeria',
        '/skola-ludus/priestory-skoly',
        '/divadlo-ludus/repertoar',
        '/divadlo-ludus/aktivity',
        '/divadlo-ludus/priestory',
        '/divadlo-ludus/kontakt',
        '/ludus-academy/herecky-kurz',
        '/ludus-academy/improvizacia',
        '/ludus-academy/divadelne-laboratorium',
        '/ludus-academy/tvorive-pisanie',
        '/ludus-academy/workshopy-skoly',
        '/ludus-academy/workshop-ucitelia',
        '/ludus-academy/workshop-kreativita',
        '/ludus-academy/firemny-timbilding',
        '/ludus-academy/individualne-treningy',
        '/ludus-academy/firemny-workshop',
        '/ludus-academy/galeria',
        '/ludus-tabor/galeria',
        '/ludus-tabor/kontakt',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Dynamic routes for program events
    const events = await getProgramEvents();
    const eventRoutes = events.map((event) => ({
        url: `${baseUrl}/program/${event.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.7,
    }));

    // Repertoar items (if they have their own pages, but usually they link to program)
    // Assuming they might have pages in the future or we want them indexed.
    const repertoar = await getRepertoar();
    const repertoarRoutes = repertoar.map((item) => ({
        url: `${baseUrl}/repertoar/${item.slug}`, // Check if this path exists
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    return [...staticRoutes, ...eventRoutes];
}

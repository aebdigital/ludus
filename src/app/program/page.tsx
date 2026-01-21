import { Suspense } from 'react';
import { getProgramEvents, ProgramCategory } from '@/lib/api';
import ProgramClient from './ProgramClient';

export const revalidate = 0; // Ensure dynamic data fetching

export default async function ProgramPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const category = (searchParams.category as ProgramCategory) || undefined;

    // Fetch events based on category (or all if none, filters in client)
    // Actually, better fetch filtered by category to optimize, 
    // but if we want fast category switching without server roundtrip we'd fetch all using client.
    // BUT the requirements say "Server component", so let's fetch based on URL.
    const events = await getProgramEvents(category);

    return (
        <>
            {/* Hero */}
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative mt-20"
                style={{ backgroundImage: "url('/images/painting.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Program
                </h1>
            </section>

            <Suspense fallback={<div className="p-20 text-center">Načítavam program...</div>}>
                <ProgramClient events={events} />
            </Suspense>
        </>
    );
}

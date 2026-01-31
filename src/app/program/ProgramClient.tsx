'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ProgramEvent, ProgramCategory } from '@/lib/api';

const months = [
    { value: 'január', label: 'Január' },
    { value: 'február', label: 'Február' },
    { value: 'marec', label: 'Marec' },
    { value: 'apríl', label: 'Apríl' },
    { value: 'máj', label: 'Máj' },
    { value: 'jún', label: 'Jún' },
    { value: 'júl', label: 'Júl' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'október', label: 'Október' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' },
];

const categories: { [key: string]: string } = {
    'skola-ludus': 'Škola Ludus',
    'divadlo-ludus': 'Divadlo Ludus',
    'ludus-academy': 'Ludus Academy'
};

// Helper to normalized months to keys
function normalizeMonth(m: string) {
    return m.toLowerCase();
}


interface ProgramClientProps {
    events: ProgramEvent[];
    initialCategory?: string;
}

export default function ProgramClient({ events, initialCategory }: ProgramClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Get current month
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthValue = months[currentMonthIndex].value;

    const [activeMonth, setActiveMonth] = useState(currentMonthValue);

    // Determine current category
    const category = searchParams.get('category') || 'skola-ludus'; // Default to skola-ludus if none

    // Filter events by month and category
    const filteredEvents = events.filter(e => {
        // e.month might be full slovak name like "január", need to normalize
        const eventMonth = normalizeMonth(e.month);
        const eventCategory = e.category;

        return eventMonth === activeMonth && eventCategory === category;
    });

    return (
        <>
            {/* Category Tabs */}
            <div className="flex justify-center bg-white border-b border-gray-100">
                <div className="flex">
                    {Object.entries(categories).map(([key, label]) => (
                        <Link
                            key={key}
                            href={`/program?category=${key}`}
                            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${category === key
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:text-black'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Month Navigation */}
            <section className="py-6 bg-white sticky top-[84px] z-40 border-b border-black">
                <div className="w-[95%] mx-auto flex items-center justify-center gap-8 text-xl font-medium max-sm:text-base max-sm:gap-4 overflow-x-auto">
                    {/* Show Previous, Current, Next month roughly */}
                    {months.map((m) => {
                        // Simple logic to show all months or just active +- 1?
                        // Old design showed 3 months. Let's just list all for simplicity or match the 3-month style?
                        // Let's list all as a scrollable strip or just the active one prominent. 
                        // To match old "december january februar" style:
                        return (
                            <button
                                key={m.value}
                                onClick={() => setActiveMonth(m.value)}
                                className={`whitespace-nowrap transition-all ${activeMonth === m.value
                                    ? 'text-black font-bold text-2xl scale-110'
                                    : 'text-black hover:text-black text-lg'
                                    }`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {m.value}
                            </button>
                        )
                    })}
                </div>
            </section>

            <div className="min-h-[60vh]">
                {filteredEvents.map((event) => (
                    <div
                        onClick={() => router.push(`/program/${event.slug}`)}
                        key={event.id}
                        className="block border-b border-gray-200 transition-colors hover:brightness-95 group cursor-pointer"
                        style={{ backgroundColor: event.color || '#ffffff' }}
                    >
                        <div className="max-w-6xl w-[90%] mx-auto py-8">
                            <div className="flex flex-wrap items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-4">

                                {/* Date & Time */}
                                <div className="flex items-start gap-4 min-w-[150px] max-md:w-full max-md:justify-between">
                                    <div className="text-left w-24">
                                        <span className="block text-4xl font-bold font-heading" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {new Date(event.event_date).getDate()}.{new Date(event.event_date).getMonth() + 1}.
                                        </span>
                                        <span className="block text-sm font-bold opacity-70 uppercase tracking-wider">{event.day_name}</span>
                                    </div>
                                    <div className="text-2xl font-bold w-20 text-right max-md:text-left flex items-center h-full">
                                        {event.time}
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="flex-1 min-w-[250px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-3xl font-bold m-0 leading-tight group-hover:underline" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {event.title}
                                        </h3>
                                        {event.age_badge && (
                                            <span className="inline-flex items-center justify-center h-6 px-2 rounded-full border border-black text-xs font-bold shrink-0 bg-white/50">
                                                {event.age_badge}
                                            </span>
                                        )}
                                    </div>
                                    {event.subtitle && (
                                        <p className="text-base font-semibold opacity-80 mb-1">{event.subtitle}</p>
                                    )}
                                    <p className="text-sm opacity-70 font-semibold uppercase tracking-wide">{event.venue}</p>
                                </div>

                                {/* Status / Actions */}
                                <div className="flex items-center gap-8 justify-end min-w-[200px] max-md:w-full max-md:justify-between">

                                    {/* Price/Status Text */}
                                    <div className="text-right font-bold text-xl min-w-[80px]">
                                        {event.status === 'vypredane' && (
                                            <span className="text-red-600 uppercase tracking-wider text-sm">Vypredané</span>
                                        )}
                                        {event.status === 'info' && (
                                            <span className="text-sm">{event.info_text}</span>
                                        )}
                                        {event.status === 'available' && event.price ? (
                                            <span>
                                                {event.price.match(/€|Eur/i) ? event.price : `${event.price} €`}
                                            </span>
                                        ) : event.status === 'available' ? (
                                            <span className="text-black uppercase tracking-wider text-sm">Dostupné</span>
                                        ) : null}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-2 min-w-[180px] items-stretch">
                                        {event.buy_ticket_link && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open(event.buy_ticket_link, '_blank'); }}
                                                className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded text-center"
                                            >
                                                Kúpiť lístok
                                            </button>
                                        )}

                                        {event.has_school_reservation && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); router.push(`/rezervacia-skoly/${event.slug}`); }}
                                                className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded text-center whitespace-nowrap"
                                            >
                                                Rezervácia pre školy
                                            </button>
                                        )}

                                        {event.has_ticket_reservation && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); router.push(`/rezervacia-listka/${event.slug}`); }}
                                                className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded text-center whitespace-nowrap"
                                            >
                                                Rezervácia lístka
                                            </button>
                                        )}

                                        {/* Fallback if no specific buttons but available */}
                                        {!event.buy_ticket_link && !event.has_school_reservation && !event.has_ticket_reservation && event.status === 'available' && (
                                            <button className="px-6 py-2 border-2 border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors bg-white/50 tracking-widest pointer-events-none">
                                                Lístky
                                            </button>
                                        )}

                                        {/* Info button if nothing else */}
                                        {!event.buy_ticket_link && !event.has_school_reservation && !event.has_ticket_reservation && event.status !== 'available' && (
                                            <span className="text-xs font-bold uppercase text-black text-center tracking-widest">
                                                Viac info
                                            </span>
                                        )}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}

                {filteredEvents.length === 0 && (
                    <div className="py-20 text-center text-black">
                        <p className="text-xl">Pre mesiac {activeMonth} nie sú naplánované žiadne predstavenia v tejto kategórii.</p>
                        <p className="mt-2 text-sm">Skúste vybrať iný mesiac alebo kategóriu.</p>
                    </div>
                )}
            </div>
        </>
    );
}

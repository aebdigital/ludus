import { getProgramEventBySlug, getImageUrl, getProgramEventsByTitle } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ProgramGallery from '@/components/ProgramGallery';

export const revalidate = 0;

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = await getProgramEventBySlug(slug);

    if (!event) {
        // Debug info
        return (
            <div className="pt-32 text-center text-red-500 container mx-auto">
                <h1 className="text-2xl font-bold">Event not found (404)</h1>
                <div className="mt-4 p-4 bg-gray-100 rounded text-left inline-block">
                    <p>Checked Slug: <strong>{slug}</strong></p>
                    <p>Environment SITE_ID configured: <strong>{process.env.NEXT_PUBLIC_SITE_ID ? 'YES' : 'NO'}</strong></p>
                    <p className="text-xs text-gray-500 mt-2">Check console for more details</p>
                </div>
            </div>
        );
    }

    const relatedEvents = await getProgramEventsByTitle(event.title);

    const bgImage = event.image_path ? getImageUrl(event.image_path) : '/images/painting.jpg';

    // Prepare gallery images
    const galleryImages: string[] = [];
    // Only add gallery images first
    if (event.gallery_paths && event.gallery_paths.length > 0) {
        event.gallery_paths.forEach((path: string) => {
            galleryImages.push(getImageUrl(path));
        });
    }

    // Fallback: Use title image if gallery is empty
    if (galleryImages.length === 0 && event.image_path) {
        galleryImages.push(getImageUrl(event.image_path));
    }

    // Fallback if empty
    if (galleryImages.length === 0) {
        galleryImages.push('/images/painting.jpg');
    }

    return (
        <main className="min-h-screen pt-20">
            {/* Header Section: Split 50/50 */}
            <section className="flex flex-col lg:flex-row min-h-[85vh]">
                {/* Left: Content & Info - Program Color */}
                <div
                    className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative order-2 lg:order-1"
                    style={{ backgroundColor: event.color && event.color !== '#ffffff' ? event.color : '#f3f4f6' }}
                >
                    <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                        {/* Category */}
                        {event.category && (
                            <span className="inline-block px-3 py-1 border border-black/20 rounded-full text-sm font-bold uppercase tracking-widest bg-white/30 backdrop-blur-sm">
                                {event.category === 'skola-ludus' ? 'ŠKOLA LUDUS' : event.category.replace('-', ' ')}
                            </span>
                        )}

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            {event.title}
                        </h1>

                        {/* Subtitle */}
                        {event.subtitle && (
                            <p className="text-xl md:text-2xl opacity-80 font-light text-black/80">
                                {event.subtitle}
                            </p>
                        )}

                        {/* Info Grid (Date, Venue, etc) */}
                        <div className="grid grid-cols-2 gap-y-8 gap-x-12 py-8 border-t border-black/10 mt-8">
                            <div>
                                <span className="block text-xs opacity-50 uppercase tracking-widest mb-1">Dátum</span>
                                <div className="text-xl font-medium">
                                    {new Date(event.event_date).toLocaleDateString('sk-SK')}
                                </div>
                                <div className="text-lg opacity-80">
                                    {event.time}
                                </div>
                            </div>

                            <div>
                                <span className="block text-xs opacity-50 uppercase tracking-widest mb-1">Miesto</span>
                                <div className="text-xl font-medium">
                                    {event.venue}
                                </div>
                            </div>

                            {event.duration && (
                                <div>
                                    <span className="block text-xs opacity-50 uppercase tracking-widest mb-1">Dĺžka</span>
                                    <div className="text-xl font-medium">
                                        {event.duration}
                                    </div>
                                </div>
                            )}

                            {event.price && (
                                <div>
                                    <span className="block text-xs opacity-50 uppercase tracking-widest mb-1">Cena</span>
                                    <div className="text-xl font-medium">
                                        {event.price.match(/€|Eur/i) ? event.price : `${event.price} €`}
                                    </div>
                                </div>
                            )}

                            {(event.age_badge || event.age_info) && (
                                <div>
                                    <span className="block text-xs opacity-50 uppercase tracking-widest mb-1">Vekové odporúčanie</span>
                                    <div className="flex items-center gap-3">
                                        {event.age_badge && (
                                            <span className="inline-flex items-center justify-center h-8 px-3 rounded-full border-2 border-black text-sm font-bold bg-white shadow-sm">
                                                {event.age_badge}
                                            </span>
                                        )}
                                        {event.age_info && (
                                            <span className="text-lg font-medium opacity-90">{event.age_info}</span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {event.premiere && (
                                <div>
                                    <span className="block text-xs opacity-50 uppercase tracking-widest mb-1">Premiéra</span>
                                    <div className="text-xl font-medium">
                                        {event.premiere}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="pt-4 flex flex-col gap-3 items-start">
                            {/* Buy Ticket Link (External) */}
                            {event.buy_ticket_link && (
                                <a
                                    href={event.buy_ticket_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-lg w-full md:w-auto text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Kúpiť lístky
                                </a>
                            )}

                            {/* School Reservation */}
                            {event.has_school_reservation && (
                                <Link
                                    href={`/rezervacia-skoly/${event.slug}`}
                                    className="px-8 py-4 bg-white text-black border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded-lg w-full md:w-auto text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Rezervácia pre školy
                                </Link>
                            )}

                            {/* Ticket Reservation Form */}
                            {event.has_ticket_reservation && (
                                <Link
                                    href={`/rezervacia-listka/${event.slug}`}
                                    className="px-8 py-4 bg-white text-black border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded-lg w-full md:w-auto text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Rezervácia lístka
                                </Link>
                            )}

                            {/* Fallback */}
                            {!event.buy_ticket_link && !event.has_school_reservation && !event.has_ticket_reservation && (
                                event.status === 'available' ? (
                                    <button disabled className="px-8 py-4 bg-black/50 text-white font-bold uppercase tracking-widest rounded-lg w-full md:w-auto text-center cursor-not-allowed">
                                        Lístky
                                    </button>
                                ) : (
                                    <span className="inline-block text-xl font-bold uppercase px-6 py-3 border-2 border-black rounded bg-transparent">
                                        {event.status === 'vypredane' ? 'Vypredané' : event.info_text || 'Info'}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Right: Gallery/Image */}
                <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto bg-gray-200 order-1 lg:order-2">
                    <ProgramGallery
                        images={galleryImages}
                        title={event.title}
                    />
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

                    {/* Left Column: Description */}
                    <div className="prose prose-lg max-w-none">
                        <h3 className="text-4xl font-bold font-heading mb-8" style={{ fontFamily: 'var(--font-heading)' }}>O predstavení</h3>
                        {event.description ? (
                            <div className="whitespace-pre-wrap">{event.description}</div>
                        ) : (
                            <p className="text-gray-500 italic">Bez popisu</p>
                        )}


                    </div>

                    {/* Middle Column: Teams (Cast & Crew) */}
                    <div className="space-y-12">
                        {/* Cast */}
                        {event.cast_members && event.cast_members.length > 0 && (
                            <div>
                                <h3 className="text-4xl font-bold font-heading mb-8 border-b border-black pb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Obsadenie
                                </h3>
                                <ul className="space-y-2">
                                    {event.cast_members.map((member, i) => (
                                        <li key={i} className="font-medium text-lg">{member}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Team */}
                        {event.team_members && event.team_members.length > 0 && (
                            <div>
                                <h3 className="text-4xl font-bold font-heading mb-8 border-b border-black pb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Inscenačný tím
                                </h3>
                                <ul className="space-y-3">
                                    {event.team_members.map((member, i) => (
                                        <li key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-1">
                                            <span className="text-gray-500 text-sm">{member.role}</span>
                                            <span className="font-medium">{member.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Program Schedule */}
                    <div className="space-y-12">
                        {relatedEvents.length > 0 && (
                            <div>
                                <h3 className="text-4xl font-bold font-heading mb-8 border-b border-black pb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Program
                                </h3>
                                <div className="space-y-8">
                                    {relatedEvents.map(evt => (
                                        <div key={evt.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                            <div className="font-bold text-lg mb-2 capitalize">
                                                {new Date(evt.event_date).toLocaleDateString('sk-SK', { weekday: 'long', day: 'numeric', month: 'long' })} {evt.time}
                                            </div>

                                            <div className="flex justify-between items-center text-gray-600 mb-4">
                                                <span>{evt.venue}</span>
                                                {evt.price && (
                                                    <span className="font-medium text-black">
                                                        {evt.price.match(/€|Eur/i) ? evt.price : `${evt.price} €`}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {evt.has_school_reservation && (
                                                    <Link href={`/rezervacia-skoly/${evt.slug}`} className="py-3 px-4 border-2 border-black text-center text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                                        Rezervácia pre školy
                                                    </Link>
                                                )}
                                                {evt.buy_ticket_link ? (
                                                    <a href={evt.buy_ticket_link} target="_blank" rel="noreferrer" className="py-3 px-4 border-2 border-black bg-white text-black text-center text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                                        Kúpiť lístok
                                                    </a>
                                                ) : evt.has_ticket_reservation ? (
                                                    <Link href={`/rezervacia-listka/${evt.slug}`} className="py-3 px-4 border-2 border-black text-center text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                                        Rezervácia lístka
                                                    </Link>
                                                ) : null}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

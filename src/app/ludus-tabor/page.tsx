import { Metadata } from 'next';
import LudusTaborClient from './LudusTaborClient';
import GalleryPreview from '@/components/GalleryPreview';

export const metadata: Metadata = {
    title: "Ludus Tábor Bratislava - Letný divadelný tábor",
    description: "Denný divadelný tábor v Bratislave pre deti a mládež od 9 do 16 rokov. Týždeň plný hier, herectva a nových priateľstiev zakončený predstavením.",
    openGraph: {
        title: "Ludus Tábor Bratislava - Letný divadelný tábor",
        description: "Zážitkové leto v Bratislave. Spoznaj svet divadla v Luduse!",
    }
};

export default function LudusTaborPage() {
    return <LudusTaborClient galleryPreview={<GalleryPreview category="ludus-tabor" href="/ludus-tabor/galeria" limit={3} />} />;
}

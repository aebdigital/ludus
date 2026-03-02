import { Metadata } from 'next';
import LudusAcademyClient from './LudusAcademyClient';
import GalleryPreview from '@/components/GalleryPreview';

export const metadata: Metadata = {
    title: "Ludus Academy Bratislava - Herecké kurzy pre dospelých",
    description: "Divadelné workshopy, improvizačné kurzy a firemné tímbildingy v Bratislave. Objavte v sebe človeka hravého (Homo Ludens) a rozvíjajte svoju kreativitu.",
    openGraph: {
        title: "Ludus Academy Bratislava - Kurzy a workshopy pre dospelých",
        description: "Herectvo, improvizácia a tvorivé písanie v centre Bratislavy. Zlepšite svoje prezentačné schopnosti a kreativitu formou hry.",
    }
};

export default function LudusAcademyPage() {
    return <LudusAcademyClient galleryPreview={<GalleryPreview category="ludus-academy" href="/ludus-academy/galeria" limit={3} />} />;
}

import { Metadata } from 'next';
import SkolaLudusClient from './SkolaLudusClient';
import GalleryPreview from '@/components/GalleryPreview';

export const metadata: Metadata = {
    title: "Škola Ludus Bratislava - Súkromná umelecká škola",
    description: "SZUŠ Ludus v Bratislave s 55-ročnou tradíciou. Ponúkame literárno-dramatický odbor pre deti od 8 rokov a mládež. Rozvíjame kreativitu a osobnosť formou hry.",
    openGraph: {
        title: "Škola Ludus Bratislava - Súkromná umelecká škola",
        description: "Rozvíjame detský talent cez divadlo a hru. Pridajte sa k našim úspešným absolventom v srdci Bratislavy.",
    }
};

export default function SkolaLudusPage() {
    return <SkolaLudusClient galleryPreview={<GalleryPreview category="skola-ludus" href="/skola-ludus/galeria" limit={3} />} />;
}

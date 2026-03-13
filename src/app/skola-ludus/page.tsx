import { Metadata } from 'next';
import SkolaLudusClient from './SkolaLudusClient';
import GalleryPreview from '@/components/GalleryPreview';

export const metadata: Metadata = {
    title: "Škola Ludus Bratislava - Súkromná základná umelecká škola",
    description: "SZUŠ Ludus v Bratislave s 55-ročnou tradíciou. Ponúkame literárno-dramatický odbor pre deti od 8 rokov a pre mládež. Formou hry rozvíjame osobnosť a kreativitu.",
    openGraph: {
        title: "Škola Ludus Bratislava - Súkromná základná umelecká škola",
        description: "SZUŠ Ludus v Bratislave s 55-ročnou tradíciou. Ponúkame literárno-dramatický odbor pre deti od 8 rokov a pre mládež. Formou hry rozvíjame osobnosť a kreativitu.",
    }
};

export default function SkolaLudusPage() {
    return <SkolaLudusClient galleryPreview={<GalleryPreview category="skola-ludus" href="/skola-ludus/galeria" limit={3} />} />;
}

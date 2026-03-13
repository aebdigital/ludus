import { Metadata } from 'next';
import LudusAcademyClient from './LudusAcademyClient';
import GalleryPreview from '@/components/GalleryPreview';

export const metadata: Metadata = {
    title: "Ludus Academy Bratislava - Herecké a improvizačné kurzy pre dospelých",
    description: "Divadelné kurzy, kurzy tvorivého písania, firemné workshopy a tímbildingy pre dospelých. Objavte v sebe človeka hravého (Homo Ludens) a rozvíjajte svoju kreativitu.",
    openGraph: {
        title: "Ludus Academy Bratislava - Herecké a improvizačné kurzy pre dospelých",
        description: "Divadelné kurzy, kurzy tvorivého písania, firemné workshopy a tímbildingy pre dospelých. Objavte v sebe človeka hravého (Homo Ludens) a rozvíjajte svoju kreativitu.",
    }
};

export default function LudusAcademyPage() {
    return <LudusAcademyClient galleryPreview={<GalleryPreview category="ludus-academy" href="/ludus-academy/galeria" limit={3} />} />;
}

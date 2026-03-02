import { Metadata } from 'next';
import KontaktClient from './KontaktClient';

export const metadata: Metadata = {
    title: "Kontakt | LUDUS Bratislava - Divadelné centrum",
    description: "Spojte sa s nami. Kontaktné informácie pre Škola Ludus, Divadlo Ludus, Ludus Academy a letné tábory v Bratislave.",
};

export default function KontaktPage() {
    return <KontaktClient />;
}

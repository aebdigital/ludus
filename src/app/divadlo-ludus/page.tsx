import { getProgramEvents } from '@/lib/api';
import { Metadata } from 'next';
import DivadloLudusClient from './DivadloLudusClient';

export const metadata: Metadata = {
    title: "Divadlo LUDUS Bratislava - Divadelná tvorba mladých pre mladých",
    description: "Nezávislá scéna v Bratislave, ktorá spája svet mladých s profesionálnym umením. Repertoár, aktivity a program v našom novom priestore Blackbox.",
    openGraph: {
        title: "Divadlo LUDUS Bratislava - Divadelná tvorba mladých pre mladých",
        description: "Nezávislá scéna v Bratislave, ktorá spája svet mladých s profesionálnym umením. Repertoár, aktivity a program v našom novom priestore Blackbox.",
    }
};

export const revalidate = 60;

export default async function DivadloLudusPage() {
    const events = await getProgramEvents('divadlo-ludus', true);
    return <DivadloLudusClient events={events} />;
}

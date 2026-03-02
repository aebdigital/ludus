import { getProgramEvents } from '@/lib/api';
import { Metadata } from 'next';
import DivadloLudusClient from './DivadloLudusClient';

export const metadata: Metadata = {
    title: "Divadlo LUDUS Bratislava - Profesionálna tvorba pre mladých",
    description: "Nezávislá scéna v Bratislave, ktorá spája svet mladých s profesionálnym umením. Repertoár, aktivity a program v našom novom priestore Blackbox.",
    openGraph: {
        title: "Divadlo LUDUS Bratislava - Program a repertoár",
        description: "Príďte zažiť divadlo v modernej podobe. Predstavenia pre mladých, kde hra nemá hranice v srdci Bratislavy.",
    }
};

export const revalidate = 60;

export default async function DivadloLudusPage() {
    const events = await getProgramEvents('divadlo-ludus', true);
    return <DivadloLudusClient events={events} />;
}

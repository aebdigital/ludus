import { Metadata } from 'next';
import HistoriaClient from './HistoriaClient';

export const metadata: Metadata = {
    title: "História divadla LUDUS Bratislava - Viac ako 55 rokov tradície",
    description: "Viac ako 55 rokov tradície divadla a školy LUDUS v Bratislave. Spoznajte našich zakladateľov, manifest 'Hry' a bohatú históriu našich inscenácií.",
};

export default function HistoriaPage() {
    return <HistoriaClient />;
}

import { Metadata } from 'next';
import PrihlaskaClient from './PrihlaskaClient';

export const metadata: Metadata = {
    title: "Prihláška a konkurz",
    description: "Elektronická prihláška do SZUŠ LUDUS a informácie o konkurze pre školský rok 2026/2027. Pridajte sa k nám a objavte svet divadla.",
};

export default function PrihlaskaPage() {
    return <PrihlaskaClient />;
}

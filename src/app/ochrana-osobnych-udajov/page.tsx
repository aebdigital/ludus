import { Metadata } from 'next';
import GDPRClient from './GDPRClient';

export const metadata: Metadata = {
    title: "Ochrana osobných údajov",
    description: "Zásady ochrany osobných údajov (GDPR) divadelnej školy a divadla LUDUS v Bratislave. Informácie o tom, ako spracúvame vaše údaje.",
    robots: { index: false, follow: true }, // Usually no need to index legal pages highly, but follow is fine
};

export default function OchranaOsobnychUdajovPage() {
    return <GDPRClient />;
}

import { Metadata } from 'next';
import LudusTaborClient from './LudusTaborClient';

export const metadata: Metadata = {
    title: "Ludus Tábor Bratislava - Letný divadelný tábor",
    description: "Denný divadelný tábor v Bratislave pre deti a mládež od 8 do 15 rokov. Týždeň plný hier, herectva a nových priateľstiev zakončený predstavením.",
    openGraph: {
        title: "Ludus Tábor Bratislava - Letný divadelný tábor",
        description: "Zážitkové leto v Bratislave. Spoznaj svet divadla v Luduse!",
    }
};

export default function LudusTaborPage() {
    return <LudusTaborClient />;
}

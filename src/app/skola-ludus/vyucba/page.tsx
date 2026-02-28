import Image from 'next/image';
import Button from '@/components/Button';

export default function VyucbaPage() {
    return (
        <>
            <section
                className="h-[40vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/skola/IMG_1789.webp')", backgroundPosition: 'center 35%' }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Výučba
                </h1>
            </section>

            <div className="w-[95%] max-w-[1400px] mx-auto py-12">
                <main className="space-y-24">
                    {/* Block 1: VÝUČBA + photo */}
                    <div className="grid grid-cols-[1fr_500px] gap-12 items-stretch max-lg:grid-cols-1">
                        <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <h2
                                className="text-[2.5rem] mb-8 border-b-2 border-[#f47f44] pb-2 inline-block"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                SKOLA LUDUS: VÝUČBA
                            </h2>
                            <div className="prose prose-lg text-[#000] max-w-none space-y-6">
                                <p>
                                    Výučba literárno- dramatického odboru prebieha skupinovo, pravidelne raz týždenne. Jednu skupinu / jeden ročník tvorí maximálne <strong>8 – 12 žiakov</strong>.
                                </p>
                                <div className="space-y-2">
                                    <p>Najmladší žiaci sú vo veku <strong>8 rokov</strong>.</p>
                                    <p>Najstarší žiaci ktorých prijímame do SZUŠ LUDUS sú vo veku <strong>16 rokov</strong>.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-xl space-y-4">
                                    <p>
                                        <strong>Žiaci do 14 rokov</strong> mávajú výučbu, ktorá prebieha v časoch <strong>15.00-17.15</strong> alebo <strong>15.30-17.45 hod.</strong>
                                    </p>
                                    <p>
                                        <strong>Žiaci nad 14 rokov a starší</strong> zvyčajne mávajú výučbu v čase od <strong>17:15-19:30</strong> alebo <strong>17.45-20.00 hod.</strong>
                                    </p>
                                    <p className="italic text-black pt-2 border-t border-gray-200">
                                        Konkrétne dni výučby sú dané vždy na začiatku školského roka.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/images/skola/IMG_1821.webp"
                            alt="Výučba"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Block 2: photo + Javiskový pohyb */}
                    <div className="grid grid-cols-[500px_1fr] gap-12 items-stretch max-lg:grid-cols-1">
                        <Image
                            src="/images/skola/IMG_8911.webp"
                            alt="Javiskový pohyb"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover rounded-2xl shadow-xl max-lg:order-first"
                        />
                        <div className="space-y-12">
                            <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                                <h2
                                    className="text-[2.5rem] mb-6 border-b-2 border-[#f47f44] pb-2 inline-block"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    Javiskový pohyb
                                </h2>
                                <div className="prose prose-lg text-[#000] max-w-none space-y-6">
                                    <p>
                                        Žiaci majú okrem pravidelnej výučby možnosť navštevovať aj hodiny <strong>javiskového pohybu</strong>, ktorý sa vyučuje v blokoch a termíny sú dopredu dané na celý polrok.
                                    </p>
                                    <p>
                                        Výučba javiskového pohybu prebieha v soboty a vychádza to časovo 1-krát v mesiaci. Termíny sú určené na pol roka dopredu.
                                    </p>
                                    <p>
                                        Čas výučby javiskového pohybu sa odvíja od veku žiakov a všetky informácie sa dajú zistiť prostredníctvom emailu: <a href="mailto:jakubludus@gmail.com" className="hover:underline font-bold">jakubludus@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-black text-white p-12 rounded-xl relative overflow-hidden">
                                <h2
                                    className="text-[2.5rem] mb-6 border-b-2 border-[#f47f44] pb-2 inline-block text-white"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    Ludusácke divadelné sústredenie
                                </h2>
                                <p className="text-[1.1rem] opacity-90 leading-relaxed">
                                    Raz ročne v priebehu apríl-máj zvykneme organizovať dvojdňové ludusácke sústredenie, kde sa majú žiaci možnosť spoznať s ďalšími ludusákmi a intenzívne tvoriť a rozvíjať svoje záverečné ročníkové predstavenie.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Block 3: Tvorivé písanie + photo */}
                    <div className="grid grid-cols-[1fr_500px] gap-12 items-stretch max-lg:grid-cols-1">
                        <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <h2
                                className="text-[2.5rem] mb-6 border-b-2 border-[#f47f44] pb-2 inline-block"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Hodiny tvorivého písania
                            </h2>
                            <div className="prose prose-lg text-[#000] max-w-none space-y-6">
                                <p>
                                    Žiaci SZUŠ LUDUS sa môžu prihlásiť na <strong>hodiny tvorivého písania</strong>. Tréningom tvorivého písania sa žiaci učia rozvíjať svoje literárne zručnosti, zoznamujú sa s rôznymi štýlmi písania a rozvíjajú kreatívne myslenie prostredníctvom písaného slova.
                                </p>
                                <div className="bg-[#f47f44]/10 border-l-4 border-[#f47f44] p-6 rounded-r-xl">
                                    <p className="font-bold mb-2">
                                        Na hodiny tvorivého písania sa môžu prihlásiť aj deti a tínedžeri, ktorí nenavštevujú LDO našej školy.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 bg-gray-50 p-8 rounded-xl">
                                    <ul className="space-y-3">
                                        <li>• Žiaci sú rozdelení do skupín podľa veku.</li>
                                        <li>• Záujem dávame do pozornosti vždy na začiatku školského roka.</li>
                                        <li>• Výučba prebieha 1-krát týždenne / 3 vyučovacie hodiny.</li>
                                        <li>• Suma na mesiac je <strong>25,- euro</strong></li>
                                    </ul>
                                    <div className="space-y-3">
                                        <p className="font-bold uppercase text-sm text-black tracking-wider">Pedagógovia</p>
                                        <p className="font-bold text-xl">Mgr. art Michal Rovňák</p>
                                        <p className="font-bold text-xl">Mgr. art Soňa Borušovičová</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/images/skola/IMG_4346.webp"
                            alt="Tvorivé písanie"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </main>
            </div>
        </>
    );
}

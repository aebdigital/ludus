export interface StaffMember {
    name: string;
    role?: string;
    image: string;
    bio?: React.ReactNode;
}

export const staffData: Record<string, StaffMember> = {
    "Ada Juhásová": {
        name: "Ada Juhásová",
        image: "/pedagogovia/ADA JUHASOVÁ.webp",
        bio: (
            <>
                <p>Študovala na konzervatóriu v Košiciach a následne vyštudovala Akadémiu umení v Banskej bystrici. Zúčastnila sa na Erasme vo Varšave a na stážach v zahraničí. Pedagogickej činnosti sa venuje už dlhšie. Učila na rôznych ZUŠ. V súčasnosti pôsobí ako herečka v mestskom divadle Žilina, účinkuje v TV a vo filme.</p>
            </>
        )
    },
    "Janko Mikuš": {
        name: "Mgr. art Janko Mikuš",
        image: "/pedagogovia/JANKO MIKUŠ.webp",
        bio: (
            <>
                <p>Janko vyštudoval réžiu na JAMU v Brne. Režíroval v Divadle Husa na provázku, Hadivadle, Divadle Polárka i v Národnom divadle v Košiciach.</p>
                <p>V súčasnosti je pedagógom Ateliéru Fyzické divadlo na JAMU v Brne a tiež pedagógom v SZUŠ LUDUS, kde učí tínedžerov.</p>
                <p>Dlhodobo spolupracuje s Rádiom Devín ako autor a režisér rozhlasových hier. Spoluzaložil Kultúrne centrum Diera do sveta v Liptovskom Mikuláši.</p>
                <p>Pracuje ako zdravotný klaun pre OZ Červený nos Clowndoctors.</p>
                <p>V poslednom tvorivom období sa venuje prevažne nezávislému autorskému filmu.</p>
            </>
        )
    },
    "Naďa Gášeková": {
        name: "Bc. Naďa Gášeková",
        image: "/pedagogovia/NAĎA GÁŠEKOVÁ.webp",
        bio: (
            <>
                <p>Naďa je aktuálne v poslednom 5. ročníku. Na VŠMU. Účinkuje v inscenáciách divadla Lab, Slovenského národného divadla a v inscenácii Požadujme nemožné divadla DPM. Stvárnila už aj niekoľko menších postáv v televíznych seriáloch a taktiež hrala v rôznych študentských filmoch.</p>
            </>
        )
    },
    "Daniel Zwach": {
        name: "Bc. Daniel Zwach",
        image: "/pedagogovia/DANIEL ZWACH.webp",
        bio: (
            <>
                <p>Svoju umeleckú cestu začínal ako študent v Luduse. Skúsenosti, ktoré tu získal ho posunuli k štúdiu na Vysokej škole múzických umení. Je v absolventskom ročníku. Počas štúdia dosiahol úspech aj na akademickej pôde, keď získal ocenenie Reflektor za medzikatedrovú spoluprácu. Už ako študent dostal príležitosť účinkovať na doskách SND, ako aj v ďalších divadlách. Postupne sa dostal aj pred kameru a účinkoval v rôznych televíznych seriáloch. Vo voľnom čase sa venuje hudbe a je členom skupiny TheAnyOne.</p>
            </>
        )
    },
    "Katarína Baranová": {
        name: "Mgr. art Katarína Baranová ArtD.",
        image: "/pedagogovia/KATARÍNA BARANOVA.webp",
        bio: (
            <>
                <p className="font-bold mb-2">ZAKLADATEĽKA LUDUS ACADEMY</p>
                <p>V divadle sa ocitla hádam ešte skôr, ako začala chodiť. Už je to viac ako 50 rokov keď jej rodičia Xénia Gracová Kubová a Peter Kuba založili divadelnú školu a divadlo LUDUS. Celý Katkin život je tak spätý s herectvom a dramatickou výchovou.</p>
                <p>Vyštudovala bábkoherectvo a ako herečka účinkovala v divadle, v televíznych seriáloch a reklamách. Od 19 rokov aktívne pôsobí ako pedagóg dramatickej výchovy v škole LUDUS. 6 rokov pôsobila aj na VŠMU ako pedagóg DPŠ, kde učila didaktiku dramatickej výchovy. V súčastnosti učí didaktiku na Strednej pedagogickej škole. Posledných 15 rokov Katka aktívne využíva svoju kreativitu v OZ Červený nos - Clowndoctors, kde pôsobí ako zdravotný klaun, umelecký kouč a lektor.</p>
                <p>Manažérske a organizačné zručnosti uplatňuje Katka od roku 2010 ako riaditeľka SZŠU LUDUS v ktorej momentálne pôsobí viac ako 20 pedagógov a navštevuje ju viac ako 350 detí a tínedžerov. Katka je taktiež autorka viacerých vzdelávacích programov, medzinárodných vzdelávacích projektov, workshopov, a je autorkou knihy <a href="/ludus-academy/kniha" className="text-black font-bold underline hover:text-[#f47f44] transition-colors uppercase">TVORÍM, TEDA SOM</a>. Tá je práve zameraná na kreatívne hry a cvičenia.</p>
                <p>Na svojej ceste pomohla množstvu ľudí od detí až po dospelých zlepšiť svoje zručnosti a žiť kreatívnejší, pestrejší a šťastnejší život. Opierajúc sa o 50 ročnú tradíciu LUDUSu a 25 ročné skúsenosti pedagóga, Katka zakladá v roku 2022 LUDUS ACADEMY. So svojim tímom profesionálnych pedagógov sú pripravení odovzdať Vám to najlepšie.</p>
            </>
        )
    },
    "Jozef Jurčišin-Kukľa": {
        name: "Mgr. art Jozef Jurčišin-Kukľa",
        image: "/pedagogovia/JOŽKO JURČIŠIN KUKLA.webp",
        bio: (
            <>
                <p>Jožko vyštudoval VŠMU odbor herectvo a študoval aj Doplňujúce pedagogické minimum na VŠMU. Okrem divadla a TV projektov sa venuje aj pedagogickej činnosti a učí v SZUŠ LUDUS tvorivú dramatiku. Je zdravotným klaunom Červený nos Clowndoctors. V LUDUS ACADEMY rieši komunikáciu s klientami a koordináciu všetkých termínov a lektorov.</p>
                <p>Ako lektora Ludus Academy ho môžete stretnúť na hereckých kurzoch, improvizačných kurzoch pre dospelých a workshopoch pre ZŠ A SŠ.</p>
            </>
        )
    },
    "Lenka Libjaková": {
        name: "Mgr. art Lenka Libjaková",
        image: "/pedagogovia/LENKA LIBJAKOVÁ.webp",
        bio: (
            <>
                <p>Lenka vyštudovala najprv hudobno- dramatické konzervatórium v Martine a následne prešla na VŠMU, kde začala na bábkohereckom odbore a skončila na herectve. Vyštudovala aj Doplňujúce pedagogické minimum na VŠMU. Pôsobí vo viacerých divadelných zoskupeniach (Stoka, Uhol_92, DPM ) a hosťuje vo viacerých divadlách. Jej hlas môžete poznať aj z dabingu. V SZUŠ LUDUS učí tvorivú dramatiku a v LUDUS ACADEMY je lektorkou hereckých kurzov a workshopov pre ZŠ a SŠ.</p>
            </>
        )
    },
    "Ladislav Ladomirjak": {
        name: "Mgr. art Ladislav Ladomirjak",
        image: "/pedagogovia/Laci Ladomirjak.webp",
        bio: (
            <>
                <p>Laci je herec, muzikant a zdravotný klaun, ktorý sa vyprofiloval najmä vďaka pôsobeniu v Divadle Alexandra Duchnoviča v Prešove, kde strávil viac než dekádu. Študoval hru na gitare na Konzervatóriu v Žiline, neskôr absolvoval herectvo na Akadémii umenia v Banskej Bystrici a po škole zakotvil v rusínskom divadle. Od roku 2015 vedie kapelu Rusnack's, ktorá originálne interpretuje rusínske ľudové piesne vo funky šate. Popri profesionálnej hereckej dráhe pôsobí aj ako zdravotný klaun v organizácii Červený Nos – Clowndoctors.</p>
            </>
        )
    },
    "Jakub Ružička": {
        name: "Mgr. art Jakub Ružička",
        image: "/pedagogovia/JAKUB RUŽIČKA.webp",
        bio: (
            <>
                <p>Kubo študoval muzikálové herectvo na Bratislavskom Štátnom Konzervatóriu. Pôsobí vo viacerých divadelných zoskupeniach ako Túlavé divadlo, divadlo Ludus, Nová scéna a účinkuje v rôznych TV projektoch. Je zdravotným klaunom Červený nos Clowndoctors. Často dabuje. V SZUŠ LUDUS je okrem pedagóga tvorivej dramatiky aj na pozícii zástupcu riaditeľa a v LUDUS ACADEMY pôsobí ako lektor hereckých kurzov a workshopov pre ZŠ A SŠ.</p>
            </>
        )
    },
    "Michal Rovňák": {
        name: "Mgr. art Michal Rovňák",
        image: "/pedagogovia/MICHAL ROVŇÁK.webp",
        bio: (
            <>
                <p>Mišove začiatky s divadlom sa spájajú s Ludusom, ktorý navštevoval už ako dieťa. V umeleckej dráhe pokračoval na VŠMU na herectve. Jeho vášňou okrem divadla je scenáristika. Práve preto učí v SZUŠ LUDUS okrem tvorivej dramatike aj tvorivé písanie. V SZUŠ zároveň pôsobí aj ako manager školy. Hráva v divadle a v TV a v LUDUS ACADEMY je lektorom hereckých kurzov a lektorom kurzu tvorivého písania.</p>
            </>
        )
    },
    "Jakub Rek": {
        name: "Mgr. art Jakub Rek",
        image: "/pedagogovia/JAKUB REK.webp",
        bio: (
            <>
                <p>Bývalý žiak školy Ludus.</p>
                <p>Štúdium na JAMU v Brne odbor činoherné herectvo</p>
                <p>12 rokov štúdium na SZUŠ LUDUS</p>
                <p>Úväzok v Divadle Husa na provázku 2014-2016</p>
                <p>Účinkovanie v seriáloch a TV</p>
                <p>Účinkovanie v Národnom divadle Brno, Mahenova činohra.</p>
            </>
        )
    },
    "Mirka Durná": {
        name: "Mgr. art Miroslava Durná ArtD.",
        image: "/pedagogovia/MIRKA DURNÁ.webp",
        bio: (
            <>
                <p>Mirka vyštudovala VŠMU, odbor herectvo. Urobila si doplňujúce pedagogické minimum na VŠMU a v súčasnosti je doktorantkou na VŠMU, kde učí techniku hlasu a javiskový prejav. V súčasnosti spolupracuje s divadelným centrom a divadlom Ludus. Mirka okrem divadla učí v SZUŠ LUDUS tvorivú dramatiku a v LUDUS ACADEMY je lektorkou hereckých kurzov a workshopov pre ZŠ a SŠ.</p>
            </>
        )
    },
    "Edita Koprivčevič Borsová": {
        name: "Mgr. art Edita Koprivčevič Borsová",
        image: "/pedagogovia/Edita Koprivčević Borsová.webp",
        bio: (
            <>
                <p>Editka odmalička chodila do školy LUDUS. Neskôr išla študovať na VŠMU bábkoherectvo, kde pôsobila niekoľko rokov aj ako pedagóg. Spolupracuje s rôznymi divadelnými zoskupeniami a účinkovala v rôznych TV projektoch či filmoch. Editka je aj zdravotným klaunom v OZ Červený nos Clowndoctors</p>
                <p>Rada robí rozhlasové hry a dabing a v SZUŠ LUDUS pôsobí dlhé roky ako pedagóg tvorivej dramatiky. V LUDUS ACADEMY je lektorkou hereckých kurzov, improvizačných kurzov a workshopov pre ZŠ a SŠ.</p>
            </>
        )
    },
    "Katarína Gurová": {
        name: "Mgr. art Katarína Gurová",
        image: "/pedagogovia/KATARÍNA GUROVÁ.webp",
        bio: (
            <>
                <p>Kaťuša, ako ju všetci voláme, má vyštudovaný hudobno-dramatický odbor na Košickom štátnom konzervatóriu a následne Akadémiu umení v B. Bystrici. Pôsobila v bábkovom divadle na rázcestí,v Divadelnom centre, v rozhlase a v nezávislých projektoch v Banskej Bystrici. Je zdravotným klaunom v OZ Červený nos Clowndoctors a spolupracuje s rôznymi divadelnými zoskupeniami najmä s nezávislým divadlom Uhol_92. V SZUŠ Ludus učí tvorivú dramatiku a javiskový pohyb a v LUDUS ACADEMY je lektorkou hereckých kurzov.</p>
            </>
        )
    },
    "Norman Šáro": {
        name: "Mgr. art Norman Šáro",
        image: "/pedagogovia/NORO ŠARO.webp",
        bio: (
            <>
                <p>V profesionálnych divadlách sa pohybuje od roku 2001. Po ukončení magisterského štúdia herectva na divadelnej fakulte VŠMU v Bratislave sa zamestnal v Mestskom divadle Žilina. Dnes ho môžete vidieť napr. na javisku v muzikáli „Kubo". Svoje hudobné vlohy vložil do svojho projektu Abnorman ako DJ, ale aj ako kapelník hudobného zoskupenia Bluefields Rockers. Moderoval niekoľko veľkých hudobných festivalov a udalostí po celom Slovensku. V SZUŠ Ludus učí tvorivú dramatiku a v LUDUS ACADEMY je lektorom hereckých kurzov.</p>
            </>
        )
    },
    "Kamil Kollárik": {
        name: "Mgr. art Kamil Kollárik",
        image: "/pedagogovia/KAMIL KOLÁRIK.webp",
        bio: (
            <>
                <p>Bývalý žiak školy Ludus.</p>
                <p>Štúdium štátne konzervatórium Bratislava a následne VŠMU, odbor bábkoherectvo.</p>
                <p>Hosťovanie v divadle LUDUS, Dezorzovo lútkové divadlo, Mestské divadlo.</p>
                <p>Účinkovanie vo filmoch a v TV.</p>
                <p>Pôsobí aj ako herecký detský kouč v TV a venuje sa pedagogickej činnosti.</p>
            </>
        )
    },
    "Simon Fico": {
        name: "Bc. Simon Fico",
        image: "/pedagogovia/SIMON FICO.webp",
        bio: (
            <>
                <p>Bývalý žiak školy Ludus.</p>
                <p>Absolvoval štúdium na SZUŠ Ludus a následne štúdium na VŠMU, odbor bábkoherectvo.</p>
                <p>Bol členom umeleckého súboru Bratislavského bábkového divadla.</p>
                <p>Hosťovanie: divadlo Ludus, Mestské divadlo P.O. Hviezdoslava, divadelná formácia UŽ, BD Nitra.</p>
                <p>Účinkovanie v seriáloch, TV projektoch a filmoch. Aktívne sa venuje aj dabingu.</p>
            </>
        )
    },
    "Richard Labuda": {
        name: "Bc. Rišo Labuda",
        image: "/pedagogovia/RICHARD LABUDA.webp",
        bio: (
            <>
                <p>Rišo sa odmalička venoval herectvu. Ako tínedžer navštevoval aj SZUŠ LUDUS a rozvíjal tu svoje umelecké schopnosti a neskôr pokračoval na VŠMU. Má za sebou mnoho skúseností pred kamerou a aj v divadle. Účinkoval v rôznych TV seriáloch a filmoch. Na detskom filmovom a televíznom festivale Otu Hofmana v Ostrove získal cenu Zlatý dudok za najlepší chlapčenský výkon vo filme Rukojemník. V súčasnosti ho môžete vidieť na doskách SND a v divadle DPM.</p>
            </>
        )
    },
    "Ria Benkovská": {
        name: "Mgr. art Ria Benkovská",
        image: "/pedagogovia/RIA BENKOVSKÁ.webp",
        bio: (
            <>
                <p>Ria vyštudovala na VŠMU odbor bábkoherectvo a neskôr študovala Doplňujúce pedagogické minimum na VŠMU. Založila Divadlo Babena, kde písala a tvorila detské inscenácie. Má mnoho divadelných skúseností z oblasti detského divadla. Dlhé roky pôsobí aj ako Zdravotný klaun v OZ Červený nos.</p>
            </>
        )
    },
    "Soňa Borušovičová": {
        name: "Mgr. art Soňa Borušovičová",
        image: "/pedagogovia/Sona-borusovicova.webp",
        bio: (
            <>
                <p>Písaniu sa venuje už 27 rokov. Vyštudovala filmovú a televíznu dramaturgiu a scenáristiku na FTF VŠMU. Písala scenáre pre deti a mládež aj pre dospelých, príbehy na pokračovanie, aj komiksový príbeh s veľmi sexi názvom, ktorý bol v skutočnosti o myšiach. Dva roky bola kmeňovou autorkou seriálu Ordinácia v ružovej záhrade. Napísala a vydala knihu pre deti Gregor – rozprávka o veľkom putovaní. Ako redaktorka legendárneho internetového magazínu inzine.sk sa naučila, ako komunikovať s autormi a baví ju to dodnes. Redigovala aj knihy pre vydavateľstvo Slovart.</p>
            </>
        )
    },
    "Viktória Šuplatová": {
        name: "Mgr. art Viktória Šuplatová",
        image: "/pedagogovia/VIKTÓRIA ŠUPLATOVÁ.webp",
        bio: (
            <>
                <p>Viki začínala svoje umelecké smerovanie v SZUŠ LUDUS, kam chodila mnoho rokov. Neskôr vyštudovala VŠMU odbor herectvo. V súčasnosti pôsobí v divadle Astorka, kde ju môžete vidieť v rôznych divadelných inscenáciách. Účinkuje aj v iných divadlách a v TV projektoch. Natočila už aj niekoľko filmov.</p>
            </>
        )
    },
    "David Kakaš": {
        name: "Mgr. Art David Kakaš",
        image: "/pedagogovia/kakas.webp",
        bio: (
            <>
                <p>David začínal svoje umelecké smerovanie v SZUŠ LUDUS už v tinedžerskom veku. Neskôr vyštudoval odbor herectvo na VŠMU. Účinkoval v SND, spolupracuje na letných Shakespearovských slávnostiach, účinkuje v divadle Andreja Bagara v Nitre a v rôznych TV projektoch.</p>
            </>
        )
    },
    "Laura Jankurová": {
        name: "Mgr. art Laura Jankurová",
        image: "/pedagogovia/jankurova.webp",
        bio: (
            <>
                <p>Laura študovala konzervatórium v Prešove a neskôr herectvo na VŠMU. Účinkovala vo viacerých divadlách na Slovensku a v súčasnosti ju môžete vidieť v niektorých inscenáciách v SND. Účinkuje aj v rôznych TV projektoch.</p>
            </>
        )
    }
};

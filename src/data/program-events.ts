export interface ProgramEvent {
    slug: string;
    day: string;
    dayName: string;
    time: string;
    title: string;
    subtitle?: string;
    author?: string;
    ageBadge: string;
    venue: string;
    status: 'Vypredané' | 'available' | 'info';
    infoText?: string;
    color: string;
    price: string | null;
    month: string;
    image: string; // Detail hero image
    description: string;
    details: {
        duration: string;
        age: string;
        premiere: string;
    };
    cast: string[];
    team: { role: string; name: string }[];
}

export const programEvents: ProgramEvent[] = [
    {
        slug: 'tajny-dennik-adriana-mola-jan-13',
        day: '13. 1.',
        dayName: 'utorok',
        time: '11:00',
        title: 'Tajný denník Adriana Mola',
        author: 'Sue Townsendová',
        ageBadge: '13+',
        venue: 'Divadlo Malá scéna',
        status: 'Vypredané',
        color: '#ffffff', // White
        price: null,
        month: 'január',
        image: '/images/divadlo-main.jpg', // Placeholder
        description: `
      <p>Kultové dielo, ktoré oslovilo milióny čitateľov po celom svete, v divadelnom spracovaní. Adrian Mole má 13 a 3/4 roka a cíti sa byť intelektuálom. Jeho život je však plný nepochopenia, rodičia majú manželskú krízu, pes pije brandy a on sa zamiloval do Pandory. Navyše má problémy s pleťou a nikto nechápe jeho básnické črevo.</p>
      <br/>
      <p>Inscenácia s humorom a nadhľadom mapuje strasti dospievania, prvé lásky, školské problémy a rodinné peripetie. Je to zrkadlo nastavené nielen dospievajúcim, ale aj dospelým, ktorí už možno zabudli, aké to je byť teenagerom.</p>
    `,
        details: {
            duration: '90 minút',
            age: 'Vhodné od 13 rokov',
            premiere: '10. 10. 2023, Malá scéna STU'
        },
        cast: ['Mladí herci Divadla Ludus'],
        team: [
            { role: 'réžia', name: 'Peter Kuba' },
            { role: 'dramaturgia', name: 'Zuzana Šajgalíková' }
        ]
    },
    {
        slug: 'tajny-dennik-adriana-mola-jan-16-1',
        day: '16. 1.',
        dayName: 'piatok',
        time: '8:30',
        title: 'Tajný denník Adriana Mola',
        author: 'Sue Townsendová',
        ageBadge: '13+',
        venue: 'Divadlo Malá scéna',
        status: 'Vypredané',
        color: '#9f9df0', // Purple
        price: null,
        month: 'január',
        image: '/images/divadlo-main.jpg',
        description: `
      <p>Kultové dielo, ktoré oslovilo milióny čitateľov po celom svete, v divadelnom spracovaní. Adrian Mole má 13 a 3/4 roka a cíti sa byť intelektuálom. Jeho život je však plný nepochopenia, rodičia majú manželskú krízu, pes pije brandy a on sa zamiloval do Pandory.</p>
    `,
        details: {
            duration: '90 minút',
            age: 'Vhodné od 13 rokov',
            premiere: '10. 10. 2023'
        },
        cast: ['Mladí herci Divadla Ludus'],
        team: [{ role: 'réžia', name: 'Peter Kuba' }]
    },
    {
        slug: 'tajny-dennik-adriana-mola-jan-16-2',
        day: '16. 1.',
        dayName: 'piatok',
        time: '11:00',
        title: 'Tajný denník Adriana Mola',
        author: 'Sue Townsendová',
        ageBadge: '13+',
        venue: 'Divadlo Malá scéna',
        status: 'Vypredané',
        color: '#9f9df0', // Purple
        price: null,
        month: 'január',
        image: '/images/divadlo-main.jpg',
        description: `Same description...`,
        details: {
            duration: '90 minút',
            age: 'Vhodné od 13 rokov',
            premiere: '10. 10. 2023'
        },
        cast: ['Mladí herci Divadla Ludus'],
        team: [{ role: 'réžia', name: 'Peter Kuba' }]
    },
    {
        slug: 'profundum',
        day: '18. 1.',
        dayName: 'nedeľa',
        time: '17:00',
        title: 'Profundum',
        author: 'Kolektív autorov',
        ageBadge: 'SŠ',
        venue: 'Divadlo Malá scéna',
        status: 'available',
        color: '#9fd0f0', // Blue
        price: '10,00 €',
        month: 'január',
        image: '/images/painting.jpg',
        description: `
      <p>Hlboká sonda do duše súčasného mladého človeka. Čo sa skrýva pod povrchom? Čo nás trápi, čo nás teší, čoho sa bojíme? Inscenácia vznikla metódou kolektívnej tvorby a prináša autentické výpovede hercov.</p>
    `,
        details: {
            duration: '60 minút',
            age: 'Stredné školy',
            premiere: '15. 11. 2024'
        },
        cast: ['Študenti LUDUS Academy'],
        team: [
            { role: 'réžia', name: 'Kamil Žiška' },
            { role: 'hudba', name: 'Kolektív' }
        ]
    },
    {
        slug: 'ordinary-things',
        day: '21. 1.',
        dayName: 'streda',
        time: '18:00',
        title: 'Ordinary Things',
        subtitle: 'spolupráca s Univerzitou Komenského',
        author: 'Med a Prach',
        ageBadge: '',
        venue: 'Divadlo Malá scéna',
        status: 'info',
        infoText: 'Med a Prach',
        color: '#b0ea86', // Green
        price: null,
        month: 'január',
        image: '/images/sculpture.jpg',
        description: `
      <p>Experimentálne predstavenie v spolupráci s Univerzitou Komenského. Skúmanie obyčajnosti, každodennosti a krásy v maličkostiach. Multimediálny projekt spájajúci divadlo, pohyb a vizuálne umenie.</p>
    `,
        details: {
            duration: '70 minút',
            age: 'Vhodné pre všetkých',
            premiere: '1. 12. 2024'
        },
        cast: ['Med a Prach group'],
        team: [
            { role: 'koncept', name: 'Andrej Kalinka' }
        ]
    },
    {
        slug: 'odysea',
        day: '26. 1.',
        dayName: 'pondelok',
        time: '10:00',
        title: 'Odysea',
        author: 'Homér / A. Baricco',
        ageBadge: '16+',
        venue: 'Divadlo Malá scéna',
        status: 'available',
        color: '#93f0e0', // Teal
        price: '10,00 €',
        month: 'január',
        image: '/images/divadlo-main.jpg',
        description: `
      <p>Veľkolepý príbeh antického hrdinu Odysea prerozprávaný moderným jazykom. Cesta plná nástrah, mytologických bytostí a hľadania domova. Je Ithaka skutočným cieľom, alebo je cieľom samotná cesta?</p>
    `,
        details: {
            duration: '100 minút',
            age: '16+',
            premiere: '20. 2. 2025'
        },
        cast: ['Jakub Kuka', 'Lenka Libjaková', 'a ďalší'],
        team: [
            { role: 'réžia', name: 'Peter Kuba' },
            { role: 'scéna', name: 'Fero Lipták' }
        ]
    },
    {
        slug: 'snehova-kralovna',
        day: '02. 2.',
        dayName: 'pondelok',
        time: '10:00',
        title: 'Snehová kráľovná',
        author: 'H. Ch. Andersen',
        ageBadge: '5+',
        venue: 'Divadlo Malá scéna',
        status: 'available',
        color: '#ffffff',
        price: '8,00 €',
        month: 'február',
        image: '/images/divadlo-main.jpg',
        description: `
      <p>Klasická rozprávka o sile priateľstva, ktorá dokáže roztopiť aj to najľadovejšie srdce. Gerda sa vydáva na nebezpečnú cestu, aby zachránila svojho kamaráta Kaya zo zajatia Snehovej kráľovnej.</p>
    `,
        details: {
            duration: '55 minút',
            age: '5+',
            premiere: '5. 12. 2022'
        },
        cast: ['Herci Divadla Ludus'],
        team: [
            { role: 'réžia', name: 'Ján Uličiansky' }
        ]
    },
    {
        slug: 'klauniady',
        day: '15. 2.',
        dayName: 'nedeľa',
        time: '16:00',
        title: 'Klauniády',
        author: 'Kolektív',
        ageBadge: '4+',
        venue: 'Divadlo Malá scéna',
        status: 'available',
        color: '#9fd0f0',
        price: '8,00 €',
        month: 'február',
        image: '/images/academy/IMG_3649.jpeg',
        description: `
      <p>Zábavné popoludnie plné smiechu, gagov a klaunských kúskov. Interaktívne predstavenie, kde sa deti stávajú súčasťou deja.</p>
    `,
        details: {
            duration: '45 minút',
            age: '4+',
            premiere: '1. 6. 2023'
        },
        cast: ['Klauni z Ludusu'],
        team: [
            { role: 'pedagogické vedenie', name: 'Juraj Benčík' }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Determine depth based on script tag attribute or default to 0
    const scriptTag = document.querySelector('script[src*="components.js"]');
    const depth = scriptTag ? parseInt(scriptTag.getAttribute('data-depth') || '0') : 0;
    
    // Check if we are on the homepage
    // Ensure we are at root depth (0) AND matches index patterns to avoid hiding nav on sub-folder index.html pages
    let isHomepage = false;
    if (depth === 0) {
        const path = window.location.pathname;
        isHomepage = path.endsWith('index.html') || path.endsWith('/') || path === '/ludus/';
    }

    loadHeader(depth, isHomepage);
    loadFooter(depth);
});

function loadHeader(depth, isHomepage) {
    const getPath = (path, isPage) => {
        if (depth === 0) {
            return isPage ? `pages/${path}` : path;
        } else if (depth === 1) {
            return isPage ? path : `../${path}`;
        } else if (depth === 2) {
            return isPage ? `../${path}` : `../../${path}`;
        }
        return path;
    };

    // Helper to fix image paths for mega menu static images
    const fixImg = (img) => {
        if (depth === 1) return '../' + img;
        if (depth === 2) return '../../' + img;
        return img;
    };

    const logoPath = depth === 0 ? 'index.html' : (depth === 1 ? '../index.html' : '../../index.html');
    const imgPath = depth === 0 ? 'images/loga-4/logo-main.png' : (depth === 1 ? '../images/loga-4/logo-main.png' : '../../images/loga-4/logo-main.png');
    // Contact path needs to be dynamic too
    const contactPath = getPath('kontakt.html', true);

    // --- MENU DATA STRUCTURE ---
    const menuData = [
        {
            title: "Ludus Academy",
            url: getPath('ludus_academy/index.html', true),
            image: "images/logo-academy-main.jpeg", 
            links: [
                { name: "O nás", url: getPath('ludus_academy/index.html', true), image: "images/sculpture.jpg" },
                { name: "Kniha", url: getPath('ludus_academy/kniha.html', true), image: "images/kniha/ukazka1.png" },
                { name: "Kurzy", url: getPath('ludus_academy/index.html', true), image: "images/painting.jpg" },
                { name: "Workshopy", url: getPath('ludus_academy/index.html', true), image: "images/kniha/kniha-hero.jpeg" },
                { name: "Tréningy pre firmy", url: getPath('ludus_academy/treningy-firmy.html', true), image: "images/logo.jpg" },
                { name: "Blog", url: getPath('ludus_academy/blog.html', true), image: "images/digital.jpg" }
            ]
        },
        {
            title: "Škola Ludus",
            url: getPath('szus/index.html', true),
            image: "images/painting.jpg",
            links: [
                { name: "História", url: getPath('szus/historia.html', true), image: "images/kniha/ukazka2.png" },
                { name: "Prihláška do SZUŠ", url: contactPath, image: "images/kniha/kniha-hero.jpeg" },
                { name: "Školné", url: getPath('szus/skolne.html', true), image: "images/sculpture.jpg" },
                { name: "Pedagógovia", url: getPath('szus/index.html', true), image: "images/o-nas/katarina-baranova.jpg" },
                { name: "Výučba", url: getPath('szus/vyucba.html', true), image: "images/painting.jpg" },
                { name: "Galéria", url: getPath('szus/galeria.html', true), image: "images/kniha/ukazka3.png" }
            ]
        },
        {
            title: "Divadlo Ludus",
            url: getPath('divadlo/index.html', true),
            image: "images/digital.jpg",
            links: [
                { name: "História", url: getPath('szus/historia.html', true), image: "images/kniha/ukazka1.png" }, // Reusing historia? Or divadlo has own? User said "Historia in in szus". Divadlo has historia link in menu. Assuming same? Or pages/divadlo/historia.html? I moved pages/historia.html to szus/historia.html. I will point to szus/historia.html for now unless specified.
                { name: "Aktivity", url: getPath('divadlo/aktivity.html', true), image: "images/sculpture.jpg" },
                { name: "Naše priestory", url: getPath('divadlo/priestory.html', true), image: "images/digital.jpg" },
                { name: "Program a rezervácia", url: getPath('divadlo/index.html', true), image: "images/painting.jpg" },
                { name: "Galéria", url: getPath('divadlo/galeria.html', true), image: "images/logo.jpg" }
            ]
        },
        {
            title: "Ludus Tábor",
            url: getPath('tabor/index.html', true),
            image: "images/tabor-main.jpg",
            links: [
                { name: "O tábore", url: getPath('tabor/index.html', true), image: "images/kniha/ukazka2.png" },
                { name: "Cena a prihlásanie", url: getPath('tabor/index.html', true), image: "images/sculpture.jpg" }
            ]
        }
    ];

    // Build Nav HTML
    // Initialize with a placeholder div to maintain grid layout on homepage
    let navHTML = '<div class="nav-placeholder"></div>';
    
    // Only build nav if NOT homepage
    if (!isHomepage) {
        navHTML = `
            <nav>
                <ul class="main-nav">
                    ${menuData.map(item => `
                        <li class="has-mega-menu">
                            <a href="${item.url}">${item.title}</a>
                            <div class="mega-menu">
                                <div class="mega-menu-content">
                                    <div class="mega-menu-links">
                                        <ul class="mega-menu-list">
                                            ${item.links.map(link => `
                                                <li>
                                                    <a href="${link.url}" data-image="${fixImg(link.image)}">${link.name}</a>
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                    <div class="mega-menu-static-image" style="background-image: url('${fixImg(item.image)}');"></div>
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </nav>
        `;
    }

    const headerHTML = `
        <header>
            <div class="header-inner">
                <a href="${logoPath}" class="logo">
                    <img src="${imgPath}" alt="LUDUS Logo">
                </a>
                ${navHTML}
                <!-- Group social icons and Kontakt button together in the rightmost grid column -->
                <div class="header-right-group" style="display: flex; align-items: center; gap: 15px;">
                    <div class="header-socials" style="display: flex; gap: 15px;">
                        <a href="https://www.facebook.com/skolaludus" target="_blank" style="display: flex; align-items: center;">
                            <img src="${depth === 0 ? 'images/icons/facebook.svg' : (depth === 1 ? '../images/icons/facebook.svg' : '../../images/icons/facebook.svg')}" alt="Facebook" style="width: 24px; height: 24px;">
                        </a>
                        <a href="#" target="_blank" style="display: flex; align-items: center;">
                            <img src="${depth === 0 ? 'images/icons/instagram.svg' : (depth === 1 ? '../images/icons/instagram.svg' : '../../images/icons/instagram.svg')}" alt="Instagram" style="width: 24px; height: 24px;">
                        </a>
                    </div>
                    
                    <a href="${contactPath}" class="btn-cta">Kontakt</a>
                </div>

                <div class="mega-menu-image-container" id="mega-menu-image"></div>
            </div>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    if (!isHomepage) {
        initMegaMenu();
    }
}

function initMegaMenu() {
    const megaMenuLinks = document.querySelectorAll('.mega-menu-list a');
    const imageContainer = document.getElementById('mega-menu-image');

    megaMenuLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const imageUrl = link.getAttribute('data-image');
            if (imageUrl) {
                imageContainer.style.backgroundImage = `url('${imageUrl}')`;
                imageContainer.style.opacity = '1';
                imageContainer.style.transform = 'scale(1)';
            }
        });

        link.addEventListener('mousemove', (e) => {
             const x = e.clientX;
             const y = e.clientY;
             
             imageContainer.style.left = `${x + 20}px`;
             imageContainer.style.top = `${y + 20}px`;
        });

        link.addEventListener('mouseleave', () => {
            imageContainer.style.opacity = '0';
            imageContainer.style.transform = 'scale(0.8)';
        });
    });
}

function loadFooter(depth) {
    const getPath = (path, isPage) => {
        if (depth === 0) {
            return isPage ? `pages/${path}` : path;
        } else if (depth === 1) {
            return isPage ? path : `../${path}`;
        } else if (depth === 2) {
            return isPage ? `../${path}` : `../../${path}`;
        }
        return path;
    };

    const imgPath = depth === 0 ? 'images/loga-4/logo-main.png' : (depth === 1 ? '../images/loga-4/logo-main.png' : '../../images/loga-4/logo-main.png');
    const contactPath = getPath('kontakt.html', true);

    const academyLinks = [
        { name: "O nás", url: getPath('ludus_academy/index.html', true) },
        { name: "Kniha", url: getPath('ludus_academy/kniha.html', true) },
        { name: "Kurzy", url: getPath('ludus_academy/index.html', true) },
        { name: "Workshopy", url: getPath('ludus_academy/index.html', true) },
        { name: "Tréningy pre firmy", url: getPath('ludus_academy/treningy-firmy.html', true) },
        { name: "Blog", url: getPath('ludus_academy/blog.html', true) }
    ];

    const schoolLinks = [
        { name: "História", url: getPath('szus/historia.html', true) },
        { name: "Prihláška do SZUŠ", url: contactPath },
        { name: "Školné", url: getPath('szus/skolne.html', true) },
        { name: "Pedagógovia", url: getPath('szus/index.html', true) },
        { name: "Výučba", url: getPath('szus/vyucba.html', true) },
        { name: "Galéria", url: getPath('szus/galeria.html', true) }
    ];

    const theaterLinks = [
        { name: "História", url: getPath('szus/historia.html', true) },
        { name: "Aktivity", url: getPath('divadlo/aktivity.html', true) },
        { name: "Naše priestory", url: getPath('divadlo/priestory.html', true) },
        { name: "Program a rezervácia", url: getPath('divadlo/index.html', true) },
        { name: "Galéria", url: getPath('divadlo/galeria.html', true) }
    ];

    const campLinks = [
        { name: "O tábore", url: getPath('tabor/index.html', true) },
        { name: "Cena a prihlásanie", url: getPath('tabor/index.html', true) }
    ];

    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <img src="${imgPath}" alt="LUDUS Logo" class="footer-logo">
                    <div style="margin-top: 1rem; font-size: 0.95rem;">
                        <p style="margin-bottom: 0.5rem;">Email: <a href="mailto:info@skolaludus.sk" style="color: inherit; text-decoration: none;">info@skolaludus.sk</a></p>
                        <p style="margin-bottom: 0.5rem;">Tel: <a href="tel:+421905543282" style="color: inherit; text-decoration: none;">0905 543 282</a></p>
                        <p style="margin-bottom: 0.5rem;">Palackého 22, 811 02 Bratislava</p>
                        <p style="margin-bottom: 0.5rem;">IČO: 30849331</p>
                        <p style="margin-bottom: 1rem;">DIČ: 2021878100</p>
                        
                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; text-transform: none; margin-top: 1.5rem;">Sledujte nás</h4>
                        <div style="display: flex; gap: 15px;">
                            <a href="https://www.facebook.com/skolaludus" target="_blank" style="display: inline-block;">
                                <img src="${depth === 0 ? 'images/icons/facebook.svg' : (depth === 1 ? '../images/icons/facebook.svg' : '../../images/icons/facebook.svg')}" alt="Facebook" style="width: 24px; height: 24px;">
                            </a>
                            <a href="#" target="_blank" style="display: inline-block;">
                                <img src="${depth === 0 ? 'images/icons/instagram.svg' : (depth === 1 ? '../images/icons/instagram.svg' : '../../images/icons/instagram.svg')}" alt="Instagram" style="width: 24px; height: 24px;">
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Ludus Academy</h3>
                    ${academyLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
                </div>

                <div class="footer-section">
                    <h3>Škola Ludus</h3>
                    ${schoolLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
                </div>

                <div class="footer-section">
                    <h3>Divadlo Ludus</h3>
                    ${theaterLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
                </div>

                <div class="footer-section">
                    <h3>Ludus Tábor</h3>
                    ${campLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem; border-top: 1px solid #333; padding-top: 1rem;">
                <p style="font-size: 0.9rem;">&copy; 2025 LUDUS. All rights reserved.</p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
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
                { name: "Kurzy", url: getPath('ludus_academy/herecky-kurz.html', true), image: "images/painting.jpg" },
                { name: "Workshopy", url: getPath('ludus_academy/workshopy-skoly.html', true), image: "images/kniha/kniha-hero.jpeg" },
                { name: "Tréningy pre firmy", url: getPath('ludus_academy/treningy-firmy.html', true), image: "images/logo.jpg" },
                { name: "Pedagógovia", url: getPath('ludus_academy/pedagogovia.html', true), image: "images/academy/IMG_1128.jpeg" },
                { name: "Blog", url: getPath('ludus_academy/blog.html', true), image: "images/digital.jpg" },
                { name: "Galéria", url: getPath('ludus_academy/galeria.html', true), image: "images/academy/IMG_1318.jpeg" }
            ]
        },
        {
            title: "Škola Ludus",
            url: getPath('szus/index.html', true),
            image: "images/painting.jpg",
            links: [
                { name: "História", url: getPath('szus/historia.html', true), image: "images/kniha/ukazka2.png" },
                { name: "Prihláška do SZUŠ", url: getPath('szus/prihlaska.html', true), image: "images/kniha/kniha-hero.jpeg" },
                { name: "Školné", url: getPath('szus/skolne.html', true), image: "images/sculpture.jpg" },
                { name: "Pedagógovia", url: getPath('szus/pedagogovia.html', true), image: "images/o-nas/katarina-baranova.jpg" },
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
                { name: "Cena a prihlásanie", url: getPath('tabor/index.html', true), image: "images/sculpture.jpg" },
                { name: "Galéria", url: getPath('tabor/galeria.html', true), image: "images/tabor/IMG_5438.jpeg" }
            ]
        }
    ];

    // Detect current category and page based on URL
    const currentPath = window.location.pathname;
    const categoryMap = {
        'ludus_academy': 0,
        'szus': 1,
        'divadlo': 2,
        'tabor': 3
    };

    let activeCategory = -1;
    for (const [folder, index] of Object.entries(categoryMap)) {
        if (currentPath.includes(`/${folder}/`) || currentPath.includes(`pages/${folder}/`)) {
            activeCategory = index;
            break;
        }
    }

    // Build Nav HTML with mega menu for all pages including homepage
    const navHTML = `
        <nav>
            <ul class="main-nav">
                ${menuData.map((item, index) => `
                    <li class="has-mega-menu${activeCategory === index ? ' active-category' : ''}" data-category="${index}">
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
                                <div class="mega-menu-static-image" data-original-image="${fixImg(item.image)}" style="background-image: url('${fixImg(item.image)}');"></div>
                            </div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </nav>
    `;

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

                <!-- Cursor follower removed as per request -->
            </div>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Initialize mega menu on all pages including homepage
    initMegaMenu();
}

function initMegaMenu() {
    const megaMenuLinks = document.querySelectorAll('.mega-menu-list a');
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    megaMenuLinks.forEach(link => {
        // Use absolute URL comparison for robust active state detection including hashes
        try {
            const linkUrl = new URL(link.href);
            const currentUrl = new URL(window.location.href);

            // Compare pathnames and hashes
            // This ensures Kurzy (#kurzy-section) and Workshopy (#workshops-section) are distinct
            // Check if pathnames match (ignoring potential trailing slash differences in typical web server setups, but here we expect exact match or strict file paths)
            if (linkUrl.pathname === currentUrl.pathname && linkUrl.hash === currentUrl.hash) {
                link.classList.add('active-link');
            }
        } catch (e) {
            console.error("Error parsing URL for menu highlight:", e);
        }

        link.addEventListener('mouseenter', (e) => {
            const imageUrl = link.getAttribute('data-image');
            const megaMenuContent = link.closest('.mega-menu-content');
            if (megaMenuContent && imageUrl) {
                const staticImage = megaMenuContent.querySelector('.mega-menu-static-image');
                if (staticImage) {
                    staticImage.style.backgroundImage = `url('${imageUrl}')`;
                }
            }
        });
    });

    // Restore original image when leaving the links area
    const linkContainers = document.querySelectorAll('.mega-menu-links');
    linkContainers.forEach(container => {
        container.addEventListener('mouseleave', () => {
            const megaMenuContent = container.closest('.mega-menu-content');
            if (megaMenuContent) {
                const staticImage = megaMenuContent.querySelector('.mega-menu-static-image');
                if (staticImage) {
                    const originalImage = staticImage.getAttribute('data-original-image');
                    if (originalImage) {
                         staticImage.style.backgroundImage = `url('${originalImage}')`;
                    }
                }
            }
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
        { name: "Pedagógovia", url: getPath('ludus_academy/pedagogovia.html', true) },
        { name: "Blog", url: getPath('ludus_academy/blog.html', true) },
        { name: "Galéria", url: getPath('ludus_academy/galeria.html', true) }
    ];

    const schoolLinks = [
        { name: "História", url: getPath('szus/historia.html', true) },
        { name: "Prihláška do SZUŠ", url: getPath('szus/prihlaska.html', true) },
        { name: "Školné", url: getPath('szus/skolne.html', true) },
        { name: "Pedagógovia", url: getPath('szus/pedagogovia.html', true) },
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
        { name: "Cena a prihlásanie", url: getPath('tabor/index.html', true) },
        { name: "Galéria", url: getPath('tabor/galeria.html', true) }
    ];

    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <img src="${imgPath}" alt="LUDUS Logo" class="footer-logo">
                    <div style="margin-top: 1rem; font-size: 0.95rem;">
                        <p style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                            <img src="${depth === 0 ? 'images/icons/email.svg' : (depth === 1 ? '../images/icons/email.svg' : '../../images/icons/email.svg')}" alt="Email" style="width: 18px; height: 18px; flex-shrink: 0;">
                            <a href="mailto:info@skolaludus.sk" style="color: inherit; text-decoration: underline; line-height: 1;">info@skolaludus.sk</a>
                        </p>
                        <p style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                            <img src="${depth === 0 ? 'images/icons/phone.svg' : (depth === 1 ? '../images/icons/phone.svg' : '../../images/icons/phone.svg')}" alt="Tel" style="width: 18px; height: 18px; flex-shrink: 0;">
                            <a href="tel:+421905543282" style="color: inherit; text-decoration: underline; line-height: 1;">0905 543 282</a>
                        </p>
                        <p style="margin-bottom: 0.5rem;">Palackého 22,<br> 811 02 Bratislava</p>
                        <p style="margin-bottom: 0.5rem;">IČO: 30849331</p>
                        <p style="margin-bottom: 1rem;">DIČ: 2021878100</p>

                        <h4 style="font-family: var(--font-body); font-size: 1rem; margin-bottom: 0.5rem; text-transform: uppercase; font-weight: 700; margin-top: 1.5rem;">Sledujte nás</h4>
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
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Tvorba stránky - <a href="https://aebdigital.sk" target="_blank" style="color: inherit; text-decoration: underline;">AEB Digital</a></p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
document.addEventListener('DOMContentLoaded', () => {
    // Determine depth based on script tag attribute or default to 0
    const scriptTag = document.querySelector('script[src*="components.js"]');
    const depth = scriptTag ? parseInt(scriptTag.getAttribute('data-depth') || '0') : 0;
    
    // Check if we are on the homepage
    const isHomepage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '/ludus/';

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

    // --- MENU DATA STRUCTURE ---
    const menuData = [
        {
            title: "Ludus Academy",
            url: getPath('academy.html', true),
            image: "images/sculpture.jpg", // Static image for the category
            links: [
                { name: "O nás", url: getPath('academy.html', true), image: "images/sculpture.jpg" },
                { name: "Kniha", url: getPath('kniha.html', true), image: "images/kniha/ukazka1.png" },
                { name: "Kontakt", url: getPath('kontakt.html', true), image: "images/digital.jpg" },
                { name: "Kurzy", url: getPath('academy.html', true), image: "images/painting.jpg" },
                { name: "Workshopy", url: getPath('academy.html', true), image: "images/kniha/kniha-hero.jpeg" },
                { name: "Tréningy pre firmy", url: getPath('ludus_academy/treningy-firmy.html', true), image: "images/logo.jpg" }
            ]
        },
        {
            title: "Škola Ludus",
            url: getPath('skola.html', true),
            image: "images/painting.jpg",
            links: [
                { name: "História", url: getPath('historia.html', true), image: "images/kniha/ukazka2.png" },
                { name: "Prihláška do SZUŠ LUDUS", url: getPath('kontakt.html', true), image: "images/kniha/kniha-hero.jpeg" },
                { name: "Školné", url: getPath('kontakt.html', true), image: "images/sculpture.jpg" },
                { name: "Pedagógovia", url: getPath('skola.html', true), image: "images/o-nas/katarina-baranova.jpg" },
                { name: "Kontakt", url: getPath('kontakt.html', true), image: "images/digital.jpg" },
                { name: "Výučba", url: getPath('vyucba.html', true), image: "images/painting.jpg" },
                { name: "Fotogaléria", url: getPath('galeria-skola.html', true), image: "images/kniha/ukazka3.png" }
            ]
        },
        {
            title: "Divadlo Ludus",
            url: getPath('divadlo.html', true),
            image: "images/digital.jpg",
            links: [
                { name: "História", url: getPath('historia.html', true), image: "images/kniha/ukazka1.png" },
                { name: "Aktivity", url: getPath('divadlo-aktivity.html', true), image: "images/sculpture.jpg" },
                { name: "Naše priestory", url: getPath('priestory.html', true), image: "images/digital.jpg" },
                { name: "Program a rezervácia", url: getPath('divadlo.html', true), image: "images/painting.jpg" },
                { name: "Kontakt", url: getPath('kontakt.html', true), image: "images/kniha/kniha-hero.jpeg" },
                { name: "Galéria", url: getPath('galeria-divadlo.html', true), image: "images/logo.jpg" }
            ]
        },
        {
            title: "Ludus Tábor",
            url: getPath('tabor.html', true),
            image: "images/kniha/kniha-hero.jpeg",
            links: [
                { name: "O tábore", url: getPath('tabor.html', true), image: "images/kniha/ukazka2.png" },
                { name: "Cena a prihlásanie", url: getPath('tabor.html', true), image: "images/sculpture.jpg" }
            ]
        }
    ];

    // Build Nav HTML
    let navHTML = '';
    
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
                <!-- Empty div to maintain spacing if nav is missing or for mobile menu toggle later -->
                <div style="width: 60px;"></div> 
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

    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h3>LUDUS</h3>
                    <p>Umelecká škola a divadlo s 55-ročnou tradíciou.</p>
                </div>
                <div class="footer-section">
                    <h3>Rýchle odkazy</h3>
                    <a href="${getPath('historia.html', true)}">História</a>
                    <a href="${getPath('skola.html', true)}">Škola</a>
                    <a href="${getPath('academy.html', true)}">Academy</a>
                    <a href="${getPath('tabor.html', true)}">Tábor</a>
                    <a href="${getPath('kniha.html', true)}">Kniha</a>
                    <a href="${getPath('blog.html', true)}">Blog</a>
                    <a href="${getPath('kontakt.html', true)}">Kontakt</a>
                </div>
                <div class="footer-section">
                    <h3>Kontakt</h3>
                    <p>Email: <a href="mailto:info@skolaludus.sk" style="color: inherit; text-decoration: none;">info@skolaludus.sk</a></p>
                    <p>Tel: <a href="tel:+421905543282" style="color: inherit; text-decoration: none;">0905 543 282</a></p>
                    <p>Palackého 22, 811 02 Bratislava</p>
                    <p>IČO: 30849331</p>
                    <p>DIČ: 2021878100</p>
                </div>
                 <div class="footer-section map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.378961730419!2d17.10825997631988!3d48.14138097124373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894247e68501%3A0xa11aa04d315433c6!2sDivadlo%20Ludus!5e0!3m2!1ssk!2ssk!4v1709141000000!5m2!1ssk!2ssk" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem; border-top: 1px solid #333; padding-top: 1rem;">
                <p>&copy; 2025 LUDUS. All rights reserved.</p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
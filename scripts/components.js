document.addEventListener('DOMContentLoaded', () => {
    // Determine depth based on script tag attribute or default to 0
    const scriptTag = document.querySelector('script[src*="components.js"]');
    const depth = scriptTag ? parseInt(scriptTag.getAttribute('data-depth') || '0') : 0;
    
    loadHeader(depth);
    loadFooter(depth);
});

function loadHeader(depth) {
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

    const logoPath = depth === 0 ? 'index.html' : (depth === 1 ? '../index.html' : '../../index.html');
    const contactPath = depth === 0 ? 'pages/kontakt.html' : (depth === 1 ? 'kontakt.html' : '../kontakt.html');
    const imgPath = depth === 0 ? 'images/logo.jpg' : (depth === 1 ? '../images/logo.jpg' : '../../images/logo.jpg');

    const headerHTML = `
        <header>
            <div class="header-inner">
                <a href="${logoPath}" class="logo">
                    <img src="${imgPath}" alt="LUDUS Logo">
                </a>
                <nav>
                    <ul>
                        <li><a href="${logoPath}">Domov</a></li>
                        <li><a href="${getPath('historia.html', true)}">História</a></li>
                        <li><a href="${getPath('skola.html', true)}">Škola Ludus</a></li>
                        <li><a href="${getPath('academy.html', true)}">Ludus Academy</a></li>
                        <li><a href="${getPath('divadlo.html', true)}">Ludus Divadlo</a></li>
                        <li><a href="${getPath('kniha.html', true)}">Kniha</a></li>
                        <li><a href="${getPath('kontakt.html', true)}">Kontakt</a></li>
                    </ul>
                </nav>
                <a href="${contactPath}" class="btn-cta">Prihláška</a>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
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
                    <a href="${getPath('kniha.html', true)}">Kniha</a>
                    <a href="${getPath('kontakt.html', true)}">Kontakt</a>
                </div>
                <div class="footer-section">
                    <h3>Kontakt</h3>
                    <p>Email: info@ludusacademy.sk</p>
                    <p>Tel: 0905 218 088</p>
                    <p>Palackého 22, 811 02 Bratislava</p>
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
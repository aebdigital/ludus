document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the blog list page
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        renderBlogList(blogGrid);
    }

    // Check if we are on the single blog post page
    const blogPostContainer = document.querySelector('.blog-post-content');
    if (blogPostContainer) {
        renderBlogPost(blogPostContainer);
    }
});

function renderBlogList(container) {
    if (typeof blogData === 'undefined') {
        console.error('Blog data not loaded.');
        return;
    }

    container.innerHTML = blogData.map(post => `
        <article class="blog-card">
            <a href="blog-post.html?id=${post.id}" class="blog-card-link">
                <div class="blog-card-image" style="background-image: url('${post.image}');"></div>
                <div class="blog-card-content">
                    <span class="blog-date">${post.date}</span>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-preview">${post.preview}</p>
                    <span class="read-more">Čítať viac &rarr;</span>
                </div>
            </a>
        </article>
    `).join('');
}

function renderBlogPost(container) {
    if (typeof blogData === 'undefined') {
        console.error('Blog data not loaded.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const post = blogData.find(p => p.id === postId);

    if (!post) {
        container.innerHTML = `
            <div class="blog-not-found">
                <h2>Článok sa nenašiel</h2>
                <p>Je nám ľúto, ale požadovaný článok neexistuje.</p>
                <a href="blog.html" class="btn-cta">Späť na blog</a>
            </div>
        `;
        return;
    }

    // Update Page Title
    document.title = `${post.title} | LUDUS Blog`;

    // Render Content
    const heroSection = document.querySelector('.hero-small h1');
    if(heroSection) heroSection.textContent = post.title;

    container.innerHTML = `
        <div class="post-header">
            <span class="post-date">${post.date}</span>
        </div>
        <div class="post-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-body">
            ${post.content}
        </div>
        <div class="post-footer">
            <a href="blog.html" class="btn-secondary">&larr; Späť na zoznam článkov</a>
        </div>
    `;
}

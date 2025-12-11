document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the blog list page
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        renderBlogList(blogGrid);
    }

    // Check if we are on the single blog post page (targeting the wrapper now)
    const blogPostWrapper = document.querySelector('.blog-post-layout');
    if (blogPostWrapper) {
        renderBlogPostWithSidebar(blogPostWrapper);
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

function renderBlogPostWithSidebar(container) {
    if (typeof blogData === 'undefined') {
        console.error('Blog data not loaded.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const post = blogData.find(p => p.id === postId);

    if (!post) {
        container.innerHTML = `
            <div class="blog-not-found" style="text-align: center; width: 100%;">
                <h2>Článok sa nenašiel</h2>
                <p>Je nám ľúto, ale požadovaný článok neexistuje.</p>
                <a href="blog.html" class="btn-cta">Späť na blog</a>
            </div>
        `;
        return;
    }

    // Update Page Title
    document.title = `${post.title} | LUDUS Blog`;

    // Update Hero Title
    const heroSection = document.querySelector('.hero-small h1');
    if(heroSection) heroSection.textContent = post.title;

    // Filter recommended posts (exclude current one)
    const otherPosts = blogData.filter(p => p.id !== postId).slice(0, 3); // Recommend up to 3 others

    // Render Main Content + Sidebar
    container.innerHTML = `
        <div class="blog-post-main">
            <div class="blog-post-content">
                <div class="post-header">
                    <span class="post-date">${post.date}</span>
                </div>
                <div class="post-body">
                    ${post.content}
                </div>
                <div class="post-footer">
                    <a href="blog.html" class="btn-secondary">&larr; Späť na zoznam článkov</a>
                </div>
            </div>
        </div>

        <aside class="blog-sidebar">
            <div class="sidebar-widget">
                <h3>Odporúčame prečítať</h3>
                ${otherPosts.map(rp => `
                    <a href="blog-post.html?id=${rp.id}" class="recommended-post">
                        <div class="recommended-image" style="background-image: url('${rp.image}');"></div>
                        <span class="recommended-title">${rp.title}</span>
                        <span class="recommended-date">${rp.date}</span>
                    </a>
                `).join('')}
            </div>
        </aside>
    `;
}
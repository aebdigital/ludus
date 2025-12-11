document.addEventListener('DOMContentLoaded', () => {
    loadCourseSidebar();
});

function loadCourseSidebar() {
    const sidebar = document.getElementById('course-sidebar');
    if (!sidebar) return;

    const allCourses = [
        { name: 'Herecký kurz', url: 'herecky-kurz.html', type: 'kurz' },
        { name: 'Herecký kurz pre pokročilých', url: 'herecky-kurz-pokrocili.html', type: 'kurz' },
        { name: 'Herecký kurz improvizácie', url: 'improvizacia.html', type: 'kurz' },
        { name: 'Divadelné laboratórium', url: 'divadelne-laboratorium.html', type: 'kurz' },
        { name: 'Kurz tvorivého písania', url: 'tvorive-pisanie.html', type: 'kurz' },
        { name: 'Prezentačný tréning', url: 'prezentacny-trening.html', type: 'kurz' },
        { name: 'Audio kurz', url: 'audio-kurz.html', type: 'kurz' },
        { name: 'Workshopy pre školy', url: 'workshopy-skoly.html', type: 'workshop' },
        { name: 'Workshop pre učiteľov', url: 'workshop-ucitelia.html', type: 'workshop' },
        { name: 'Workshop kreatívneho myslenia', url: 'workshop-kreativita.html', type: 'workshop' }
    ];

    const currentFile = window.location.pathname.split('/').pop();

    let html = '';

    // Render Kurzy
    html = `<h3><a href="../../ludus_academy/index.html#kurzy-section" class="sidebar-category-link">Kurzy</a></h3><ul class="course-list">`;
    allCourses.filter(item => item.type === 'kurz').forEach(course => {
        const isActive = currentFile === course.url ? 'active' : '';
        html += `<li><a href="${course.url}" class="${isActive}">${course.name}</a></li>`;
    });
    html += `</ul>`;

    // Render Workshopy
    html += `<h3 style="margin-top: 2rem;"><a href="../../ludus_academy/index.html#workshops-section" class="sidebar-category-link">Workshopy</a></h3><ul class="course-list">`;
    allCourses.filter(item => item.type === 'workshop').forEach(workshop => {
        const isActive = currentFile === workshop.url ? 'active' : '';
        html += `<li><a href="${workshop.url}" class="${isActive}">${workshop.name}</a></li>`;
    });
    html += `</ul>`;
    
    sidebar.innerHTML = html;
}
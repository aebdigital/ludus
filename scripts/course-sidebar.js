document.addEventListener('DOMContentLoaded', () => {
    loadCourseSidebar();
});

function loadCourseSidebar() {
    const sidebar = document.getElementById('course-sidebar');
    if (!sidebar) return;

    const courses = [
        { name: 'Herecký kurz', url: 'herecky-kurz.html' },
        { name: 'Herecký kurz pre pokročilých', url: 'herecky-kurz-pokrocili.html' },
        { name: 'Herecký kurz improvizácie', url: 'improvizacia.html' },
        { name: 'Divadelné laboratórium', url: 'divadelne-laboratorium.html' },
        { name: 'Kurz tvorivého písania', url: 'tvorive-pisanie.html' },
        { name: 'Prezentačný tréning', url: 'prezentacny-trening.html' },
        { name: 'Audio kurz', url: 'audio-kurz.html' },
        { name: 'Workshopy pre školy', url: 'workshopy-skoly.html' },
        { name: 'Workshop pre učiteľov', url: 'workshop-ucitelia.html' },
        { name: 'Workshop kreatívneho myslenia', url: 'workshop-kreativita.html' }
    ];

    const currentFile = window.location.pathname.split('/').pop();

    let html = `<h3>Ponuka Kurzov</h3><ul>`;
    
    courses.forEach(course => {
        const isActive = currentFile === course.url ? 'active' : '';
        html += `<li><a href="${course.url}" class="${isActive}">${course.name}</a></li>`;
    });

    html += `</ul>`;
    
    sidebar.innerHTML = html;
}

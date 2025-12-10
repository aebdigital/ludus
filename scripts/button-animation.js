// Button Text Slide Animation
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class 'btn-cta'
    const buttons = document.querySelectorAll('.btn-cta');

    buttons.forEach(button => {
        // Skip if already converted
        if (button.querySelector('.btn-text-container')) {
            return;
        }

        // Get original text
        const originalText = button.textContent.trim();

        // Clear button content
        button.textContent = '';

        // Create container
        const container = document.createElement('div');
        container.className = 'btn-text-container';

        // Create visible text (default state)
        const textVisible = document.createElement('span');
        textVisible.className = 'btn-text btn-text-visible';
        textVisible.textContent = originalText;

        // Create hidden text (hover state) - same text
        const textHidden = document.createElement('span');
        textHidden.className = 'btn-text btn-text-hidden';
        textHidden.textContent = originalText;

        // Assemble structure
        container.appendChild(textVisible);
        container.appendChild(textHidden);
        button.appendChild(container);
    });
});

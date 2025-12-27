/* script.js - The Brains */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Handle Navigation Clicks
    const navButtons = document.querySelectorAll('[data-page]');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const destination = btn.dataset.page;
            window.location.href = destination;
        });
    });

    // 2. Auto-Highlight the Active Button (DeepSeek's Suggestion)
    // Get the current file name (e.g., "index.html")
    let currentPath = window.location.pathname.split('/').pop();
    
    // If path is empty (root), assume index.html
    if (currentPath === '') currentPath = 'index.html';

    // Find the button that matches this page and make it glow
    document.querySelectorAll('[data-page]').forEach(btn => {
        if (btn.dataset.page === currentPath) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
});
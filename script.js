document.addEventListener('DOMContentLoaded', function() {
    // 1. Navigation Logic (Handles clicks)
    const navButtons = document.querySelectorAll('[data-page]');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const destination = btn.dataset.page;
            // Add a subtle loading effect (Optional)
            document.body.style.opacity = '0.5';
            setTimeout(() => {
                window.location.href = destination;
            }, 100);
        });
    });

    // 2. Auto-Highlight Active Button
    // Get current filename (e.g., "roadmap.html")
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html'; // Handle root

    document.querySelectorAll('[data-page]').forEach(btn => {
        // If the button's data-page matches the current URL, make it active
        if (btn.dataset.page === currentPath) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
});
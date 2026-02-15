// This file initializes the website's JavaScript functionality, setting up event listeners and managing the overall behavior of the site.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');

    // Navigation links work normally - no need to prevent default behavior
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Allow normal navigation to other pages
            console.log(`Navigating to: ${link.getAttribute('href')}`);
        });
    });
});

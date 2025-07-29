
const htmlElement = document.documentElement;
const themeToggleDesktop = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = mobileMenuButton.querySelector('.hamburger-icon');

// Function to set the theme based on preference
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Toggle dark mode function
function toggleDarkMode() {
    if (htmlElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Event listeners for theme toggles
themeToggleDesktop.addEventListener('click', toggleDarkMode);
themeToggleMobile.addEventListener('click', toggleDarkMode);

// Mobile menu toggle logic
function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('open'); // Toggle class for hamburger animation
}

mobileMenuButton.addEventListener('click', toggleMenu);

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('open'); // Ensure hamburger icon resets
    });
});

// Blog posts data
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'yogire-orange': '#FF7F27',
                'yogire-beige': '#F5F0E5',
                'yogire-brown': '#8B4513',
                'yogire-green': '#4A6741',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            }
        }
    }
}

});


const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            mobileMenu.classList.add('hidden');
        }
    });

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('mukulsection').scrollIntoView({ behavior: 'smooth' });
});



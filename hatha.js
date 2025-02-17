// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any icons if needed
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    } catch (e) {
        console.log('Using Font Awesome fallback icons');
    }

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
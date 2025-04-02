// Mobile menu toggle functionality
const mobileMenuToggle = () => {
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.className = 'md:hidden text-2xl ml-4';
    menuButton.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.toggle('hidden');
    });

    const header = document.querySelector('header div:first-child');
    if (header) {
        header.appendChild(menuButton);
        
        // Create mobile menu
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobileMenu';
        mobileMenu.className = 'hidden md:hidden bg-black bg-opacity-90 absolute top-16 left-0 right-0 p-4';
        mobileMenu.innerHTML = `
            <nav class="flex flex-col space-y-4">
                <a href="index.html" class="hover:text-gray-300">Home</a>
                <a href="#" class="hover:text-gray-300">TV Shows</a>
                <a href="#" class="hover:text-gray-300">Movies</a>
                <a href="#" class="hover:text-gray-300">New & Popular</a>
                <a href="#" class="hover:text-gray-300">My List</a>
            </nav>
        `;
        document.body.appendChild(mobileMenu);
    }
};

// Smooth scrolling for anchor links
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Form validation for sign-in and sign-up
const formValidation = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const inputs = form.querySelectorAll('input[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('border', 'border-red-500');
                    isValid = false;
                } else {
                    input.classList.remove('border', 'border-red-500');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    mobileMenuToggle();
    smoothScroll();
    formValidation();
    
    // Add hover effect to movie cards
    const movieCards = document.querySelectorAll('.group');
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').classList.add('transform', 'scale-105');
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').classList.remove('transform', 'scale-105');
        });
    });
});
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('bx-menu');
            icon.classList.toggle('bx-x');
        }
    });

    document.querySelectorAll('.navbar a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('bx-menu');
                    icon.classList.remove('bx-x');
                }
            }
        });
    });
}

const contactLink = document.querySelector('.contact-link');
const contactModal = document.getElementById('contactModal');
const contactModalClose = document.getElementById('contactModalClose');
const contactForm = document.getElementById('contactForm');

if (contactLink && contactModal && contactModalClose) {
    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        contactModal.style.display = 'flex';
        contactModal.setAttribute('aria-hidden', 'false');
    });

    contactModalClose.addEventListener('click', () => {
        contactModal.style.display = 'none';
        contactModal.setAttribute('aria-hidden', 'true');
    });

    contactModal.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
            contactModal.setAttribute('aria-hidden', 'true');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message submitted! In a real implementation, this would be sent by email.');
        contactModal.style.display = 'none';
        contactModal.setAttribute('aria-hidden', 'true');
        contactForm.reset();
    });
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('toggle');
        }
    });
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('toggle');
});

// Initialize EmailJS
emailjs.init('TE_SrEoW-eCwDmdAb'); // Replace with your EmailJS public key

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_yyprpl1', 'template_gos874n', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (error) => {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
});
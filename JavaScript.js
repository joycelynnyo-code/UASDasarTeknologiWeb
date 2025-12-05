document.addEventListener('DOMContentLoaded', function() {
    // 1. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // Dapatkan elemen modal
            const myModalEl = document.getElementById('successModal');
            
            // Panggil fungsi Bootstrap.Modal getter dan tunjukkan
            const modalInstance = bootstrap.Modal.getOrCreateInstance(myModalEl);
            modalInstance.show();

            // Kosongkan Formulir
            contactForm.reset();
        });
    }
});
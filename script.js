function toggleNav() {
    const navlogo = document.querySelector('.navlogo');
    const navLinks = document.querySelector('.nav-links');
    navlogo.classList.toggle('active');
    navLinks.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navlogo = document.querySelector('.navlogo');
        const navLinks = document.querySelector('.nav-links');
        navlogo.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    const navlogo = document.querySelector('.navlogo');
    const navLinks = document.querySelector('.nav-links');
    if (!navlogo.contains(e.target) && !navLinks.contains(e.target)) {
        navlogo.classList.remove('active');
        navLinks.classList.remove('active');
    }
});




document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
       let cosmicIndex = 0;
        const totalSlides = 5;
        
        function galacticSlide(direction) {
            cosmicIndex += direction;
            
            if (cosmicIndex >= totalSlides) {
                cosmicIndex = 0;
            } else if (cosmicIndex < 0) {
                cosmicIndex = totalSlides - 1;
            }
            
            updateGalaxyPosition();
        }
        
        function teleportToSlide(index) {
            cosmicIndex = index;
            updateGalaxyPosition();
        }
        
        function updateGalaxyPosition() {
            const carousel = document.getElementById('screenshotCarousel');
            const dots = document.querySelectorAll('.quantum-dot');
            
            carousel.style.transform = `translateX(-${cosmicIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === cosmicIndex);
            });
        }
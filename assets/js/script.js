document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });

            sections.forEach(section => {
                observer.observe(section);
            });

            // Add click animation to links
            const links = document.querySelectorAll('.link-item');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    this.style.transform = 'scale(0.95) translateX(8px)';
                    setTimeout(() => {
                        this.style.transform = 'translateX(8px)';
                    }, 100);
                });
            });

            // Animate profile image on scroll
            // window.addEventListener('scroll', function() {
            //     const profileImage = document.querySelector('.profile-image');
            //     const scrolled = window.pageYOffset;
            //     profileImage.style.transform = `rotate(${scrolled * 0.05}deg) scale(${1 + scrolled * 0.0001})`;
            // });

            // Add hover effects to content cards
            const contentCards = document.querySelectorAll('.content-card');
            contentCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px) scale(1)';
                });
            });
        });
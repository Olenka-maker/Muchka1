document.addEventListener('DOMContentLoaded', () => {
    
    const menuSection = document.querySelector('.main-h1'); 
    const eventsSection = document.querySelector('.events1')?.parentElement; 
    const aboutSection = document.querySelector('.about1')?.parentElement?.parentElement; 

    const navLinks = document.querySelectorAll('header div a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const text = link.innerText.toLowerCase();
            
            let targetElement;
            if (text.includes('menu')) targetElement = menuSection;
            else if (text.includes('events')) targetElement = eventsSection;
            else if (text.includes('about')) targetElement = aboutSection;
            else window.scrollTo({ top: 0, behavior: 'smooth' }); 

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const sizes = document.querySelectorAll('.circle, .circle1');
    
    sizes.forEach(size => {
        size.style.cursor = 'pointer';
        size.addEventListener('click', function() {
            
            const siblingSizes = this.parentElement.querySelectorAll('p');
            siblingSizes.forEach(s => {
                s.className = 'circle'; 
            });
            this.className = 'circle1'; 
        });
    });

    
    const cards = document.querySelectorAll('.div-4');
    cards.forEach(card => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 30px rgba(255, 100, 50, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });


    const orderBtns = document.querySelectorAll('.now');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pizzaName = btn.closest('.div-4').querySelector('.italian-p').innerText;
            const selectedSize = btn.closest('.div-4').querySelector('.circle1').innerText;
            
        
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 100);
            
            alert(`Added to cart: ${pizzaName} (${selectedSize} cm)`);
        });
    });

    
    const loginBtn = document.querySelector('.a-pizza1');
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const user = prompt("Enter your name to login:");
        if (user) {
            loginBtn.innerText = `Hi, ${user}!`;
            loginBtn.style.background = 'linear-gradient(#4CAF50, #2E7D32)'; 
        }
    });
});
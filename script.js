/**
 * Madras Premium Coffee Engine Control Subsystem
 */

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Panel Settings
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 5:30 AM - 9:30 PM Indian Standard Time Live Evaluation
    function checkLiveTimeline() {
        const statusBadge = document.getElementById('liveStatus');
        const statusText = document.getElementById('statusText');
        
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istTime = new Date(utc + (3600000 * 5.5));

        const hours = istTime.getHours();
        const minutes = istTime.getMinutes();
        const decimalTime = hours + (minutes / 60);

        if (decimalTime >= 5.5 && decimalTime < 21.5) {
            statusBadge.classList.remove('closed');
            statusBadge.classList.add('open');
            statusText.textContent = "We're Open • Welcome for Coffee";
        } else {
            statusBadge.classList.remove('open');
            statusBadge.classList.add('closed');
            statusText.textContent = "We're Closed • Opens at 5:30 AM";
        }
    }
    checkLiveTimeline();
    setInterval(checkLiveTimeline, 30000);

    // Menu Operational Filters
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Scroll Animation System
    const reveals = document.querySelectorAll('.reveal');
    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
// Premium Random Visitor Counter Simulator for Elite Look
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('digitalCounter');
    if (counterElement) {
        // Base starting point
        let currentCount = 1542; 
        
        // Check if there is already a saved count in the user's browser
        if (localStorage.getItem('coffee_visitors')) {
            currentCount = parseInt(localStorage.getItem('coffee_visitors')) + 1;
        } else {
            // Add a small randomized realistic variance
            currentCount = Math.floor(Math.random() * 200) + 1400;
        }
        
        localStorage.setItem('coffee_visitors', currentCount);
        counterElement.textContent = Number(currentCount).toLocaleString('en-IN');
    }
});


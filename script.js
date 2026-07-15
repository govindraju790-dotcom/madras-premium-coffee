/* ==========================================================================
   RESET & SYSTEM INITIALIZATION
   ========================================================================== */
:root {
    --primary-dark: #120c08;
    --secondary-dark: #1c140e;
    --accent-gold: #c5a880;
    --accent-gold-hover: #b3946b;
    --text-light: #f5eedc;
    --text-muted: #a89f91;
    --glass-bg: rgba(28, 20, 14, 0.65);
    --glass-border: rgba(197, 168, 128, 0.18);
    --glass-shadow: rgba(0, 0, 0, 0.45);
    --transition-smooth: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    --font-heading: 'Cormorant Garamond', serif;
    --font-body: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: var(--primary-dark);
    color: var(--text-light);
    font-family: var(--font-body);
    overflow-x: hidden;
    line-height: 1.6;
}

/* ==========================================================================
   REUSABLE SYSTEM CORE COMPONENTS
   ========================================================================== */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.section-padding {
    padding: 100px 0;
}

.text-center { text-align: center; }
.text-gold { color: var(--accent-gold); }
.margin-top-md { margin-top: 50px; }
.margin-top-sm { margin-top: 30px; }
.w-full { width: 100%; }

.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

.glassmorphism {
    background: var(--glass-bg);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
    border-radius: 12px;
}

.section-subtitle {
    font-family: var(--font-body);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.85rem;
    color: var(--accent-gold);
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 600;
}

.section-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-light);
    line-height: 1.2;
}

/* BUTTON ARCHITECTURE */
.btn {
    display: inline-block;
    padding: 14px 32px;
    border-radius: 30px;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    transition: var(--transition-smooth);
    cursor: pointer;
    text-align: center;
}

.btn-primary {
    background-color: var(--accent-gold);
    color: var(--primary-dark);
    border: 1px solid var(--accent-gold);
}

.btn-primary:hover {
    background-color: var(--accent-gold-hover);
    border-color: var(--accent-gold-hover);
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--accent-gold);
    border: 1px solid var(--accent-gold);
}

.btn-secondary:hover {
    background-color: rgba(197, 168, 128, 0.1);
    transform: translateY(-2px);
}

.btn-sm { padding: 8px 20px; font-size: 0.85rem; }

/* ==========================================================================
   NAVIGATION BAR STYLES
   ========================================================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(18, 12, 8, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(197, 168, 128, 0.1);
    transition: var(--transition-smooth);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    max-width: 1400px;
    margin: 0 auto;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-light);
    text-decoration: none;
    letter-spacing: 1px;
}

.logo-gold { color: var(--accent-gold); }

.nav-menu {
    display: flex;
    align-items: center;
    gap: 35px;
}

.nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 400;
    transition: var(--transition-smooth);
    position: relative;
}

.nav-link:hover, .nav-link.active {
    color: var(--accent-gold);
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: var(--accent-gold);
    transition: var(--transition-smooth);
}

.nav-link:hover::after, .nav-link.active::after {
    width: 100%;
}

.nav-link-btn {
    background: var(--accent-gold);
    color: var(--primary-dark);
    padding: 8px 22px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: var(--transition-smooth);
}

.nav-link-btn:hover {
    background: var(--accent-gold-hover);
    transform: translateY(-1px);
}

.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--text-light);
    transition: var(--transition-smooth);
}

/* ==========================================================================
   1. PREMIUM HERO SECTION & STEAM ANIMATION
   ========================================================================== */
.hero-section {
    position: relative;
    height: 100vh;
    min-height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop') no-repeat center center/cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(18,12,8,0.8) 0%, rgba(18,12,8,0.95) 100%);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 850px;
    padding: 0 20px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 25px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(28, 20, 14, 0.5);
}

.status-badge.open .status-dot {
    width: 8px;
    height: 8px;
    background-color: #4cd137;
    border-radius: 50%;
    box-shadow: 0 0 8px #4cd137;
}

.status-badge.closed .status-dot {
    width: 8px;
    height: 8px;
    background-color: #e84118;
    border-radius: 50%;
    box-shadow: 0 0 8px #e84118;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 40px;
    font-weight: 300;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

/* COFFEE STEAM ENGINE ANIMATION */
.steam-container {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 2;
    opacity: 0.6;
}

.steam-line {
    width: 3px;
    height: 35px;
    background: linear-gradient(to top, rgba(197,168,128,0.8), transparent);
    border-radius: 50%;
    animation: riseSteam 3s infinite ease-in-out;
}

.steam-line:nth-child(2) { animation-delay: 0.7s; height: 45px; }
.steam-line:nth-child(3) { animation-delay: 1.4s; }

@keyframes riseSteam {
    0% { transform: translateY(0) scaleX(1); opacity: 0; }
    50% { transform: translateY(-20px) scaleX(2); opacity: 0.6; }
    100% { transform: translateY(-40px) scaleX(0.5); opacity: 0; }
}

/* ==========================================================================
   2. ABOUT US ARCHITECTURE
   ========================================================================== */
.about-img-container {
    position: relative;
    padding: 10px;
}

.about-img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid rgba(197, 168, 128, 0.2);
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    padding: 25px;
    text-align: center;
}

.experience-badge h3 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--accent-gold);
    line-height: 1;
}

.experience-badge p {
    font-size: 0.85rem;
    color: var(--text-light);
    margin-top: 5px;
}

.about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.about-text p {
    color: var(--text-muted);
    margin-top: 20px;
}

.about-stats {
    display: flex;
    gap: 40px;
    margin-top: 35px;
    border-top: 1px solid rgba(197, 168, 128, 0.15);
    padding-top: 25px;
}

.stat-item h4 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--accent-gold);
}

.stat-item p {
    margin-top: 2px;
    font-size: 0.9rem;
}

/* ==========================================================================
   3. WHY CHOOSE US ARCHITECTURE
   ========================================================================== */
.features-section {
    background: linear-gradient(to bottom, var(--primary-dark), var(--secondary-dark));
}

.feature-card {
    padding: 40px 30px;
    text-align: center;
    transition: var(--transition-smooth);
}

.feature-card:hover {
    transform: translateY(-8px);
    border-color: rgba(197, 168, 128, 0.35);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--accent-gold);
    margin-bottom: 20px;
}

.feature-card h3 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    margin-bottom: 12px;
}

.feature-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* ==========================================================================
   4. MENU ARCHITECTURE
   ========================================================================== */
.menu-tabs {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
}

.tab-btn {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: var(--text-muted);
    padding: 10px 24px;
    border-radius: 20px;
    cursor: pointer;
    font-family: var(--font-body);
    transition: var(--transition-smooth);
}

.tab-btn.active, .tab-btn:hover {
    background: var(--accent-gold);
    color: var(--primary-dark);
    border-color: var(--accent-gold);
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    transition: var(--transition-smooth);
}

.menu-item:hover {
    border-color: rgba(197, 168, 128, 0.3);
    background: rgba(28, 20, 14, 0.8);
}

.menu-item-info h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--text-light);
    display: flex;
    align-items: center;
    gap: 10px;
}

.badge-signature {
    font-family: var(--font-body);
    font-size: 0.65rem;
    background: rgba(197, 168, 128, 0.2);
    color: var(--accent-gold);
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
}

.menu-item-info p {
    color: var(--text-muted);
    font-size: 0.88rem;
    margin-top: 4px;
}

/* ==========================================================================
   5. GALLERY & IMAGE SLIDER
   ========================================================================== */
.slider-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.slider-wrapper {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide {
    min-width: 100%;
    height: 450px;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(18, 12, 8, 0.7);
    border: 1px solid rgba(197, 168, 128, 0.3);
    color: var(--accent-gold);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-smooth);
    z-index: 5;
}

.slider-btn:hover {
    background: var(--accent-gold);
    color: var(--primary-dark);
}

.prev-btn { left: 20px; }
.next-btn { right: 20px; }

.slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 5;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    cursor: pointer;
    transition: var(--transition-smooth);
}

.dot.active {
    background: var(--accent-gold);
    width: 24px;
    border-radius: 5px;
}

/* ==========================================================================
   6. BRANCHES ARCHITECTURE
   ========================================================================== */
.branch-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
}

.branch-info {
    padding: 35px;
}

.branch-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--accent-gold);
    letter-spacing: 2px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 5px;
}

.branch-info h3 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    margin-bottom: 15px;
}

.branch-info p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.branch-info .btn {
    margin-top: 15px;
}

.map-wrapper {
    width: 100%;
    height: 250px;
    border-top: 1px solid var(--glass-border);
}

.map-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(0.8) invert(0.9) contrast(1.2);
}

/* ==========================================================================
   7. GOOGLE REVIEWS ARCHITECTURE
   ========================================================================== */
.reviews-section {
    background: linear-gradient(to top, var(--primary-dark), var(--secondary-dark));
}

.review-card {
    padding: 35px;
    position: relative;
}

.review-stars {
    color: var(--accent-gold);
    font-size: 0.85rem;
    margin-bottom: 15px;
}

.review-text {
    font-style: italic;
    color: var(--text-muted);
    font-size: 0.95rem;
}

.review-author {
    margin-top: 20px;
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--text-light);
    font-weight: 600;
}

/* ==========================================================================
   8 & 9. CONTACT & FRANCHISE ENGINE PANELS
   ========================================================================== */
.contact-panel, .franchise-panel {
    padding: 45px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.panel-desc {
    color: var(--text-muted);
    margin: 15px 0 30px 0;
    font-size: 0.95rem;
}

.info-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: auto;
}

.info-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.info-item i {
    font-size: 1.3rem;
    color: var(--accent-gold);
    background: rgba(197, 168, 128, 0.1);
    padding: 12px;
    border-radius: 50%;
}

.info-item h4 {
    font-size: 1rem;
    font-weight: 500;
}

.info-item p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-top: 2px;
}

.info-item p a {
    color: var(--text-muted);
    text-decoration: none;
    transition: var(--transition-smooth);
}

.info-item p a:hover {
    color: var(--accent-gold);
}

/* ==========================================================================
   10. PREMIUM FOOTER DESIGN
   ========================================================================== */
.main-footer {
    background-color: #0c0805;
    border-top: 1px solid rgba(197, 168, 128, 0.1);
    padding: 70px 0 30px 0;
}

.footer-col h3 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    color: var(--accent-gold);
    margin-bottom: 15px;
}

.footer-about-text {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.footer-col h4 {
    font-size: 1.1rem;
    margin-bottom: 18px;
    position: relative;
    padding-bottom: 5px;
}

.footer-col h4::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: var(--accent-gold);
    bottom: 0;
    left: 0;
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: var(--text-muted);
}

.footer-col ul li a {
    color: var(--text-muted);
    text-decoration: none;
    transition: var(--transition-smooth);
}

.footer-col ul li a:hover {
    color: var(--accent-gold);
    padding-left: 4px;
}

.footer-tel {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 8px;
}

.footer-tel a {
    color: var(--text-light);
    text-decoration: none;
}

.footer-bottom {
    margin-top: 50px;
    padding-top: 25px;
    border-top: 1px solid rgba(255,255,255,0.05);
    font-size: 0.85rem;
    color: var(--text-muted);
}

/* ==========================================================================
   STRATEGIC FLOATING TRIGGERS
   ========================================================================== */
.floating-actions {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 999;
}

.float-btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: var(--transition-smooth);
}

.float-btn:hover {
    transform: scale(1.1);
}

.whatsapp-float { background-color: #25d366; }
.call-float { background-color: var(--accent-gold); color: var(--primary-dark); }

/* ==========================================================================
   ANIMATION INTERACTION SUBSYSTEMS (SCROLL REVEAL)
   ========================================================================== */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.animate-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUpIn 1s forwards cubic-bezier(0.25, 1, 0.5, 1);
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

@keyframes fadeUpIn {
    to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   RESPONSIVE DESIGN SYSTEM MEDIA QUERIES
   ========================================================================== */
@media (max-width: 992px) {
    .grid-4, .grid-3 { grid-template-columns: repeat(2, 1fr); }
    .grid-2, .menu-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 3.2rem; }
    .section-title { font-size: 2.4rem; }
    .about-img-container { margin-bottom: 30px; }
    .experience-badge { right: 10px; }
}

@media (max-width: 768px) {
    .hamburger { display: block; }
    .hamburger.active .bar:nth-child(2) { opacity: 0; }
    .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 80px;
        flex-direction: column;
        background: rgba(18,12,8,0.98);
        width: 100%;
        height: calc(100vh - 80px);
        text-align: center;
        gap: 30px;
        padding-top: 40px;
        transition: 0.4s ease;
    }
    
    .nav-menu.active { left: 0; }
    .hero-title { font-size: 2.5rem; }
    .hero-subtitle { font-size: 1rem; }
    .hero-buttons { flex-direction: column; gap: 12px; }
    .grid-4, .grid-3 { grid-template-columns: 1fr; }
    .section-padding { padding: 60px 0; }
    .contact-panel, .franchise-panel { padding: 25px; }
    .slide { height: 300px; }
}

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Shop Open / Closed Status
const hour = new Date().getHours();
const status = document.createElement("div");

status.style.position = "fixed";
status.style.bottom = "20px";
status.style.left = "20px";
status.style.padding = "10px 15px";
status.style.borderRadius = "10px";
status.style.color = "#fff";
status.style.fontWeight = "bold";
status.style.zIndex = "9999";

if (hour >= 5 && hour < 21) {
    status.style.background = "green";
    status.innerHTML = "🟢 Open Now";
} else {
    status.style.background = "red";
    status.innerHTML = "🔴 Closed";
}

document.body.appendChild(status);
// ===========================
// Madras Premium Coffee
// script.js
// ===========================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Header Shadow on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";
    }

});

// Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

console.log("Madras Premium Coffee Website Loaded Successfully!");

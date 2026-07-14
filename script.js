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

// Counter settings
const counters = [
    { id: 'client-count', end: 200 },
    { id: 'project-count', end: 250 },
    { id: 'years-count', end: 25 }
];

// Increment function for animation
function animateCount(counter) {
    const element = document.getElementById(counter.id);
    let current = 0;
    const increment = Math.ceil(counter.end / 100);
    const interval = setInterval(() => {
        current += increment;
        if (current > counter.end) current = counter.end;
        element.textContent = current;
        if (current === counter.end) clearInterval(interval);
    }, 30); // Adjusts animation speed
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    counters.forEach(counter => animateCount(counter));
});

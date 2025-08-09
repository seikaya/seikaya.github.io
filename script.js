// Splash screen logic with smooth fade-out
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const navbar = document.getElementById('navbar');

    setTimeout(() => {
        splash.classList.add('fade-out');
        // Wait for CSS fade-out transition to finish before hiding splash & showing navbar
        splash.addEventListener('transitionend', () => {
            splash.style.display = 'none';
            navbar.classList.add('show');
        }, { once: true });
    }, 3000);
});

// Navigation logic
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.page-section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        // Update active button
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Smooth section change
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    });
});

// Background dots animation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let dots = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Dot {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.alpha = 0;
        this.fadeIn = true;
        this.speed = Math.random() * 0.5 + 0.2;
    }
    update() {
        if (this.fadeIn) {
            this.alpha += 0.01;
            if (this.alpha >= 1) this.fadeIn = false;
        } else {
            this.alpha -= 0.005;
            if (this.alpha <= 0) this.reset();
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha.toFixed(2)})`;
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) {
    dots.push(new Dot());
}

function animateDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
        dot.update();
        dot.draw();
    });
    requestAnimationFrame(animateDots);
}
animateDots();

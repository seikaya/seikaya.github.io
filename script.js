// Splash screen logic with smooth fade-out..
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const navbar = document.getElementById('navbar');

    setTimeout(() => {
        splash.classList.add('fade-out');
        splash.addEventListener('transitionend', () => {
            splash.style.display = 'none';
            navbar.classList.add('show');
        }, { once: true });
    }, 2000);
});

// Navigation logiccc
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.page-section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    });
});

// Background dots animations and such
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
        // Randomly start faded in or out..
        this.alpha = Math.random();
        this.fadeIn = Math.random() < 0.5;
        // Random fade speed per dot (makes them twinkle asynchronously!)
        this.fadeSpeedIn = 0.005 + Math.random() * 0.015;   // 0.005 to 0.02
        this.fadeSpeedOut = 0.002 + Math.random() * 0.01;   // 0.002 to 0.012
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        // Alpha & fadeIn handled in constructor!
    }
    update() {
        if (this.fadeIn) {
            this.alpha += this.fadeSpeedIn;
            if (this.alpha >= 1) {
                this.alpha = 1;
                this.fadeIn = false;
            }
        } else {
            this.alpha -= this.fadeSpeedOut;
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.reset();
                this.fadeIn = true;
            }
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha.toFixed(2)})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${this.alpha.toFixed(2)})`;
        ctx.shadowBlur = this.size * 2;
        ctx.fill();
    }
}

dots = [];
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
// Meh

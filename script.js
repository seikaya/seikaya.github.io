// Splash fade out and main content fade in
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    const main = document.getElementById('mainContent');

    splash.classList.add('fade-out');

    // Wait for fade-out to complete (match this to your CSS transition duration)
    setTimeout(() => {
      splash.style.display = 'none';
      main.classList.remove('hidden');
      main.classList.add('fade-in');
    }, 2000); // 2000ms = 2 seconds fade-out time
  }, 3000); // Wait 3 seconds before starting the transition
});

// Smooth scroll on nav clicks
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

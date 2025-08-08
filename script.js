window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const mainContent = document.getElementById('mainContent');
  const toolbar = document.getElementById('toolbar');

  // Show splash for 3 seconds then fade out
  setTimeout(() => {
    splash.classList.add('fade-out');

    splash.addEventListener('transitionend', () => {
      splash.style.display = 'none';

      // Show main content and toolbar with fade-in
      mainContent.classList.remove('hidden');
      mainContent.classList.add('fade-in');

      toolbar.classList.remove('hidden');
      setTimeout(() => {
        toolbar.classList.add('visible');
      }, 100); // tiny delay for smooth fade
    }, { once: true });
  }, 3000);
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

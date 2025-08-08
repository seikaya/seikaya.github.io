// Wait for page loads
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('mainContent');
  const toolbar = document.querySelector('.toolbar');

  // Start fading splash after 3s
  setTimeout(() => {
    splash.classList.add('fade-out');

    // After fade duration (2s), hide splash and show main content
    setTimeout(() => {
      splash.style.display = 'none';
      main.classList.remove('hidden');
      main.classList.add('fade-in');

      // Show toolbar once main content visible
      toolbar.classList.remove('hidden');

    }, 2000);
  }, 3000);
});

// Smooth scroll on nav clicks
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Toolbar visibility on scroll: appear after 100px scroll
window.addEventListener('scroll', () => {
  const toolbar = document.querySelector('.toolbar');
  if (window.scrollY > 100) {
    toolbar.classList.add('visible');
  } else {
    toolbar.classList.remove('visible');
  }
});

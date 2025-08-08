// Splash screen logic
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('mainContent');
  const toolbar = document.querySelector('.toolbar');

  // Start fade-in on splash
  splash.classList.add('fade-in');

  // Start fading out after a short delay
  setTimeout(() => {
    splash.classList.remove('fade-in');
    splash.classList.add('fade-out');

    // After fade duration (match CSS!), hide splash and show main content
    splash.addEventListener("transitionend", () => {
      splash.style.display = "none";
      main.classList.remove("hidden");
      main.classList.add("fade-in");
      toolbar.classList.remove("hidden");
    }, { once: true });

  }, 2500); // Splash stays visible for 2.5 seconds
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Toolbar visibility on scroll
window.addEventListener('scroll', () => {
  const toolbar = document.querySelector('.toolbar');
  if (window.scrollY > 100) {
    toolbar.classList.add('visible');
  } else {
    toolbar.classList.remove('visible');
  }
});

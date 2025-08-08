window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const mainContent = document.getElementById('mainContent');
  const toolbar = document.getElementById('toolbar');
  const pages = document.querySelectorAll('.page');

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

  // Dynamic page switching for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetPage = document.getElementById(targetId);
      if (!targetPage) return;

      // Remove active class from all pages
      pages.forEach(page => page.classList.remove('active-page'));

      // Add active class to target page
      targetPage.classList.add('active-page');
    });
  });
});

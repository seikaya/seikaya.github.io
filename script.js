window.addEventListener('load', () => {
  console.log('Page loaded');
  const splash = document.getElementById('splash');
  const mainContent = document.getElementById('mainContent');
  const toolbar = document.getElementById('toolbar');
  const pages = document.querySelectorAll('.page');

  setTimeout(() => {
    console.log('Fading out splash');
    splash.classList.add('fade-out');

    splash.addEventListener('transitionend', () => {
      console.log('Splash fade-out finished');
      splash.style.display = 'none';

      mainContent.classList.remove('hidden');
      mainContent.classList.add('fade-in');

      toolbar.classList.remove('hidden');
      setTimeout(() => {
        toolbar.classList.add('visible');
        console.log('Toolbar visible now');
      }, 100);
    }, { once: true });
  }, 3000);

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetPage = document.getElementById(targetId);
      if (!targetPage) {
        console.log(`Page not found: ${targetId}`);
        return;
      }
      pages.forEach(page => page.classList.remove('active'));
      targetPage.classList.add('active');
      console.log(`Switched to page: ${targetId}`);
    });
  });
});

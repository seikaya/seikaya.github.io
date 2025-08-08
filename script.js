<script>
  // Splash fade out and main content fade in
  window.addEventListener('load', () => {
    setTimeout(() => {
      const splash = document.getElementById('splash');
      const main = document.getElementById('mainContent');

      splash.classList.add('fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
        main.classList.remove('hidden');
        main.classList.add('fade-in');
      }, 2000); // was 1000, now 2s to match CSS
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
</script>

document.addEventListener('DOMContentLoaded', ()=>{
  const splash = document.getElementById('splash');
  const site = document.getElementById('site');
  const panels = document.querySelectorAll('.panel');

  setTimeout(()=>{
    splash.classList.add('fadeOut');
    setTimeout(()=>{
      splash.classList.add('hidden');
      site.classList.remove('hidden');
      void site.offsetWidth; site.classList.add('show');
    }, 900);
  }, 3000);

  // SPA navigation
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-page');
      panels.forEach(p => p.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });
});

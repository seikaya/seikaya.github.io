// Wait DOM
document.addEventListener('DOMContentLoaded', ()=>{
  const splash = document.getElementById('splash');
  const site = document.getElementById('site');

  // After 3 seconds, fade splash and reveal site
  setTimeout(()=>{
    // start text fade animation
    splash.classList.add('fadeOut');

    // hide splash after animation ends (match CSS transition-time: .9s)
    setTimeout(()=>{
      splash.classList.add('hidden');
      // reveal site (fade in)
      site.classList.remove('hidden');
      // force a repaint then add show for transition
      void site.offsetWidth;
      site.classList.add('show');
    }, 900);
  }, 3000);

  // Smooth scrolling for internal nav
  document.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Optional: close mobile nav or add more interactivity here
});

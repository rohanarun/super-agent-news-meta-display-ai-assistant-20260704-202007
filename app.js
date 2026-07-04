(function(){
  try {
    var gsapScript = document.createElement('script');
    gsapScript.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
    gsapScript.onload = function(){
      if (!window.gsap) return;
      gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
      gsap.from('.media-frame', { y: 30, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
      gsap.utils.toArray('.compare-card, .bento-item').forEach(function(el){
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 80%' }, y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' });
      });
    };
    document.head.appendChild(gsapScript);
  } catch (e) { /* animations optional */ }
})();
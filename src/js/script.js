document.addEventListener('DOMContentLoaded', () => {
  
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tema = btn.dataset.tema;
      document.documentElement.setAttribute('data-tema', tema);
    });
  });

  const slides = document.querySelectorAll('.slide');
  let slideAtual = 0;

  function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[index].classList.add('ativo');
  }

  if (slides.length > 0) {
    setInterval(() => {
      slideAtual = (slideAtual + 1) % slides.length;
      mostrarSlide(slideAtual);
    }, 4000);
  }
});
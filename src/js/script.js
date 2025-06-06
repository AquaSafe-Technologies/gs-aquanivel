document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
});

document.querySelectorAll('.tema-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tema = btn.dataset.tema;
    document.documentElement.setAttribute('data-tema', tema);
  });
});
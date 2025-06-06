// script.js - Tema, slideshow, menu hambúrguer e envio de formulário

document.addEventListener('DOMContentLoaded', () => {

// Alternância do menu em telas pequenas
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

// Troca de tema via botão
  document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tema = btn.dataset.tema;
      document.documentElement.setAttribute('data-tema', tema);
    });
  });

// Lógica do slideshow automático
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

  // Validação do formulário de contato
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      const sucesso = document.getElementById('mensagem-sucesso');

      if (nome && email && mensagem) {
        sucesso.style.display = 'block';
        form.reset();
      } else {
        sucesso.style.display = 'none';
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }

});

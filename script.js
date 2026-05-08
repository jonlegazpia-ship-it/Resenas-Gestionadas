// ── Formulario contacto ──
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  if (!nombre || !telefono) return;
  this.style.display = 'none';
  document.getElementById('formOk').style.display = 'block';
});

// ── FAQ acordeón ──
document.querySelectorAll('.faq-pregunta').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const abierto = item.classList.contains('abierto');
    document.querySelectorAll('.faq-item.abierto').forEach(el => {
      el.classList.remove('abierto');
      el.querySelector('.faq-pregunta').setAttribute('aria-expanded', 'false');
    });
    if (!abierto) {
      item.classList.add('abierto');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ── Fade-in al scroll ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  const siblings = el.parentElement.querySelectorAll('.fade-in');
  let delay = 0;
  siblings.forEach((s, idx) => { if (s === el) delay = idx * 80; });
  el.style.transitionDelay = delay + 'ms';
  observer.observe(el);
});

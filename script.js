// Kontakt formasi
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.');
  e.target.reset();
});

// Fade-in scroll animatsiyasi
const fadeSections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  fadeSections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add('visible');
    }
  });
});

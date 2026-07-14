// Scroll to top button
window.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', function() { window.scrollTo({top: 0, behavior: 'smooth'}); });
});

// Copy BibTeX
function copyBibTeX() {
  var el = document.getElementById('bibtex-code');
  if (!el) return;
  var txt = el.innerText || el.textContent;
  navigator.clipboard.writeText(txt).then(function() {
    var btn = document.querySelector('.copy-btn');
    if (btn) { btn.classList.add('copied'); btn.innerHTML = '<i class="fas fa-check"></i> Copied!'; setTimeout(function() { btn.classList.remove('copied'); btn.innerHTML = '<i class="fas fa-copy"></i> Copy'; }, 2000); }
  }).catch(function() {
    alert('Failed to copy BibTeX');
  });
}

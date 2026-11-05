// FILE: script.js (isi JavaScript saja). Tempel HANYA kode JavaScript di file ini
(function () {
  // ===== Tab navigasi =====
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.panel');

  function showTab(id, push) {
    if (!document.getElementById(id)) id = 'about';
    tabs.forEach(function (t) {
      var on = t.dataset.tab === id;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on);
    });
    panels.forEach(function (p) {
      var on = p.id === id;
      p.classList.toggle('active', on);
      p.hidden = !on;
    });
    if (push) { try { history.replaceState(null, '', '#' + id); } catch (e) {} }
    window.scrollTo(0, 0);
  }

  tabs.forEach(function (t) { t.addEventListener('click', function () { showTab(t.dataset.tab, true); }); });
  var brand = document.querySelector('.brand');
  if (brand) brand.addEventListener('click', function (e) { e.preventDefault(); showTab('about', true); });
  showTab(location.hash.slice(1) || 'about', false);

  // ===== Galeri foto (slider) =====
  try {
    document.querySelectorAll('.gallery').forEach(function (g) {
      var slides = Array.prototype.slice.call(g.querySelectorAll('.slide'));
      var dots = g.querySelector('.dots');
      var i = 0;
      function go(n) {
        i = (n + slides.length) % slides.length;
        slides.forEach(function (s, k) { s.classList.toggle('active', k === i); });
        Array.prototype.forEach.call(dots.children, function (d, k) { d.classList.toggle('on', k === i); });
      }
      slides.forEach(function (_, n) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Photo ' + (n + 1));
        b.addEventListener('click', function () { go(n); });
        dots.appendChild(b);
      });
      g.querySelector('.g-prev').addEventListener('click', function () { go(i - 1); });
      g.querySelector('.g-next').addEventListener('click', function () { go(i + 1); });
      go(0);
    });
  } catch (e) { console.error('Gallery:', e); }

  // ===== Perbesar gambar (lightbox) untuk gambar ber-class "zoom" =====
  try {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<img alt=""><button type="button" aria-label="Close">&times;</button>';
    document.body.appendChild(box);
    var boxImg = box.querySelector('img');
    document.addEventListener('click', function (e) {
      var img = e.target.closest ? e.target.closest('img.zoom') : null;
      if (img) { boxImg.src = img.currentSrc || img.src; boxImg.alt = img.alt; box.classList.add('open'); }
      else if (box.classList.contains('open')) { box.classList.remove('open'); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') box.classList.remove('open'); });
  } catch (e) { console.error('Lightbox:', e); }

  // ===== Tahun otomatis di footer =====
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
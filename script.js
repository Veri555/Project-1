// Tab navigasi: klik tab -> tampilkan panel yang sesuai
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function showTab(id, pushHash = true) {
  if (!document.getElementById(id)) id = 'about';
  tabs.forEach(t => {
    const on = t.dataset.tab === id;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on);
  });
  panels.forEach(p => {
    const on = p.id === id;
    p.classList.toggle('active', on);
    p.hidden = !on;
  });
  if (pushHash) history.replaceState(null, '', '#' + id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabs.forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));
document.querySelector('.brand').addEventListener('click', e => { e.preventDefault(); showTab('about'); });

// Buka tab sesuai alamat (#projects, dst.) saat halaman dimuat
showTab(location.hash.slice(1) || 'about', false);
window.scrollTo(0, 0);

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox: klik foto kegiatan / sertifikat untuk memperbesar
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img alt="">';
document.body.appendChild(lightbox);
const lbImg = lightbox.querySelector('img');

document.addEventListener('click', e => {
  const box = e.target.closest('.gallery .shot, .media.doc');
  const img = box && box.querySelector('img');
  if (img) { lbImg.src = img.src; lbImg.alt = img.alt; lightbox.classList.add('open'); }
  else if (lightbox.classList.contains('open')) lightbox.classList.remove('open');
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
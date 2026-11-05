:root{
  --bg1:#030a24; --bg2:#0a2a8c;
  --card:rgba(9,26,88,.62); --card-line:#2c55cf;
  --blue:#1f4fd8; --blue-soft:#8fb0ff;
  --yellow:#FFE14D; --white:#fff; --text:#E6EDFF; --muted:#9db3e8;
  --head:"Archivo",system-ui,sans-serif; --body:"IBM Plex Sans",system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;background:var(--bg1)}
body{
  font:400 1rem/1.65 var(--body);color:var(--text);min-height:100vh;
  background:
    radial-gradient(900px 500px at 85% 105%,rgba(52,110,255,.45),transparent 60%),
    linear-gradient(160deg,var(--bg1) 35%,var(--bg2) 130%);
  background-attachment:fixed;-webkit-font-smoothing:antialiased;
}
.wrap{width:min(1120px,100% - 2.5rem);margin-inline:auto}
a{color:inherit}
ul{padding:0;list-style:none}
h1,h2,h3,h4{font-family:var(--head);line-height:1.15}
:focus-visible{outline:3px solid var(--yellow);outline-offset:3px}

/* Header & tabs */
.site-header{position:sticky;top:0;z-index:10;background:rgba(3,10,36,.82);backdrop-filter:blur(10px);border-bottom:1px solid rgba(143,176,255,.2)}
.bar{display:flex;align-items:center;gap:1.5rem;min-height:68px}
.brand{font:800 1.1rem var(--head);text-decoration:none;color:var(--yellow);white-space:nowrap}
.tabs{display:flex;gap:.6rem;overflow-x:auto;padding:.5rem 0;margin-left:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{font:500 .95rem var(--body);white-space:nowrap;cursor:pointer;color:var(--white);background:var(--blue);border:0;border-radius:999px;padding:.5rem 1.1rem;transition:transform .15s,background .15s}
.tab:hover{transform:translateY(-1px);background:#2c63f5}
.tab.active{background:var(--yellow);color:#0a1740;font-weight:600}

/* Panels */
.panel{display:none;padding:2.5rem 0 3rem;animation:fade .35s ease}
.panel.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.page-title{font-size:clamp(2rem,5vw,3.2rem);font-weight:800;color:var(--yellow);margin-bottom:1.75rem}
.page-title span{color:var(--white)}
.section-label{font-size:1.4rem;color:var(--yellow);margin:2.25rem 0 1rem;display:flex;align-items:center;gap:.6rem}
.section-label::before{content:"✱";color:var(--white)}
.section-label:first-of-type{margin-top:0}

/* Layout */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;align-items:start}
.stack{display:grid;gap:1.5rem}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem}

/* Cards */
.card{background:var(--card);border:1.5px solid var(--card-line);border-radius:16px;padding:1.5rem;box-shadow:0 10px 30px rgba(0,0,40,.35)}
.card-title{font-size:1.15rem;color:var(--yellow);margin-bottom:1rem}
.card-title.center{text-align:center;font-size:1.5rem;color:var(--white)}
.mini-title{font-size:.95rem;color:var(--white);margin:1rem 0 .6rem}
.card-title + .mini-title{margin-top:0}
.subtitle{color:var(--blue-soft);font-weight:500}
.eyebrow{color:var(--yellow);font-size:.85rem;font-weight:500;letter-spacing:.04em;text-transform:uppercase;margin-bottom:.35rem}
.hint{text-align:center;color:var(--muted);font-size:.82rem;margin-top:.6rem}

/* Pills & chips */
.pill{display:inline-block;background:var(--blue);color:var(--white);border:1px solid var(--blue-soft);border-radius:8px;padding:.25rem .8rem;font-size:.9rem;white-space:nowrap}
.chips{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.9rem}
.chips li{font-size:.85rem;padding:.2rem .75rem;border:1px solid var(--card-line);border-radius:999px;color:var(--text);background:rgba(31,79,216,.25)}
.chips li.hl{background:var(--yellow);border-color:var(--yellow);color:#0a1740;font-weight:500}
.chips.big{margin-top:0}
.chips.big li{font-size:.95rem;padding:.3rem .9rem}
.mini-title + .chips{margin-top:0}

/* Bullets */
.bullets{display:grid;gap:.45rem;margin-top:.7rem}
.bullets li{position:relative;padding-left:1.1rem;color:var(--text);font-size:.95rem;line-height:1.55}
.bullets li::before{content:"";position:absolute;left:0;top:.6em;width:6px;height:6px;border-radius:50%;background:var(--yellow)}

/* Software logos */
.sw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.6rem}
.sw{display:flex;align-items:center;gap:.65rem;padding:.45rem .7rem .45rem .5rem;border:1px solid var(--card-line);border-radius:12px;background:rgba(31,79,216,.2);font-size:.88rem;line-height:1.25}
.logo{position:relative;width:36px;height:36px;flex:none;border-radius:9px;background:#fff;display:grid;place-items:center;overflow:hidden}
.logo b{font:800 .75rem var(--head);color:#0a1740}
.logo img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:5px;background:#fff}

/* About */
.intro{display:grid;grid-template-columns:150px 1fr;gap:1.5rem;align-items:start}
.intro h2{font-size:1.7rem;color:var(--white)}
.intro .subtitle{margin:.2rem 0 .8rem}
.edu{display:flex;justify-content:space-between;gap:1rem;align-items:flex-start}
.edu p{color:var(--muted)}
.contact-card{display:flex;justify-content:space-between;align-items:center;gap:1rem}
.mail{color:var(--yellow);font-weight:500;word-break:break-all}
.actions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1rem}
.btn{display:inline-block;padding:.5rem 1.1rem;border:1.5px solid var(--blue-soft);border-radius:999px;text-decoration:none;font-weight:500;font-size:.95rem;transition:background .15s,color .15s}
.btn:hover{background:var(--white);color:#0a1740}
.btn.primary{background:var(--yellow);border-color:var(--yellow);color:#0a1740}
.btn.primary:hover{background:var(--white);border-color:var(--white)}

/* Media (foto/sertifikat). Kalau gambar belum ada, kotak putus-putus tampil sebagai penanda */
.media{position:relative;overflow:hidden;border-radius:12px;border:1.5px dashed rgba(143,176,255,.5);background:rgba(255,255,255,.04);display:grid;place-items:center}
.media::before{content:attr(data-label);color:var(--muted);font-size:.9rem}
.media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.media:has(img){border-style:solid;border-color:rgba(143,176,255,.35)}
.media.avatar{width:150px;aspect-ratio:1;border-radius:16px}
.media.avatar img{object-position:center 20%}
.media.qr{width:130px;flex:none;aspect-ratio:1}
.media.qr img{object-fit:contain;background:#fff;padding:6px}
.media.doc{aspect-ratio:3/4;background:rgba(255,255,255,.08)}
.media.doc img{object-fit:contain;background:#fff}
.media.shot{aspect-ratio:16/9;margin-bottom:1rem}
.zoom{cursor:zoom-in}

/* Gallery */
.gallery{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:4/3;background:#030a24;border:1px solid rgba(143,176,255,.35)}
.slide{position:absolute;inset:0;opacity:0;transition:opacity .35s;pointer-events:none;overflow:hidden}
.slide.active{opacity:1;pointer-events:auto}
.slide::before{content:"";position:absolute;inset:-24px;background:var(--img) center/cover;filter:blur(18px) brightness(.55)}
.slide img{position:relative;width:100%;height:100%;object-fit:contain}
.g-btn{position:absolute;top:50%;transform:translateY(-50%);width:38px;height:38px;border:0;border-radius:50%;background:rgba(3,10,36,.7);color:#fff;font-size:1.6rem;line-height:1;cursor:pointer;display:grid;place-items:center;padding-bottom:3px}
.g-btn:hover{background:var(--yellow);color:#0a1740}
.g-prev{left:.6rem}.g-next{right:.6rem}
.dots{position:absolute;left:0;right:0;bottom:.6rem;display:flex;justify-content:center;gap:.4rem}
.dots button{width:9px;height:9px;border-radius:50%;border:0;padding:0;background:rgba(255,255,255,.5);cursor:pointer}
.dots button.on{background:var(--yellow);width:22px;border-radius:6px}

/* Experience */
.exp{margin-bottom:3rem}
.exp-head{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:1.1rem}
.exp-head h2{font-size:clamp(1.4rem,3vw,2rem);color:var(--white)}
.exp-grid{align-items:stretch}
.kv{margin-top:1rem;text-align:left}
.kv b{color:var(--yellow)}
.output{display:flex;flex-direction:column}
.output .media{flex:1;min-height:340px}

/* Projects */
.featured{display:grid;grid-template-columns:1.6fr 1fr;gap:2rem;margin-bottom:1.25rem;background:linear-gradient(135deg,rgba(31,79,216,.55),rgba(9,26,88,.7))}
.featured h3{font-size:1.5rem;margin-bottom:.7rem;color:var(--white)}
.featured p{color:var(--text)}
.stats{display:grid;gap:1rem;align-content:center}
.stats div{border-left:4px solid var(--yellow);padding-left:1rem}
.stats dt{color:var(--blue-soft);font-size:.95rem}
.stats dd{font:800 2.1rem var(--head);color:var(--yellow)}
.stats.text dd{font-size:1.15rem;line-height:1.3}
.thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin-top:1.1rem}
.thumbs img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:10px;border:1px solid rgba(143,176,255,.35);transition:transform .2s,border-color .2s}
.thumbs img:hover{transform:scale(1.03);border-color:var(--yellow)}
.project h3,.org h3{font-size:1.15rem;color:var(--white);margin-bottom:.5rem}
.project p,.org p{color:var(--muted)}
.project{transition:transform .2s,border-color .2s}
.project:hover{transform:translateY(-4px);border-color:var(--yellow)}

/* Organizational & cert */
.org .pill{margin-bottom:.8rem}
.cert{display:grid;grid-template-columns:150px 1fr;gap:1.25rem;align-items:center}
.cert .pill{margin-bottom:.6rem}
.cert h3{font-size:1.1rem;color:var(--white);margin-bottom:.3rem}
.cert p{color:var(--muted)}

/* Lightbox */
.lightbox{position:fixed;inset:0;z-index:50;background:rgba(3,10,36,.92);display:none;place-items:center;padding:1.5rem;cursor:zoom-out}
.lightbox.open{display:grid}
.lightbox img{max-width:min(94vw,1100px);max-height:90vh;object-fit:contain;border-radius:10px;background:#fff0;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.lightbox button{position:absolute;top:1rem;right:1rem;width:44px;height:44px;border:0;border-radius:50%;background:var(--yellow);color:#0a1740;font-size:1.5rem;cursor:pointer}

/* Footer */
.footer{padding:1.5rem 0 2.5rem;color:var(--muted);font-size:.9rem;border-top:1px solid rgba(143,176,255,.2)}

/* Mobile */
@media (max-width:860px){
  .bar{flex-direction:column;align-items:stretch;gap:0;padding-top:.6rem}
  .tabs{margin-left:0}
  .grid-2,.featured{grid-template-columns:1fr}
  .intro{grid-template-columns:1fr}
  .media.avatar{width:130px}
  .exp-head{flex-direction:column}
  .contact-card{flex-direction:column;align-items:flex-start}
  .cert{grid-template-columns:110px 1fr}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .panel{animation:none}
  .project,.tab,.slide,.thumbs img{transition:none}
}
/* ===================================================
   FOREVER FRIENDS — script.js
   =================================================== */

/* ── 1. MEMORY CONFIGURATION ─────────────────────────
   Add your memories here. Each object represents one
   memory card in the Timeline and Gallery sections.
   ───────────────────────────────────────────────────── */
const MEMORIES = [
  {
    image: "img/photo1.jpeg",
    title: "The Day We Took Our First Photo Together",
    date: "2026-03-05",
    description: "A photo in which we both are together like bestfriends."
  },
  {
    image: "img/photo2.jpeg",
    title: "The pee flower you told me about 😂",
    date: "2025-04-22",
    description: "Hours turned to minutes whenever we talked. Stars were our witnesses, and laughter was our language."
  },
  {
    image: "img/photo3.jpeg",
    title: "You taught me how to apply Face pack 😅",
    date: "2021-04-10",
    description: "You didn't told me that dont apply on beard 😭"
  },
  {
    image: "img/photo4.jpeg",
    title: "The worst Trips best part ❤️",
    date: "2021-09-05",
    description: "Spontaneous decisions make the best stories. We walked in strangers and left with memories that will outlive us both."
  },
  {
    image: "img/photo5.jpeg",
    title: "I dont have the photo but i messaged you first when we weere in FY",
    date: "2024-08-21",
    description: " By the way i won the debate😁",
  },
  {
    image: "img/photo6.jpeg",
    title: "You made me laugh when i cried a lot ",
    date: "2026-06-06",
    description: "You did made me smile when i cried a lot that day so you deserve every word wrote in this website 🥹",
  },
  {
    image: "img/photo7.jpeg",
    title: "The Unexpected Getaway",
    date: "2026-06-13",
    description: "I dont wanna fill this section in my whole life just beacuse i dont wanna loose anyone now",
  },
  {
    image: "img/photo8.jpeg",
    title: "A silence made you emotional",
    date: "2026-06-09",
    description:"You told me that more than one people broke you from inside, but you are a stonrg women so be cool and proud of your self",
  }
];

/* ── 2. BEST MOMENTS CONFIGURATION ───────────────────
   These appear as large featured cards in the
   'Best Moments' section. Use your best photos here.
   ───────────────────────────────────────────────────── */
const BEST_MOMENTS = [
  {
    image: "img/photo1.jpeg",
    tag: "Unforgettable",
    title: "The Moment we clicked photo that we planned to take for 2 days 🤣",
    description: "We should click more photos like this ",
  },
  {
    image: "img/photo3.jpeg",
    tag: "Adventure",
    title: "Ye dekh kr hasna mtt kyu ki mera chehera gnada aaya hai isme so 😅",
    description: "Facepack abhitk nahi lagaya mene 😭",
  },
  {
    image: "img/photo5.jpeg",
    tag: "Always There",
    title: "Late nigh talks that made me tell you every single gossip",
    description: "In your friendship I found a safe place the world could never take from me."
  }
];

/* ── 3. FRIENDSHIP STATS ──────────────────────────── */
const STATS = [
  { value: 6,   suffix: "+", label: "Years of Friendship" },
  { value: 8,   suffix: "",  label: "Shared Memories" },
  { value: 12,  suffix: "+", label: "Adventures Together" },
  { value: 999, suffix: "+", label: "Inside Jokes" }
];

/* ── 4. QUOTES ────────────────────────────────────── */
const QUOTES = [
  { text: "A best friend is a story you'll never stop telling.", author: "— Unknown" },
  { text: "Friends are the family we choose for ourselves.", author: "— Edna Buchanan" },
  { text: "True friendship is not about being inseparable — it's being separated and nothing changes.", author: "— Unknown" },
  { text: "A friend is someone who knows all about you and still loves you.", author: "— Elbert Hubbard" },
  { text: "In the cookie of life, friends are the chocolate chips.", author: "— Salman Rushdie" },
  { text: "Good friends are like stars. You don't always see them, but you know they're always there.", author: "— Unknown" },
  { text: "Side by side or miles apart, real friends are always close to the heart.", author: "— Unknown" }
];

/* ── 5. MEMORY VIDEOS CONFIGURATION ──────────────────
   Point 'src' to your video files inside the 'videos/'
   folder. title and description are displayed on the card.
   ───────────────────────────────────────────────────── */
const MEMORY_VIDEOS = [
  {
    src: "videos/memory1.mp4",
    title: "The Beginning",
    description: "The very first video we ever took together. Looking back at this now is pure magic."
  },
  {
    src: "videos/memory2.mp4",
    title: "The Office back fixed destination where we exchange laptop,assignments and all 😅",
    description: "Somewhere between the laughter and the chaos, we made the best memories of our lives."
  },
  {
    src: "videos/memory3.mp4",
    title: "you gave Laptop when There were many people",
    description: "No filter, no plan, no script. Just two friends and a camera. Exactly as it should be."
  }
];

/* ═══════════════════════════════════════════════════
   BELOW: ENGINE CODE — you don't need to modify this
   ═══════════════════════════════════════════════════ */

/* ── 6. LOADER ────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  function hideLoader() {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // If page already loaded (common on Vercel/fast CDN), hide immediately after short delay
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 1500);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 1500));
    // Absolute failsafe
    setTimeout(hideLoader, 4000);
  }
}

/* ── 7. CUSTOM CURSOR ─────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Ring follows with slight lag
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand on interactive elements
  document.querySelectorAll('a, button, .gallery-item, .moment-card, .tl-card, .video-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--gold)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(245,200,66,0.5)';
    });
  });

  // Hide on mobile
  if ('ontouchstart' in window) {
    dot.style.display  = 'none';
    ring.style.display = 'none';
    document.body.style.cursor = 'auto';
  }
}

/* ── 8. SCROLL PROGRESS ───────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';

    nav.classList.toggle('scrolled', scrolled > 60);
  }, { passive: true });
}

/* ── 9. PARTICLE CANVAS ───────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['rgba(79,70,229,', 'rgba(167,139,250,', 'rgba(245,200,66,', 'rgba(255,255,255,'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35 - 0.1,
      c:  COLORS[Math.floor(Math.random() * COLORS.length)],
      o:  Math.random() * 0.5 + 0.1
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + p.o + ')';
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(draw);
  };
  draw();
}

/* ── 10. SCROLL REVEAL ────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const io  = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('visible'), delay);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

/* ── 11. BUILD TIMELINE ───────────────────────────── */
function buildTimeline() {
  const container = document.getElementById('timeline-entries');
  if (!container) return;

  MEMORIES.forEach((m, i) => {
    const entry = document.createElement('div');
    const side  = i % 2 === 0 ? 'left' : 'right';
    entry.className = `timeline-entry ${side} reveal`;
    entry.dataset.delay = i * 100;

    const imgHTML = m.image
      ? `<img class="tl-card-img" src="${m.image}" alt="${m.title}" loading="lazy" onerror="this.outerHTML='<div class=\\'tl-card-img-placeholder\\'>📸</div>'">`
      : `<div class="tl-card-img-placeholder">📸</div>`;

    const dateDisplay = m.date
      ? new Date(m.date + 'T00:00:00').toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
      : '';

    const cardHTML = `
      <div class="tl-card">
        ${imgHTML}
        <div class="tl-card-body">
          <div class="tl-date">${dateDisplay}</div>
          <div class="tl-title">${m.title}</div>
          <div class="tl-desc">${m.description}</div>
        </div>
      </div>
    `;

    const dotHTML  = `<div class="tl-dot-col"><div class="tl-dot"></div></div>`;
    const emptyHTML = `<div class="tl-empty"></div>`;

    entry.innerHTML = side === 'left'
      ? cardHTML + dotHTML + emptyHTML
      : emptyHTML + dotHTML + cardHTML;

    container.appendChild(entry);
  });

  initReveal();
}

/* ── 12. BUILD GALLERY ────────────────────────────── */
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  MEMORIES.forEach((m, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.dataset.delay = (i % 4) * 80;

    if (m.image) {
      item.innerHTML = `
        <img src="${m.image}" alt="${m.title}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'>📸</div>'">
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">${m.title}</span>
        </div>
      `;
      item.addEventListener('click', () => openLightbox(m.image, m.title));
    } else {
      item.innerHTML = `<div class="gallery-placeholder">📸</div>`;
    }

    grid.appendChild(item);
  });

  initReveal();
}

/* ── 13. PHOTO LIGHTBOX ───────────────────────────── */
function openLightbox(src, title) {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = src;
  cap.textContent = title || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function initLightbox() {
  const lb  = document.getElementById('lightbox');
  const btn = document.getElementById('lightbox-close');
  if (!lb) return;
  btn.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeLightbox(); closeVideoLightbox(); } });
}

/* ── 14. BUILD MEMORY VIDEOS ──────────────────────── */
function buildVideos() {
  const grid = document.getElementById('videos-grid');
  if (!grid) return;

  MEMORY_VIDEOS.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'video-card reveal';
    card.dataset.delay = i * 120;
    card.setAttribute('role', 'listitem');

    card.innerHTML = `
      <div class="video-card-thumb">
        <video src="${v.src}" muted playsinline preload="metadata"
               aria-hidden="true" tabindex="-1"
               onerror="this.parentElement.style.background='var(--void)'">
        </video>
        <div class="video-play-overlay">
          <div class="video-play-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="video-card-body">
        <div class="video-card-number">Memory · ${String(i + 1).padStart(2, '0')}</div>
        <div class="video-card-title">${v.title}</div>
        <div class="video-card-desc">${v.description}</div>
      </div>
    `;

    // Seek the hidden thumbnail video to 1s for a preview frame
    const thumbVid = card.querySelector('video');
    thumbVid.addEventListener('loadedmetadata', () => {
      thumbVid.currentTime = Math.min(1, thumbVid.duration * 0.1);
    });

    // Open video lightbox on click
    card.addEventListener('click', () => openVideoLightbox(v.src, v.title));

    grid.appendChild(card);
  });

  initReveal();
}

/* ── 15. VIDEO LIGHTBOX ───────────────────────────── */
function openVideoLightbox(src, title) {
  const lb     = document.getElementById('video-lightbox');
  const player = document.getElementById('video-lightbox-player');
  const cap    = document.getElementById('video-lightbox-caption');

  player.src = src;
  cap.textContent = title || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Autoplay after transition settles
  setTimeout(() => player.play().catch(() => {}), 380);
}

function closeVideoLightbox() {
  const lb     = document.getElementById('video-lightbox');
  const player = document.getElementById('video-lightbox-player');
  if (!lb) return;
  lb.classList.remove('open');
  player.pause();
  player.src = '';
  document.body.style.overflow = '';
}

function initVideoLightbox() {
  const lb  = document.getElementById('video-lightbox');
  const btn = document.getElementById('video-lightbox-close');
  if (!lb) return;
  btn.addEventListener('click', closeVideoLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeVideoLightbox(); });
}

/* ── 16. BUILD BEST MOMENTS ───────────────────────── */
function buildMoments() {
  const grid = document.getElementById('moments-grid');
  if (!grid) return;

  BEST_MOMENTS.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'moment-card reveal';
    card.dataset.delay = i * 120;

    const imgPart = m.image
      ? `<img class="moment-card-img" src="${m.image}" alt="${m.title}" loading="lazy"
              onerror="this.style.display='none'">`
      : '';

    card.innerHTML = `
      ${imgPart}
      <div class="moment-card-overlay">
        <span class="moment-tag">${m.tag}</span>
        <div class="moment-title">${m.title}</div>
        <div class="moment-desc">${m.description}</div>
      </div>
    `;

    grid.appendChild(card);
  });

  initReveal();
}

/* ── 17. BUILD STATS ──────────────────────────────── */
function buildStats() {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;

  STATS.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'stat-card reveal';
    card.dataset.delay = i * 80;
    card.innerHTML = `
      <span class="stat-number" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span>
      <div class="stat-label">${s.label}</div>
    `;
    grid.appendChild(card);
  });

  initReveal();
  initCounters();
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el      = e.target;
      const target  = +el.dataset.target;
      const suffix  = el.dataset.suffix || '';
      const dur     = 1800;
      const step    = 16;
      const steps   = dur / step;
      let current   = 0;
      const inc     = target / steps;

      const tick = setInterval(() => {
        current = Math.min(current + inc, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(tick);
      }, step);

      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
}

/* ── 18. QUOTE CAROUSEL ───────────────────────────── */
function initQuotes() {
  const textEl  = document.getElementById('quote-text');
  const authorEl= document.getElementById('quote-author');
  const dotsEl  = document.getElementById('quote-dots');
  if (!textEl) return;

  let current = 0;
  let timer;

  // Build dots
  QUOTES.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'q-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => { goTo(i); resetTimer(); });
    dotsEl.appendChild(d);
  });

  const dots = dotsEl.querySelectorAll('.q-dot');

  function setQuote(i) {
    textEl.classList.add('exiting');
    setTimeout(() => {
      current = (i + QUOTES.length) % QUOTES.length;
      textEl.textContent = QUOTES[current].text;
      authorEl.textContent = QUOTES[current].author;
      textEl.classList.remove('exiting');
      textEl.classList.add('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => textEl.classList.remove('entering'));
      });
      dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
    }, 420);
  }

  function goTo(i) { setQuote(i); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => setQuote(current + 1), 5500);
  }

  // Init
  textEl.textContent    = QUOTES[0].text;
  authorEl.textContent  = QUOTES[0].author;
  resetTimer();
}

/* ── 19. MEMORY WALL ──────────────────────────────── */
function initMemoryWall() {
  const notesEl  = document.getElementById('memwall-notes');
  const inputEl  = document.getElementById('note-input');
  const addBtn   = document.getElementById('note-add-btn');
  if (!notesEl) return;

  const COLORS = [
    'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(167,139,250,0.06))',
    'linear-gradient(135deg, rgba(245,200,66,0.1), rgba(251,146,60,0.06))',
    'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(16,185,129,0.04))',
    'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(167,139,250,0.06))',
    'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(79,70,229,0.06))'
  ];

  const ROTATIONS = [-1.5, 1, -0.8, 1.5, -1, 0.5, -1.2, 1.8];

  // Seed with a few default notes
  const defaultNotes = [
    "The time we stayed up till 4 AM just talking about everything and nothing. 🌙",
    "Remember when we got completely lost and it became our best adventure? 🗺️",
    "That one day we cried laughing so hard we couldn't breathe. 😂",
    "You were the first person I called with the big news. Always. 📞"
  ];

  // Load from localStorage or use defaults
  let notes = JSON.parse(localStorage.getItem('ff_notes') || 'null') || defaultNotes;

  function saveNotes() {
    localStorage.setItem('ff_notes', JSON.stringify(notes));
  }

  function renderNotes() {
    notesEl.innerHTML = '';
    notes.forEach((text, i) => {
      const card = document.createElement('div');
      card.className = 'note-card reveal visible';
      const color = COLORS[i % COLORS.length];
      const rot   = ROTATIONS[i % ROTATIONS.length];
      card.style.background = color;
      card.style.transform  = `rotate(${rot}deg)`;

      card.innerHTML = `
        <button class="note-delete" aria-label="Delete note" title="Remove">✕</button>
        <div class="note-text">${escapeHTML(text)}</div>
        <div class="note-date">Memory #${i + 1}</div>
      `;

      card.querySelector('.note-delete').addEventListener('click', () => {
        notes.splice(i, 1);
        saveNotes();
        renderNotes();
      });

      notesEl.appendChild(card);
    });
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  addBtn.addEventListener('click', () => {
    const val = inputEl.value.trim();
    if (!val) return;
    notes.push(val);
    saveNotes();
    renderNotes();
    inputEl.value = '';
    inputEl.focus();
  });

  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') addBtn.click();
  });

  renderNotes();
}

/* ── 20. SMOOTH NAV SCROLL ────────────────────────── */
function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── 21. INIT ALL ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initScrollProgress();
  initParticles();
  initReveal();
  buildTimeline();
  buildGallery();
  buildVideos();
  buildMoments();
  buildStats();
  initQuotes();
  initMemoryWall();
  initLightbox();
  initVideoLightbox();
  initNavScroll();
});

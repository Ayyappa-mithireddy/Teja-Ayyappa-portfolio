/* ==========================================================================
   INTERACTIVE LOGIC: VIBRANT FROSTED-GLASS APPLE DOCK PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollSpy();
  initProjectsCarousel();
  initThemeToggle();
  initScrollTopBtn();
  initScrollReveal();
  initHeroLetterGlow();
});

/* ==========================================================================
   1. NAVBAR ACTIVE TAB CAPSULE & SCROLL SPY
   ========================================================================== */
function initNavbarScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-item-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    let currentId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (!currentId && window.scrollY < 300) {
      currentId = 'home';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // Smooth scroll click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ==========================================================================
   2. HORIZONTAL SCROLL / CAROUSEL SLIDER CONTROLS
   ========================================================================== */
function initProjectsCarousel() {
  const slider = document.getElementById('projects-slider');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!slider || !prevBtn || !nextBtn) return;

  const scrollStep = 388; // Card width (360px) + gap (28px)

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });

  // Enable mouse horizontal scroll with wheel when cursor is over slider
  slider.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      // Allow user to scroll track naturally
      if (slider.scrollWidth > slider.clientWidth) {
        slider.scrollBy({ left: e.deltaY * 0.8, behavior: 'smooth' });
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   3. THEME TOGGLE (FROSTED GLASS LIGHT / DARK)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.add('light-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
    updateThemeIcon(true);
  }

  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    document.body.classList.toggle('light', isLight);
    document.documentElement.classList.toggle('light', isLight);
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.body.removeAttribute('data-theme');
    }
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
    showToast(isLight ? 'Switched to Sunset Dawn Iridescent mode' : 'Switched to Deep Violet mode');
  });

  function updateThemeIcon(isLight) {
    themeBtn.innerHTML = isLight
      ? `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
      : `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
  }
}

/* ==========================================================================
   4. FIXED FLOATING SCROLL-TO-TOP BUTTON
   ========================================================================== */
function initScrollTopBtn() {
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   5. SCROLL REVEAL TRIGGER
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. SIMPLE GLASS TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.glass-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'glass-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

/* ==========================================================================
   7. INTERACTIVE HERO LETTER GLOW
   ========================================================================== */
function initHeroLetterGlow() {
  const letters = document.querySelectorAll('.glow-letter, .glow-char');
  if (!letters.length) return;

  letters.forEach(letter => {
    let resetTimer = null;

    letter.addEventListener('mouseenter', () => {
      clearTimeout(resetTimer);
      letter.classList.add('active-glow');
    });

    letter.addEventListener('mouseleave', () => {
      resetTimer = setTimeout(() => {
        letter.classList.remove('active-glow');
      }, 180);
    });

    // Touch support for mobile tap
    letter.addEventListener('touchstart', () => {
      letter.classList.add('active-glow');
      setTimeout(() => {
        letter.classList.remove('active-glow');
      }, 600);
    }, { passive: true });
  });
}


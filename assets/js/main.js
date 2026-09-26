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
  initMagneticCanvas();
  initCardTiltInteractivity();
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
    showToast(isLight ? 'Switched to Ultra-Clean Titanium Light mode' : 'Switched to Deep Obsidian Dark mode');
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

/* ==========================================================================
   8. ELECTROMAGNETIC FLUX & FERROMAGNETIC DUST CANVAS ENGINE
   ========================================================================== */
function initMagneticCanvas() {
  const canvas = document.getElementById('magnetic-canvas') || document.getElementById('antigravity-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const fpsElem = document.getElementById('fps-counter');
  const statusElem = document.getElementById('flux-status');

  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);
    initGrains();
  }

  let mouse = {
    x: -2000,
    y: -2000,
    prevX: -2000,
    prevY: -2000,
    vx: 0,
    vy: 0,
    speed: 0,
    active: false
  };

  window.addEventListener('mousemove', (e) => {
    if (mouse.prevX === -2000) {
      mouse.prevX = e.clientX;
      mouse.prevY = e.clientY;
    }

    mouse.vx = (e.clientX - mouse.prevX) * 0.45;
    mouse.vy = (e.clientY - mouse.prevY) * 0.45;
    mouse.speed = Math.hypot(mouse.vx, mouse.vy);

    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;

    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.vx = 0;
    mouse.vy = 0;
    mouse.speed = 0;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      if (mouse.prevX === -2000) {
        mouse.prevX = touch.clientX;
        mouse.prevY = touch.clientY;
      }
      mouse.vx = (touch.clientX - mouse.prevX) * 0.45;
      mouse.vy = (touch.clientY - mouse.prevY) * 0.45;
      mouse.speed = Math.hypot(mouse.vx, mouse.vy);
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      mouse.active = true;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.active = false;
    mouse.vx = 0;
    mouse.vy = 0;
    mouse.speed = 0;
  }, { passive: true });

  let shockwaves = [];
  window.addEventListener('click', (e) => {
    triggerPulse(e.clientX, e.clientY);
  }, { passive: true });

  function triggerPulse(x, y) {
    shockwaves.push({
      x: x,
      y: y,
      radius: 12,
      maxRadius: Math.max(width, height) * 0.85,
      speed: 18,
      strength: 1.0
    });
    if (statusElem) {
      statusElem.textContent = "EMP BURST DETECTED // FLUX SCRAMBLED";
      statusElem.style.color = "#f43f5e";
      setTimeout(() => {
        if (statusElem) {
          statusElem.textContent = "GRAIN ALIGNMENT: LAMINAR // PULSE READY";
          statusElem.style.color = "rgba(148, 163, 184, 0.45)";
        }
      }, 1600);
    }
  }

  window.triggerGlobalCanvasPulse = triggerPulse;

  const METAL_PALETTE = [
    { r: 6,   g: 182, b: 212 },  // Electric Cyan
    { r: 20,  g: 184, b: 166 },  // Luminescent Teal
    { r: 59,  g: 130, b: 246 },  // Cobalt Blue
    { r: 168, g: 85,  b: 247 },  // Amethyst Violet
    { r: 241, g: 245, b: 249 }   // Platinum White
  ];

  const LIGHT_METAL_PALETTE = [
    { r: 15,  g: 23,  b: 42  },  // Graphite Black
    { r: 29,  g: 78,  b: 216 },  // Deep Cobalt / Royal Sapphire
    { r: 100, g: 116, b: 139 }   // Slate Titanium
  ];

  function pickColor() {
    let isLight = document.body.classList.contains('light-theme') || document.body.classList.contains('light');
    let r = Math.random();
    if (isLight) {
      if (r < 0.40) return LIGHT_METAL_PALETTE[0];
      if (r < 0.75) return LIGHT_METAL_PALETTE[1];
      return LIGHT_METAL_PALETTE[2];
    } else {
      if (r < 0.40) return METAL_PALETTE[0];
      if (r < 0.65) return METAL_PALETTE[1];
      if (r < 0.80) return METAL_PALETTE[2];
      if (r < 0.92) return METAL_PALETTE[3];
      return METAL_PALETTE[4];
    }
  }

  const DUST_COUNT = 1400;
  let grains = [];

  class MagneticGrain {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = 0;
      this.vy = 0;

      this.length = Math.random() * 8.5 + 4.5;
      this.width = Math.random() * 0.75 + 0.85;

      this.baseAngle = (Math.random() - 0.5) * Math.PI * 2;
      this.angle = this.baseAngle;
      this.angularVelocity = 0;

      this.driftPhase = Math.random() * Math.PI * 2;
      this.driftSpeed = Math.random() * 0.008 + 0.004;

      this.color = pickColor();
      this.baseAlpha = Math.random() * 0.16 + 0.08;
      this.currentAlpha = this.baseAlpha;
    }

    update() {
      this.driftPhase += this.driftSpeed;

      let brownianAngle = this.baseAngle + Math.sin(this.driftPhase) * 0.18;
      let targetAngle = brownianAngle;
      let targetAlpha = this.baseAlpha;

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let dist = Math.hypot(dx, dy);

      const FIELD_RADIUS = 340;

      if (mouse.active && dist < FIELD_RADIUS && dist > 1) {
        let factor = (1 - dist / FIELD_RADIUS);
        let radialAngle = Math.atan2(dy, dx);
        let dipoleAngle = radialAngle + (Math.PI / 2) + Math.sin(dist * 0.035) * 0.42;

        targetAngle = dipoleAngle;
        targetAlpha = Math.min(1.0, this.baseAlpha + Math.pow(factor, 1.3) * 0.88);

        let pullForce = Math.pow(factor, 1.8) * 1.6;
        this.vx += Math.cos(dipoleAngle) * pullForce * 0.15;
        this.vy += Math.sin(dipoleAngle) * pullForce * 0.15;

        if (mouse.speed > 5) {
          let wakeFactor = factor * (mouse.speed * 0.08);
          this.vx += mouse.vx * wakeFactor * 0.12;
          this.vy += mouse.vy * wakeFactor * 0.12;
          this.angularVelocity += (Math.random() - 0.5) * wakeFactor * 0.25;
        }
      }

      for (let sw of shockwaves) {
        let sDist = Math.hypot(this.x - sw.x, this.y - sw.y);
        let diff = Math.abs(sDist - sw.radius);

        if (diff < 65) {
          let sFactor = (1 - diff / 65) * sw.strength;
          let pulseAng = Math.atan2(this.y - sw.y, this.x - sw.x);

          let kick = sFactor * 9.5;
          this.vx += Math.cos(pulseAng) * kick;
          this.vy += Math.sin(pulseAng) * kick;

          this.angularVelocity += (Math.random() - 0.5) * sFactor * 1.4;
          this.baseAngle = this.angle + (Math.random() - 0.5) * Math.PI;
          targetAlpha = 1.0;
        }
      }

      let angleDelta = targetAngle - this.angle;
      angleDelta = Math.atan2(Math.sin(angleDelta), Math.cos(angleDelta));
      this.angularVelocity += angleDelta * 0.065;
      this.angularVelocity *= 0.84;
      this.angle += this.angularVelocity;

      this.vx *= 0.90;
      this.vy *= 0.90;
      this.x += this.vx;
      this.y += this.vy;

      this.currentAlpha += (targetAlpha - this.currentAlpha) * 0.085;

      if (this.x < -30) this.x = width + 20;
      if (this.x > width + 30) this.x = -20;
      if (this.y < -30) this.y = height + 20;
      if (this.y > height + 30) this.y = -20;
    }

    draw(scrollFactor = 1) {
      let isLight = document.body.classList.contains('light-theme') || document.body.classList.contains('light');
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);

      let halfL = this.length / 2;
      let alpha = this.currentAlpha * scrollFactor;

      if (isLight) {
        let drawColor = (this.color.r === 6 || this.color.r === 241) ? LIGHT_METAL_PALETTE[0] : this.color;
        ctx.beginPath();
        ctx.moveTo(-halfL, 0);
        ctx.lineTo(halfL, 0);
        ctx.strokeStyle = `rgba(${drawColor.r}, ${drawColor.g}, ${drawColor.b}, ${Math.min(0.92, alpha * 1.25)})`;
        ctx.lineWidth = this.width * 1.05;
        ctx.lineCap = "round";

        if (alpha > 0.35) {
          ctx.shadowColor = `rgba(${drawColor.r}, ${drawColor.g}, ${drawColor.b}, 0.25)`;
          ctx.shadowBlur = 3;
        }

        ctx.stroke();

        if (alpha > 0.48) {
          ctx.beginPath();
          ctx.moveTo(-halfL * 0.35, 0);
          ctx.lineTo(halfL * 0.35, 0);
          ctx.strokeStyle = `rgba(29, 78, 216, ${(alpha - 0.48) * 0.9})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      } else {
        ctx.beginPath();
        ctx.moveTo(-halfL, 0);
        ctx.lineTo(halfL, 0);
        ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.lineWidth = this.width;
        ctx.lineCap = "round";

        if (alpha > 0.35) {
          ctx.shadowColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
          ctx.shadowBlur = alpha * 10;
        }

        ctx.stroke();

        if (alpha > 0.50) {
          ctx.beginPath();
          ctx.moveTo(-halfL * 0.4, 0);
          ctx.lineTo(halfL * 0.4, 0);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(alpha - 0.50) * 1.6})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      ctx.restore();
    }
  }

  function initGrains() {
    grains = [];
    for (let i = 0; i < DUST_COUNT; i++) {
      grains.push(new MagneticGrain());
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  let lastFrame = performance.now();
  let frameCount = 0;
  let fpsTimer = performance.now();

  function animate(now) {
    requestAnimationFrame(animate);

    frameCount++;
    if (now - fpsTimer >= 1000) {
      if (fpsElem) fpsElem.textContent = `FRAME CADENCE: ${frameCount} FPS // RETINA: ${dpr.toFixed(1)}X`;
      frameCount = 0;
      fpsTimer = now;
    }

    mouse.vx *= 0.88;
    mouse.vy *= 0.88;
    mouse.speed *= 0.88;

    // Scroll-aware particle alpha adaptation (50-60% alpha reduction downstream)
    let scrollY = window.scrollY || window.pageYOffset || 0;
    let heroHeight = Math.max(window.innerHeight * 0.85, 450);
    let scrollProgress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
    let scrollFactor = 1 - (scrollProgress * 0.55); // Scales smoothly from 1.0 (Hero) to ~0.45 (Downstream)

    ctx.clearRect(0, 0, width, height);

    for (let i = shockwaves.length - 1; i >= 0; i--) {
      let sw = shockwaves[i];
      sw.radius += sw.speed;
      sw.strength *= 0.965;

      ctx.save();
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(6, 182, 212, ${sw.strength * 0.35 * scrollFactor})`;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#06b6d4";
      ctx.shadowBlur = 22 * scrollFactor;
      ctx.stroke();

      if (sw.radius > 40) {
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius - 24, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${sw.strength * 0.2 * scrollFactor})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      ctx.restore();

      if (sw.radius > sw.maxRadius || sw.strength < 0.02) {
        shockwaves.splice(i, 1);
      }
    }

    if (mouse.active) {
      ctx.save();
      let isLight = document.body.classList.contains('light-theme') || document.body.classList.contains('light');
      let poleGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);

      if (isLight) {
        poleGrad.addColorStop(0, `rgba(29, 78, 216, ${0.08 * scrollFactor})`);
        poleGrad.addColorStop(0.35, `rgba(100, 116, 139, ${0.03 * scrollFactor})`);
        poleGrad.addColorStop(1, "rgba(248, 250, 252, 0)");

        ctx.fillStyle = poleGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(29, 78, 216, ${0.65 * scrollFactor})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "rgba(29, 78, 216, 0.3)";
        ctx.shadowBlur = 8 * scrollFactor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, ${scrollFactor})`;
        ctx.fill();
      } else {
        poleGrad.addColorStop(0, `rgba(6, 182, 212, ${0.16 * scrollFactor})`);
        poleGrad.addColorStop(0.35, `rgba(147, 51, 234, ${0.06 * scrollFactor})`);
        poleGrad.addColorStop(1, "rgba(2, 4, 9, 0)");

        ctx.fillStyle = poleGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(103, 232, 249, ${0.75 * scrollFactor})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#22d3ee";
        ctx.shadowBlur = 14 * scrollFactor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${scrollFactor})`;
        ctx.fill();
      }
      ctx.restore();
    }

    for (let g of grains) {
      g.update();
      g.draw(scrollFactor);
    }
  }

  animate(performance.now());
}

/* ==========================================================================
   9. INTERACTIVE 3D CARD TILT & MONOGRAM GYRO MEDALLION PHYSICS
   ========================================================================== */
function initCardTiltInteractivity() {
  const badgeCards = document.querySelectorAll('.about-badge-card, .about-logo-card');
  badgeCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0deg) scale(1)';
    });

    card.addEventListener('click', (e) => {
      if (typeof window.triggerGlobalCanvasPulse === 'function') {
        window.triggerGlobalCanvasPulse(e.clientX, e.clientY);
      }
    });
  });
}




// ============================================
// HOME GREEN PEST CONTROL — shared.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Hamburger / Mobile Nav ----
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ---- Hero Slideshow ----
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dots span');
  if (slides.length) {
    let current = 0;
    const show = (n) => {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
    };
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
    setInterval(() => show(current + 1),3000);
  }

  // ---- Scroll-reveal ----
  const revealEls = document.querySelectorAll('.service-card, .why-item, .step, .testimonial-card, .service-full-card, .contact-card, .area-chip');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      obs.observe(el);
    });
  }

  // ---- Navbar shadow on scroll ----
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 2px 20px rgba(0,0,0,0.12)'
        : '0 2px 12px rgba(0,0,0,0.08)';
    }
  });

  // ---- Counter animation (stats bar) ----
  const counters = document.querySelectorAll('.num[data-target]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString() + suffix;
        if (current >= target) clearInterval(timer);
      }, 25);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObs.observe(c));

  // ---- Contact form WhatsApp send ----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = form.querySelector('#name')?.value || '';
      const phone   = form.querySelector('#phone')?.value || '';
      const service = form.querySelector('#service')?.value || '';
      const msg     = form.querySelector('#message')?.value || '';
      const text = `Hello Home Green Pest Control! 🌿\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${msg}`;
      const waUrl = `https://wa.me/918143208911?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }

  // ---- Gallery scroll reveal ----
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length && 'IntersectionObserver' in window) {
    const galleryObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          galleryObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    galleryItems.forEach(el => galleryObs.observe(el));
  }
  // ---- Timeline scroll reveal ----
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length && 'IntersectionObserver' in window) {
    const tlObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          tlObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    timelineItems.forEach(el => tlObs.observe(el));
  }

});
  // ---- Service page card reveal ----
  const svcCards = document.querySelectorAll('.svc-card');
  if (svcCards.length && 'IntersectionObserver' in window) {
    const svcObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          svcObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    svcCards.forEach(el => svcObs.observe(el));
  }
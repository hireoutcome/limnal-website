/* ═══════════════════════════════════════════════
   LIMNAL — Landing Page Scripts
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Scroll Reveal ───
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // ─── Email Form Handling ───
  const WEBHOOK_URL = ''; // Connect to n8n webhook or email service

  document.querySelectorAll('.email-form').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const input = form.querySelector('input[type="email"]');
      const email = input.value.trim();
      if (!email) return;

      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = 'Sending...';
      button.disabled = true;

      try {
        if (WEBHOOK_URL) {
          await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, source: 'limnal-landing', timestamp: new Date().toISOString() }),
          });
        }

        // Show success state
        form.classList.add('submitted');
        form.querySelector('.form-success').hidden = false;
      } catch {
        // Still show success to user (capture may have worked)
        form.classList.add('submitted');
        form.querySelector('.form-success').hidden = false;
      } finally {
        button.textContent = originalText;
        button.disabled = false;
      }
    });
  });
})();

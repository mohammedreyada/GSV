// =======================
// Navbar background on scroll
// =======================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// =======================
// Hero text animation control
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("heroCarousel");
  if (!carousel) return;

  // Run animation on first load
  const firstContent = carousel.querySelector(
    ".carousel-item.active .hero-content"
  );
  if (firstContent) {
    firstContent.classList.add("animate");
  }

  // Re-run animation on every slide change
  carousel.addEventListener("slid.bs.carousel", () => {
    document.querySelectorAll(".hero-content").forEach((el) => {
      el.classList.remove("animate");
    });

    const activeContent = carousel.querySelector(
      ".carousel-item.active .hero-content"
    );

    if (activeContent) {
      // Force reflow to restart animation
      void activeContent.offsetWidth;
      activeContent.classList.add("animate");
    }
  });
});


  const counters = document.querySelectorAll(".number");

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 80;

      const update = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  };

  let started = false;
  window.addEventListener("scroll", () => {
    const section = document.querySelector("#who");
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 200 && !started) {
      runCounters();
      started = true;
    }
  });


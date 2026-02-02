
(function () {
  "use strict";

  /* ===============================
     Loader (Pure JS – once only)
  =============================== */
  let didHideLoader = false;

  function hideLoaderOnce() {
    if (didHideLoader) return;
    didHideLoader = true;

    const loader = document.querySelector(".site-loader");
    if (!loader) return;

    loader.classList.add("is-hidden");

    setTimeout(() => {
      loader.classList.add("is-gone");
    }, 320);
  }

  window.addEventListener("load", hideLoaderOnce, { once: true });
  setTimeout(hideLoaderOnce, 3000);

  /* ===============================
     DOM Ready
  =============================== */
  document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
       WOW.js (Safe Init)
    =============================== */
    if (typeof WOW !== "undefined") {
      try {
        new WOW({
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 120,
          mobile: true,
          live: false,
        }).init();
      } catch (err) {
        console.warn("WOW.js failed:", err);
      }
    }

    const navbar = document.querySelector(".navbar");
    const scrollUpBtn = document.querySelector(".scrollUp");

    /* ===============================
       Navbar + ScrollUp
    =============================== */
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY >= 100;

      if (navbar) {
        navbar.classList.toggle("fixed-top", scrolled);
        navbar.classList.toggle("shadow", scrolled);
        navbar.style.padding = scrolled ? "10px 0" : "15px 0";
      }

      if (scrollUpBtn) {
        scrollUpBtn.style.opacity = scrolled ? "1" : "0";
        scrollUpBtn.style.pointerEvents = scrolled ? "auto" : "none";
      }
    });

    if (scrollUpBtn) {
      scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ===============================
       ScrollSpy (Privacy TOC)
    =============================== */
    const sections = document.querySelectorAll(".privacy-section[id]");
    const tocLinks = document.querySelectorAll(".privacy-toc a");

    if (sections.length && tocLinks.length) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            tocLinks.forEach(link => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`,
              );
            });
          });
        },
        {
          rootMargin: "-120px 0px -60% 0px",
          threshold: 0.1,
        },
      );

      sections.forEach(section => observer.observe(section));
    }
  });
})();

/* ===============================
   Mobile Navbar Handling
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("navbarSupportedContent");
  const toggler = document.querySelector(".navbar-toggler");

  if (!menu || !toggler) return;

  /* Close menu when clicking a nav link */
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
    });
  });

  /* Close menu when clicking outside */
  document.addEventListener("click", e => {
    if (
      menu.classList.contains("show") &&
      !menu.contains(e.target) &&
      !toggler.contains(e.target)
    ) {
      menu.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
    }
  });
});

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    /* Reveal animation */
    const features = document.querySelectorAll(".app-feature");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    features.forEach(f => observer.observe(f));

    /* Lightbox */
    const lightbox = document.getElementById("imgLightbox");
    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const closeBtn = lightbox.querySelector(".close");

    document.querySelectorAll(".img-frame img").forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeLightbox();
    });
  });
})();

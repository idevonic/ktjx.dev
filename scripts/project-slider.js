document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".projects-track");
  const slides = document.querySelectorAll(".project-card");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  if (!track || slides.length === 0) return;

  let index = 0;
  const intervalTime = 4000; // 4 seconds per slide
  let autoPlay;

  /** 🧮 Determine how many cards should be visible based on screen size */
  const visibleCount = () => {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  };

  /** 📦 Move to specific slide index */
  const showSlide = (i) => {
    const cardWidth = slides[0].offsetWidth + 24; // card width + gap
    track.scrollTo({
      left: i * cardWidth,
      behavior: "smooth",
    });
  };

  /** ▶️ Move forward */
  const nextSlide = () => {
    const visible = visibleCount();
    index = (index + visible) % slides.length;
    showSlide(index);
  };

  /** ◀️ Move backward */
  const prevSlide = () => {
    const visible = visibleCount();
    index = (index - visible + slides.length) % slides.length;
    showSlide(index);
  };

  /** ♻️ Auto-play logic */
  const startAutoPlay = () => {
    stopAutoPlay(); // prevent double intervals
    autoPlay = setInterval(nextSlide, intervalTime);
  };

  const stopAutoPlay = () => {
    if (autoPlay) clearInterval(autoPlay);
  };

  /** 🧭 Button event handlers */
  rightBtn?.addEventListener("click", () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  leftBtn?.addEventListener("click", () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
  });

  /** 🖱️ Pause on hover */
  track.addEventListener("mouseenter", stopAutoPlay);
  track.addEventListener("mouseleave", startAutoPlay);

  /** 🪟 Adjust when resized */
  window.addEventListener("resize", () => {
    showSlide(index);
  });

  /** 🚀 Start autoplay on load */
  startAutoPlay();
});

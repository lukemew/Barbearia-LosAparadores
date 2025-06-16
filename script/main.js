function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".scroll-fade");

  function checkFadeIn() {
    const triggerBottom = window.innerHeight * 0.9;

    fadeElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn();
});

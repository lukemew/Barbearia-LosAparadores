document.documentElement.classList.remove("no-js");

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

const verMaisBtn = document.getElementById("verMaisBtn");
  const galleryContainer = document.querySelector(".gallery-images");

  verMaisBtn.addEventListener("click", function (e) {
    e.preventDefault(); 
   
    const novasFotos = [
      "./assets/ambiente/barbearia-02.jpg",
      "./assets/ambiente/barbearia-01.jpg",
      "./assets/ambiente/barbearia-04.png",
      "./assets/ambiente/barbearia-03.jpeg"
    ];

    novasFotos.forEach((foto, index) => {
  const novaImg = document.createElement("img");
  novaImg.src = foto;
  novaImg.alt = "Foto Extra " + (index + 1);
  novaImg.classList.add("scroll-fade", "show"); 

  galleryContainer.appendChild(novaImg);
});

    checkFadeIn();
    verMaisBtn.style.display = "none";
  });
});

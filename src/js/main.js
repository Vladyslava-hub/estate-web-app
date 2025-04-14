document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".nav-icon-btn");
  const navIcon = document.querySelector(".nav-icon");
  const navTopRow = document.querySelector(".header__top-row");
  const body = document.body;

  // Відкриття/закриття меню по кліку на бургер
  navBtn.addEventListener("click", () => {
    navIcon.classList.toggle("nav-icon--active");
    navTopRow.classList.toggle("header__top-row--mobile");
    body.classList.toggle("no-scroll");
  });

  // Закриваємо меню при кліку на будь-яке посилання
  document.querySelectorAll(".nav__list a").forEach(link => {
    link.addEventListener("click", () => {
      navIcon.classList.remove("nav-icon--active");
      navTopRow.classList.remove("header__top-row--mobile");
      body.classList.remove("no-scroll");
    });
  });
});

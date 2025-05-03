document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerIcon = document.querySelector(".burger-icon");

  burgerIcon.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");

    // Блокировка прокрутки страницы при открытом меню
    if (burgerMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Закрытие меню при клике на ссылку
  const menuLinks = document.querySelectorAll(".mobile-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});

function BurgerMenu() {
  const BurgerBtn = document.querySelector(".hamburger__menu");
  const menu = document.querySelector(".header__navegacion");
  const links = menu.querySelectorAll("a, .header__BtnLenguague");

  BurgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");

    // Animación en cascada
    links.forEach((link, i) => {
      if (menu.classList.contains("open")) {
        link.style.transitionDelay = `${i * 0.1 + 0.2}s`;
      } else {
        const total = links.length;
        link.style.transitionDelay = `${(total - i - 1) * 0.1}s`;
      }
    });
  });

  // Resetear estilos cuando cambie el tamaño de la ventana
  window.addEventListener("resize", () => {
    menu.classList.remove("open");
    links.forEach((link) => {
      link.style.transitionDelay = "";
    });
  });
}

export default BurgerMenu;

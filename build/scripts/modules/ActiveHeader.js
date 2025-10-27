import initContadorIcons from "./ContadorIcons.js";

function ActiveHeader() {
  const Header =
    document.querySelector(".header-top") ??
    document.querySelector(".header-dos");
  console.log(Header);
  const ActivarHeader = document.querySelector(".ActivarHeader");
  let contadorEjecutado = false; // para que el contador solo corra una vez

  window.addEventListener("scroll", () => {
    const topSeccion = ActivarHeader.offsetTop;
    const scrollActual = window.scrollY;

    if (scrollActual >= topSeccion) {
      // Usuario bajó hasta la sección o más abajo
      Header.classList.add("HeaderActiveScroll");

      // Inicializar contador solo una vez
      if (!contadorEjecutado) {
        initContadorIcons();
        contadorEjecutado = true;
      }
    } else {
      // Usuario subió por encima del top de la sección
      Header.classList.remove("HeaderActiveScroll");
    }
  });
}

export default ActiveHeader;

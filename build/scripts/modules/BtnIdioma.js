import { aplicarTraduccionIndex } from "./Lang.js";
import { aplicarTraduccionMapa } from "./LangMapa.js";
import { aplicarTraduccionNosotros } from "./LangNosotros.js";
import { aplicarTraduccionServicios } from "./LangServicios.js";
import { aplicarTraduccionTrabajos } from "./langTrabajos.js";

function initBtnIdioma() {
  const Btn = document.querySelector(".header__BtnLenguague");
  const Option = document.querySelectorAll(".optionLenguaje");

  if (!Btn || Option.length < 2) return;

  // Evento para cambiar idioma
  Btn.addEventListener("click", () => {
    Option[0].classList.toggle("header__BtnLenguague--Active");
    Option[1].classList.toggle("header__BtnLenguague--Active");

    const idioma = Option[0].classList.contains("header__BtnLenguague--Active")
      ? "es"
      : "en";

    aplicarTraduccionNosotros(idioma);
    aplicarTraduccionIndex(idioma);
    aplicarTraduccionServicios(idioma);
    aplicarTraduccionTrabajos(idioma);
    aplicarTraduccionMapa(idioma);
  });

  // Aplicar idioma inicial
  const idiomaInicial = Option[0].classList.contains(
    "header__BtnLenguague--Active"
  )
    ? "es"
    : "en";
  aplicarTraduccionIndex(idiomaInicial);
  aplicarTraduccionNosotros(idiomaInicial);
  aplicarTraduccionServicios(idiomaInicial);
  aplicarTraduccionTrabajos(idiomaInicial);
  aplicarTraduccionMapa(idiomaInicial);
}

export default initBtnIdioma;

import ActiveHeader from "./modules/ActiveHeader.js";
import initBtnIdioma from "./modules/BtnIdioma.js";
import BurgerMenu from "./modules/BurgerMenu.js";
import FetchCiudades from "./modules/FetchCiudades.js";
import FetchTrabajos from "./modules/FetchTrabajos.js";
import MapaDOM from "./modules/MapaDOM.js";
import trabajosDOM from "./modules/TrabajosDOM.js";
import trabajosDOMPage from "./modules/TrabajosDOMPage.js";

document.addEventListener("DOMContentLoaded", async function () {
  initBtnIdioma();
  FetchTrabajos();
  trabajosDOM();
  trabajosDOMPage();
  FetchCiudades();
  MapaDOM();
  BurgerMenu();
  ActiveHeader();
});

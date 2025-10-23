import initBtnIdioma from "./modules/BtnIdioma.js";
import initContadorIcons from "./modules/ContadorIcons.js";
import FetchCiudades from "./modules/FetchCiudades.js";
import FetchTrabajos from "./modules/FetchTrabajos.js";
import MapaDOM from "./modules/MapaDOM.js";
import trabajosDOM from "./modules/TrabajosDOM.js";
import trabajosDOMPage from "./modules/TrabajosDOMPage.js";

document.addEventListener("DOMContentLoaded", async function () {
  initBtnIdioma();
  initContadorIcons();
  FetchTrabajos();
  trabajosDOM();
  trabajosDOMPage();
  FetchCiudades();
  MapaDOM();
});

import FetchCiudades from "./FetchCiudades.js";

async function MapaDOM() {
  const ciudades = await FetchCiudades();
  const body = document.querySelector("body");
  const MXNLE = document.querySelector("#MXNLE");
  const MXHID = document.querySelector("#MXHID");
  const MXJAL = document.querySelector("#MXJAL");
  const MXMEX = document.querySelector("#MXMEX");
  const MXROO = document.querySelector("#MXROO");
  const MXQUE = document.querySelector("#MXQUE");
  const Estados = [MXHID, MXJAL, MXMEX, MXNLE, MXROO, MXQUE];
  if (!MXHID && !MXJAL && !MXMEX && !MXNLE && !MXQUE && !MXROO) return;
  Estados.forEach((e) => {
    e.addEventListener("click", function () {
      Object.entries(ciudades).forEach(([_, Ciudad]) => {
        if (Ciudad.id == e.id) {
          const { id, nombre, proyecto1, proyecto2, proyecto3 } = Ciudad;

          const overlayBody = document.createElement("div");
          overlayBody.classList.add("overlayBody");
          overlayBody.setAttribute("data-aos", "fade-up");
          overlayBody.innerHTML += `
        <img
          class="logo__hummer"
          src="build/img/LogoHummer.png"
          alt="Logo de hummer"
        />
        <div class="overlayBody__content">
            <p data-aos="fade-up" class="overlayBody__nombre">${nombre}</p>
            <div data-aos="fade-up class="overlayBody__informacion"> 
                <p>${proyecto1}</p>
                <p>${proyecto2}</p>
                <p>${proyecto3}</p>
            </div>
        </div>
    `;

          body.appendChild(overlayBody);

          // Cerrar al hacer clic en el botón o fuera del contenido
          overlayBody.addEventListener("click", (e) => {
            if (
              e.target.classList.contains("overlayBody") ||
              e.target.classList.contains("overlayBody__close")
            ) {
              overlayBody.remove();
            }
          });
        }
      });
    });
  });
}

export default MapaDOM;

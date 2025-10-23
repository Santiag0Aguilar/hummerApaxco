import FetchTrabajos from "./FetchTrabajos.js";

async function trabajosDOMPage() {
  const data = await FetchTrabajos();
  const Trabajos = data;
  const ProyectosContenedor = document.querySelector(".Trabajos__Page");
  if (!ProyectosContenedor) return;
  const body = document.querySelector("body");

  // Creamos un fragmento para mejor rendimiento (opcional)
  const fragment = document.createDocumentFragment();

  Object.entries(Trabajos).forEach(([_, Ciudad]) => {
    const { Nombre, Ruta_Imagen, informacion, id } = Ciudad;

    // --- Crear toda la estructura ---
    const item = document.createElement("div");
    item.classList.add("proyectos__bottom--item__Page", "swiper-slide");

    // Guardar metadatos (id e info)
    item.dataset.id = id;
    item.dataset.info = informacion;
    item.dataset.nombre = Nombre;

    // --- Contenido principal ---
    const contenido = document.createElement("div");
    contenido.classList.add("proyectos__bottom--item__contendio");

    const img = document.createElement("img");
    img.src = Ruta_Imagen;
    img.alt = Nombre;

    const pContenido = document.createElement("p");
    pContenido.textContent = Nombre;

    contenido.appendChild(img);
    contenido.appendChild(pContenido);

    // --- Overlay ---
    const overlay = document.createElement("div");
    overlay.classList.add("overley__trabajos");

    const overlayImgDiv = document.createElement("div");
    overlayImgDiv.classList.add("overley__trabajos--img");

    const overlayImg = document.createElement("img");
    overlayImg.src = "build/img/link-alt-1-svgrepo-com.svg";
    overlayImg.alt = "link-alt-1-svgrepo-com";

    overlayImgDiv.appendChild(overlayImg);

    const overlayTexto = document.createElement("p");
    overlayTexto.classList.add("overley__trabajos--texto");
    overlayTexto.textContent = Nombre;

    overlay.appendChild(overlayImgDiv);
    overlay.appendChild(overlayTexto);

    // --- Unir todo ---
    item.appendChild(contenido);
    item.appendChild(overlay);

    // Agregar al fragmento
    fragment.appendChild(item);
  });

  // Insertar todos los elementos al contenedor
  ProyectosContenedor.appendChild(fragment);

  // --- Delegar eventos (mejor práctica) ---
  ProyectosContenedor.addEventListener("click", (e) => {
    const item = e.target.closest(".proyectos__bottom--item__Page");
    if (!item) return; // si no clickeó un item, salir

    const id = item.dataset.id;
    const info = item.dataset.info;
    const nombre = item.dataset.nombre;

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
                <p>${info}</p>
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
    // 👉 Aquí puedes hacer lo que necesites con esa info:
    // mostrar modal, expandir info, cambiar contenido, etc.
  });
}

export default trabajosDOMPage;

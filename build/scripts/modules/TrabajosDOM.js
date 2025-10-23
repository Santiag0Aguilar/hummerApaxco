import FetchTrabajos from "./FetchTrabajos.js";

async function trabajosDOM() {
  const data = await FetchTrabajos();
  const Trabajos = data;
  const ProyectosContenedor = document.querySelector(
    ".proyectos__bottom__Contenedor"
  );

  if (!ProyectosContenedor) return;

  Object.entries(Trabajos).forEach((key, value) => {
    const Ciudad = key[1];
    const Nombre = Ciudad.Nombre;
    const RutaImagen = Ciudad.Ruta_Imagen;
    const Informacion = Ciudad.informacion;

    const div = document.createElement("div");
    div.classList.add("proyectos__bottom--item");
    div.classList.add("swiper-slide");

    const img = document.createElement("img");
    img.src = RutaImagen;
    img.alt = Nombre;

    const p = document.createElement("p");
    p.textContent = Nombre;

    div.appendChild(img);
    div.appendChild(p);
    ProyectosContenedor.appendChild(div);
  });
}

export default trabajosDOM;

// build/scripts/langMapa.js

export const translationsMapa = {
  es: {
    zonas: {
      boton: "Cotiza ahora",
      lugares: [
        "Guadalajara, Jalisco",
        "Monterrey, nvo leon",
        "Queretaro",
        "Cancun, Q.Roo",
        "Hidalgo",
        "Estado de mexico",
      ],
      titulo: "Campos de accion",
    },
  },
  en: {
    zonas: {
      boton: "Get a Quote",
      lugares: [
        "Guadalajara, Jalisco",
        "Monterrey, Nuevo Leon",
        "Queretaro",
        "Cancun, Q.Roo",
        "Hidalgo",
        "State of Mexico",
      ],
      titulo: "Fields of Action",
    },
  },
};

// Función para aplicar traducción
export function aplicarTraduccionMapa(idioma) {
  const t = translationsMapa[idioma];
  if (!t) return;

  // --- Botón ---
  const boton = document.querySelector(".Zonas__info .Btn-2");
  if (boton) boton.textContent = t.zonas.boton;

  // --- Lista de lugares ---
  const lista = document.querySelectorAll(".Zonas__info ul li");
  lista.forEach((li, i) => {
    if (t.zonas.lugares[i]) li.textContent = t.zonas.lugares[i];
  });

  // --- Título de sección ---
  const titulo = document.querySelector(".Zona__titulo h3");
  if (titulo) titulo.textContent = t.zonas.titulo;
}

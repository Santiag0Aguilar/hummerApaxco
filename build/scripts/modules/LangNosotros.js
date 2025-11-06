// build/scripts/langNosotros.js

export const translationsNosotros = {
  es: {
    hero: {
      titulo: "Humer: Excelencia en Soldadura y Construcción",
      texto:
        "Somos líderes en proyectos de construcción industrial, comercial, hotelera y gubernamental. Nuestro trabajo garantiza precisión, durabilidad y diseño de alta calidad.",
    },
    industrias: {
      titulo: "Industrias en las que trabajamos",
      items: [
        {
          nombre: "Hotelera",
          descripcion:
            "Proyectos completos de hoteles y resorts con los más altos estándares.",
        },
        {
          nombre: "Comercial",
          descripcion:
            "Construcción de tiendas y centros comerciales funcionales y duraderos.",
        },
        {
          nombre: "Calera",
          descripcion:
            "Proyectos industriales resistentes y seguros en plantas y caleras.",
        },
        {
          nombre: "Gubernamental",
          descripcion:
            "Infraestructura gubernamental cumpliendo con normas estrictas.",
        },
      ],
    },
    mejorOpcion: {
      titulo: "¿Por qué elegirnos?",
      items: [
        {
          nombre: "Calidad Premium",
          descripcion:
            "Nuestros proyectos se destacan por precisión y materiales de primera.",
        },
        {
          nombre: "Experiencia Comprobada",
          descripcion:
            "Décadas de trabajo en industrias diversas respaldan nuestra trayectoria.",
        },
        {
          nombre: "Trabajo Garantizado",
          descripcion:
            "Nos aseguramos de que cada proyecto cumpla y supere las expectativas.",
        },
        {
          nombre: "Inversión Justificada",
          descripcion:
            "Facturamos caro porque la calidad y durabilidad de nuestro trabajo lo valen.",
        },
      ],
    },
  },
  en: {
    hero: {
      titulo: "Humer: Excellence in Welding and Construction",
      texto:
        "We are leaders in industrial, commercial, hotel, and government construction projects. Our work guarantees precision, durability, and high-quality design.",
    },
    industrias: {
      titulo: "Industries we work in",
      items: [
        {
          nombre: "Hotel",
          descripcion:
            "Complete hotel and resort projects with the highest standards.",
        },
        {
          nombre: "Commercial",
          descripcion:
            "Construction of functional and durable stores and shopping centers.",
        },
        {
          nombre: "Lime Factory",
          descripcion:
            "Resistant and safe industrial projects in plants and lime factories.",
        },
        {
          nombre: "Government",
          descripcion:
            "Government infrastructure complying with strict standards.",
        },
      ],
    },
    mejorOpcion: {
      titulo: "Why choose us?",
      items: [
        {
          nombre: "Premium Quality",
          descripcion:
            "Our projects stand out for precision and top-quality materials.",
        },
        {
          nombre: "Proven Experience",
          descripcion:
            "Decades of work in various industries support our track record.",
        },
        {
          nombre: "Guaranteed Work",
          descripcion:
            "We ensure every project meets and exceeds expectations.",
        },
        {
          nombre: "Justified Investment",
          descripcion:
            "We charge premium because the quality and durability of our work are worth it.",
        },
      ],
    },
  },
};

// Función para aplicar traducción en nosotros.html
export function aplicarTraduccionNosotros(idioma) {
  const t = translationsNosotros[idioma];
  if (!t) return;

  // --- HERO ---
  const heroH1 = document.querySelector(".hero-text h1");
  if (heroH1) heroH1.textContent = t.hero.titulo;

  const heroP = document.querySelector(".hero-text p");
  if (heroP) heroP.textContent = t.hero.texto;

  // --- INDUSTRIAS ---
  const industriasH2 = document.querySelector(".industrias-nosotros h2");
  if (industriasH2) industriasH2.textContent = t.industrias.titulo;

  const industriaCards = document.querySelectorAll(".industria-card");
  industriaCards.forEach((card, i) => {
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (t.industrias.items[i]) {
      if (h3) h3.textContent = t.industrias.items[i].nombre;
      if (p) p.textContent = t.industrias.items[i].descripcion;
    }
  });

  // --- MEJOR OPCIÓN ---
  const mejorH2 = document.querySelector(".mejor-opcion h2");
  if (mejorH2) mejorH2.textContent = t.mejorOpcion.titulo;

  const opciones = document.querySelectorAll(".opcion");
  opciones.forEach((op, i) => {
    const h3 = op.querySelector("h3");
    const p = op.querySelector("p");
    if (t.mejorOpcion.items[i]) {
      if (h3) h3.textContent = t.mejorOpcion.items[i].nombre;
      if (p) p.textContent = t.mejorOpcion.items[i].descripcion;
    }
  });
}

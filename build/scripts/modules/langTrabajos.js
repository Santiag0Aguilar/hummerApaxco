// build/scripts/langTrabajos.js

export const translationsTrabajos = {
  es: {
    hero: {
      titulo: "Proyectos de Construcción de Alta Calidad",
      texto:
        "Hummer es la empresa líder en soldadura y construcción, especializada en proyectos industriales, comerciales, hoteleros y gubernamentales. Nuestro trabajo tiene garantía de resultados que superan las expectativas.",
    },
    industrias: {
      titulo: "Industrias donde trabajamos",
      items: [
        {
          h3: "Hotelera",
          p: "Proyectos de construcción y remodelación con los más altos estándares de calidad en hoteles y resorts.",
        },
        {
          h3: "Comercial",
          p: "Construcción de centros comerciales, tiendas y espacios comerciales con diseño funcional y duradero.",
        },
        {
          h3: "Calera",
          p: "Proyectos industriales en caleras y plantas, garantizando resistencia y seguridad en cada estructura.",
        },
        {
          h3: "Gubernamental",
          p: "Construcción de instalaciones gubernamentales cumpliendo con las normas más estrictas y exigencias técnicas.",
        },
      ],
    },
    experiencia: {
      titulo: "Nuestra experiencia",
    },
    calidad: {
      titulo: "Trabajo de Alta Calidad",
      texto:
        "En Hummer, entendemos que la excelencia tiene un costo. Nuestra experiencia, precisión y compromiso garantizan que cada proyecto no solo cumple, sino que supera las expectativas, justificando la inversión en cada trabajo.",
    },
  },
  en: {
    hero: {
      titulo: "High-Quality Construction Projects",
      texto:
        "Hummer is the leading company in welding and construction, specialized in industrial, commercial, hotel, and governmental projects. Our work guarantees results that exceed expectations.",
    },
    industrias: {
      titulo: "Industries We Work In",
      items: [
        {
          h3: "Hotel",
          p: "Construction and remodeling projects with the highest quality standards in hotels and resorts.",
        },
        {
          h3: "Commercial",
          p: "Construction of shopping centers, stores, and commercial spaces with functional and durable design.",
        },
        {
          h3: "Lime Industry",
          p: "Industrial projects in lime plants and factories, ensuring strength and safety in every structure.",
        },
        {
          h3: "Government",
          p: "Construction of governmental facilities complying with the strictest regulations and technical requirements.",
        },
      ],
    },
    experiencia: {
      titulo: "Our Experience",
    },
    calidad: {
      titulo: "High-Quality Work",
      texto:
        "At Hummer, we understand that excellence comes at a cost. Our experience, precision, and commitment ensure that each project not only meets but exceeds expectations, justifying the investment in every work.",
    },
  },
};

// Función para aplicar traducción
export function aplicarTraduccionTrabajos(idioma) {
  const t = translationsTrabajos[idioma];
  if (!t) return;

  // --- HERO ---
  const heroH1 = document.querySelector(".hero h1");
  if (heroH1) heroH1.textContent = t.hero.titulo;

  const heroP = document.querySelector(".hero p");
  if (heroP) heroP.textContent = t.hero.texto;

  // --- INDUSTRIAS ---
  const industriasH2 = document.querySelector(".industrias h2");
  if (industriasH2) industriasH2.textContent = t.industrias.titulo;

  const industriaCards = document.querySelectorAll(".industria-card");
  industriaCards.forEach((card, i) => {
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (t.industrias.items[i]) {
      if (h3) h3.textContent = t.industrias.items[i].h3;
      if (p) p.textContent = t.industrias.items[i].p;
    }
  });

  // --- EXPERIENCIA ---
  const experienciaH2 = document.querySelector(
    ".trabajos__contenedor h2.centrar__texto"
  );
  if (experienciaH2) experienciaH2.textContent = t.experiencia.titulo;

  // --- CALIDAD ---
  const calidadH2 = document.querySelector(".calidad h2");
  if (calidadH2) calidadH2.textContent = t.calidad.titulo;

  const calidadP = document.querySelector(".calidad p");
  if (calidadP) calidadP.textContent = t.calidad.texto;
}

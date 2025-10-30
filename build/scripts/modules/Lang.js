// build/scripts/langIndex.js

export const translationsIndex = {
  es: {
    nav: {
      nosotros: "Nosotros",
      servicios: "Servicios",
      trabajos: "Trabajos",
      ubicaciones: "Alcance",
    },
    header: {
      slogan: "Excelencia estructural para proyectos de gran escala",
    },
    nosotros: {
      titulo: "Acerca de nosotros",
      texto: `HUMER es una empresa mexicana, fundada en el año 2013 en el Estado de
          México, bajo el régimen de persona física con el registro
          CURJ920121BE6. Debido a la constante evolución de la industria en
          nuestro país, la empresa en particular creo una asociación en el año
          2020, Surgiendo así lo que hoy es SERVICIOS INDUSTRIALES HUMER S.A. de
          C.V. estructurado con personal especializado en aplicación de
          soldadura, ingeniería, Fabricación, montaje, supervisión y
          administración. Nuestra experiencia se ha forjado en la estructura
          metálica en obras, soldadura especializada, fabricación de piezas
          metálicas para la industria en general, (Caleras, Concreteras, etc.),
          así mismo en el ámbito residencial.`,
      sectores: [
        "Sector hotelero",
        "Sector comercial",
        "Sector industrial",
        "Sector gubernamental",
      ],
    },
    servicios: {
      titulo: "Servicios",
      btn: "Cotiza ahora",
      items: [
        "Montaje de Estructuras",
        "Soldadura Esoespecializada",
        "Gestión de Proyectos",
      ],
    },
    proyectos: {
      titulo: "Nuestra experiencia",
      btn: "Cotiza ahora",
    },
    footer: {
      correoGeneral: "sihumer08@gmail.com",
      contacto1: { nombre: "Jorge alberto cruz resendiz" },
      contacto2: { nombre: "Axel daniel Cruz Resendiz" },
    },
  },
  en: {
    nav: {
      nosotros: "About us",
      servicios: "Services",
      trabajos: "Projects",
      ubicaciones: "Reach",
    },
    header: {
      slogan: "Structural excellence for large-scale projects",
    },
    nosotros: {
      titulo: "About Us",
      texto: `HUMER is a Mexican company, founded in 2013 in the State of Mexico
      under the physical person regime with the registration CURJ920121BE6.
      Due to the constant evolution of the industry in our country, the company
      created an association in 2020, giving rise to what today is SERVICIOS
      INDUSTRIALES HUMER S.A. de C.V., structured with specialized personnel
      in welding, engineering, fabrication, assembly, supervision, and
      administration. Our experience is forged in metal structures, specialized
      welding, and manufacturing of metal pieces for the industry in general
      (lime factories, concrete plants, etc.), as well as in the residential field.`,
      sectores: [
        "Hotel sector",
        "Commercial sector",
        "Industrial sector",
        "Government sector",
      ],
    },
    servicios: {
      titulo: "Services",
      btn: "Quote now",
      items: [
        "Structure Assembly",
        "Esoespecialized Welding",
        "Project Management",
      ],
    },
    proyectos: {
      titulo: "Our Experience",
      btn: "Get a Quote",
    },
    footer: {
      correoGeneral: "sihumer08@gmail.com",
      contacto1: { nombre: "Jorge alberto cruz resendiz" },
      contacto2: { nombre: "Axel daniel Cruz Resendiz" },
    },
  },
};

// Función para aplicar traducción
export function aplicarTraduccionIndex(idioma) {
  const t = translationsIndex[idioma];
  if (!t) return;

  // --- NAV ---
  const navLinks = document.querySelectorAll(".nav__enlace");
  if (navLinks.length >= 4) {
    navLinks[0].textContent = t.nav.nosotros;
    navLinks[1].textContent = t.nav.servicios;
    navLinks[2].textContent = t.nav.trabajos;
    navLinks[3].textContent = t.nav.ubicaciones;
  }

  // --- HEADER ---
  const headerH3 = document.querySelector(".header-bottom h3");
  if (headerH3) headerH3.textContent = t.header.slogan;

  // --- NOSOTROS ---
  const nosotrosH2 = document.querySelector(".nosotros__texto h2");
  if (nosotrosH2) nosotrosH2.textContent = t.nosotros.titulo;

  const nosotrosP = document.querySelector(".nosotros__texto p");
  if (nosotrosP) nosotrosP.textContent = t.nosotros.texto;

  // --- SECTORES ---
  const sectoresH4 = document.querySelectorAll(".nosotros__servicios--item h4");
  sectoresH4.forEach((el, i) => {
    if (t.nosotros.sectores[i]) el.textContent = t.nosotros.sectores[i];
  });

  // --- SERVICIOS ---
  const serviciosH2 = document.querySelector(".servicios__texto h2");
  if (serviciosH2) serviciosH2.textContent = t.servicios.titulo;

  const serviciosA = document.querySelector(".servicios__texto a");
  if (serviciosA) serviciosA.textContent = t.servicios.btn;

  const servicioItems = document.querySelectorAll(".servicio__item h2");
  servicioItems.forEach((el, i) => {
    if (t.servicios.items[i]) el.textContent = t.servicios.items[i];
  });

  // --- PROYECTOS ---
  const proyectosH2 = document.querySelector(".proyectos__top h2");
  if (proyectosH2) proyectosH2.textContent = t.proyectos.titulo;

  const proyectosA = document.querySelector(".proyectos__top a");
  if (proyectosA) proyectosA.textContent = t.proyectos.btn;

  // --- FOOTER ---
  const footerP = document.querySelector(".footer__Texto--top p");
  if (footerP) footerP.textContent = t.footer.correoGeneral;

  const nombresFooter = document.querySelectorAll(
    ".footer__Texto--bottom .nombre"
  );
  if (nombresFooter.length >= 2) {
    nombresFooter[0].textContent = t.footer.contacto1.nombre;
    nombresFooter[1].textContent = t.footer.contacto2.nombre;
  }
}

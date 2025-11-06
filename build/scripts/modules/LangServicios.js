// build/scripts/langServicios.js

export const translationsServicios = {
  es: {
    tituloSeccion: "Nuestros Servicios",
    servicios: [
      {
        nombre: "Montaje de Estructuras",
        descripcion:
          "Diseño, fabricación y montaje de estructuras metálicas con los más altos estándares de calidad.",
      },
      {
        nombre: "Soldadura Especializada",
        descripcion:
          "Trabajos de soldadura de precisión para todo tipo de proyectos industriales y comerciales.",
      },
      {
        nombre: "Gestión de Proyectos",
        descripcion:
          "Planificación y ejecución integral de proyectos para asegurar resultados eficientes y profesionales.",
      },
    ],
    misionVision: {
      titulo: "Nuestra Esencia",
      items: [
        {
          nombre: "Visión",
          descripcion:
            "Ser la empresa más confiable en la fabricación industrial, reconocidos por la aplicación de altos estándares de calidad, tiempos de entrega oportunos y precios competitivos. Contribuir al desarrollo del país, de nuestros clientes y proveedores, satisfaciendo sus necesidades con productos de alta calidad en el tiempo establecido.",
        },
        {
          nombre: "Misión",
          descripcion:
            "Convertirnos en una empresa líder a nivel nacional en el ramo de la construcción metalmecánica, enfocándonos en mejorar continuamente nuestros procesos y métodos de producción.",
        },
        {
          nombre: "Política de Calidad",
          descripcion:
            "En Servicios Industriales HUMER S.A. de C.V. trabajamos con apego a las especificaciones y normas aplicables a nuestro giro. Buscamos la satisfacción del cliente mediante la entrega de productos que rebasen sus requisitos y fomentamos la mejora continua en todos los procesos de nuestra organización.",
        },
      ],
    },
    cotizacion: {
      titulo: "Solicita tu Cotización",
      labels: {
        nombre: "Nombre Completo",
        email: "Correo Electrónico",
        servicio: "Servicio Deseado",
        mensaje: "Mensaje / Detalles",
      },
      opcionesServicio: [
        { value: "estructuras", texto: "Montaje de Estructuras" },
        { value: "soldadura", texto: "Soldadura Esoespecializada" },
        { value: "proyectos", texto: "Gestión de Proyectos" },
      ],
      placeholderNombre: "Tu nombre",
      placeholderEmail: "ejemplo@correo.com",
      placeholderMensaje: "Cuéntanos más sobre tu proyecto...",
      boton: "Enviar Cotización",
    },
  },
  en: {
    tituloSeccion: "Our Services",
    servicios: [
      {
        nombre: "Structure Assembly",
        descripcion:
          "Design, manufacturing, and assembly of metal structures with the highest quality standards.",
      },
      {
        nombre: "Specialized Welding",
        descripcion:
          "Precision welding work for all types of industrial and commercial projects.",
      },
      {
        nombre: "Project Management",
        descripcion:
          "Comprehensive project planning and execution to ensure efficient and professional results.",
      },
    ],
    misionVision: {
      titulo: "Our Essence",
      items: [
        {
          nombre: "Vision",
          descripcion:
            "To be the most reliable company in industrial manufacturing, recognized for applying high quality standards, on-time delivery, and competitive prices. We aim to contribute to the development of the country, our clients, and suppliers by meeting their needs with high-quality products delivered on time.",
        },
        {
          nombre: "Mission",
          descripcion:
            "To become a national leader in the metal-mechanical construction sector, focusing on the continuous improvement of our production methods and processes.",
        },
        {
          nombre: "Quality Policy",
          descripcion:
            "At Servicios Industriales HUMER S.A. de C.V., we work in compliance with the specifications and standards applicable to our industry. We seek customer satisfaction by delivering products that exceed their requirements and promote continuous improvement in all areas of our organization.",
        },
      ],
    },
    cotizacion: {
      titulo: "Request a Quote",
      labels: {
        nombre: "Full Name",
        email: "Email",
        servicio: "Desired Service",
        mensaje: "Message / Details",
      },
      opcionesServicio: [
        { value: "estructuras", texto: "Structure Assembly" },
        { value: "soldadura", texto: "Specialized Welding" },
        { value: "proyectos", texto: "Project Management" },
      ],
      placeholderNombre: "Your name",
      placeholderEmail: "example@email.com",
      placeholderMensaje: "Tell us more about your project...",
      boton: "Send Quote",
    },
  },
};

export function aplicarTraduccionServicios(idioma) {
  const t = translationsServicios[idioma];
  if (!t) return;

  // --- TÍTULO SECCIÓN SERVICIOS ---
  const h1Seccion = document.querySelector(".servicios-page .servicios h1");
  if (h1Seccion) h1Seccion.textContent = t.tituloSeccion;

  // --- TARJETAS DE SERVICIO ---
  const tarjetas = document.querySelectorAll(".servicio-card");
  tarjetas.forEach((card, i) => {
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (t.servicios[i]) {
      if (h3) h3.textContent = t.servicios[i].nombre;
      if (p) p.textContent = t.servicios[i].descripcion;
    }
  });
  // --- MISIÓN, VISIÓN Y POLÍTICA ---
  const mvH2 = document.querySelector(".mision-vision h2");
  if (mvH2) mvH2.textContent = t.misionVision.titulo;

  const mvCards = document.querySelectorAll(".mision-vision .mv-card");
  mvCards.forEach((card, i) => {
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (t.misionVision.items[i]) {
      if (h3) h3.textContent = t.misionVision.items[i].nombre;
      if (p) p.textContent = t.misionVision.items[i].descripcion;
    }
  });

  // --- FORMULARIO DE COTIZACIÓN ---
  const form = document.querySelector(".form-cotizacion");
  if (!form) return;

  const h2Form = form.closest(".cotizacion")?.querySelector("h2");
  if (h2Form) h2Form.textContent = t.cotizacion.titulo;

  // Labels
  form.querySelector("label[for='nombre']").textContent =
    t.cotizacion.labels.nombre;
  form.querySelector("label[for='email']").textContent =
    t.cotizacion.labels.email;
  form.querySelector("label[for='servicio']").textContent =
    t.cotizacion.labels.servicio;
  form.querySelector("label[for='mensaje']").textContent =
    t.cotizacion.labels.mensaje;

  // Placeholders
  form.querySelector("#nombre").placeholder = t.cotizacion.placeholderNombre;
  form.querySelector("#email").placeholder = t.cotizacion.placeholderEmail;
  form.querySelector("#mensaje").placeholder = t.cotizacion.placeholderMensaje;

  // Select options
  const selectServicio = form.querySelector("#servicio");
  if (selectServicio) {
    t.cotizacion.opcionesServicio.forEach((opt, i) => {
      if (selectServicio.options[i + 1]) {
        // +1 porque la primera opción es "Selecciona un servicio"
        selectServicio.options[i + 1].textContent = opt.texto;
      }
    });
  }

  // Botón
  const boton = form.querySelector("button");
  if (boton) boton.textContent = t.cotizacion.boton;
}

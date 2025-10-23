// build/scripts/langServicios.js

export const translationsServicios = {
  es: {
    tituloSeccion: "Nuestros Servicios",
    servicios: [
      {
        nombre: "Estructuras de Acero",
        descripcion:
          "Diseño y construcción de estructuras metálicas con los más altos estándares de calidad.",
      },
      {
        nombre: "Soldadura Especializada",
        descripcion:
          "Trabajos de soldadura de precisión para todo tipo de proyectos industriales y comerciales.",
      },
      {
        nombre: "Acero Inoxidable",
        descripcion:
          "Fabricación y montaje en acero inoxidable para garantizar durabilidad y estética premium.",
      },
    ],
    cotizacion: {
      titulo: "Solicita tu Cotización",
      labels: {
        nombre: "Nombre Completo",
        email: "Correo Electrónico",
        servicio: "Servicio Deseado",
        mensaje: "Mensaje / Detalles",
      },
      opcionesServicio: [
        { value: "estructuras", texto: "Estructuras de Acero" },
        { value: "soldadura", texto: "Soldadura Especializada" },
        { value: "inoxidable", texto: "Acero Inoxidable" },
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
        nombre: "Steel Structures",
        descripcion:
          "Design and construction of metal structures with the highest quality standards.",
      },
      {
        nombre: "Specialized Welding",
        descripcion:
          "Precision welding work for all types of industrial and commercial projects.",
      },
      {
        nombre: "Stainless Steel",
        descripcion:
          "Fabrication and assembly in stainless steel to ensure durability and premium aesthetics.",
      },
    ],
    cotizacion: {
      titulo: "Request a Quote",
      labels: {
        nombre: "Full Name",
        email: "Email",
        servicio: "Desired Service",
        mensaje: "Message / Details",
      },
      opcionesServicio: [
        { value: "estructuras", texto: "Steel Structures" },
        { value: "soldadura", texto: "Specialized Welding" },
        { value: "inoxidable", texto: "Stainless Steel" },
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

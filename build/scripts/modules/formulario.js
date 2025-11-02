function formulario() {
  const form = document.querySelector(".form-cotizacion");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    // Dirección de destino (puedes poner tu correo)
    const destinatario = "aguilarsantiagoguil2007@gmail.com";

    // Asunto del correo
    const asunto = encodeURIComponent("Solicitud de Cotización - " + servicio);

    // Cuerpo del correo (prellenado con la info del form)
    const cuerpo = encodeURIComponent(
      `Hola, soy ${nombre}.\n\n` +
        `Estoy interesado en el servicio de: ${servicio}.\n\n` +
        `Detalles del proyecto:\n${mensaje}\n\n` +
        `Mi correo de contacto es: ${email}.`
    );

    // Crear el enlace mailto
    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;
  });
}

export default formulario;

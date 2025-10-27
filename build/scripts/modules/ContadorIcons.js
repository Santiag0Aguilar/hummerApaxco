function initContadorIcons() {
  const elementos = document.querySelectorAll(".nosotros__servicios--contador");

  const duracion = 2000; // duración total en ms de la animación
  const fps = 60; // frames por segundo
  if (!elementos) {
    return;
  }
  elementos.forEach((e) => {
    const tope = parseInt(e.dataset.tope); // número final
    let contador = 0;
    e.textContent = 0;
    const pasos = duracion / (1000 / fps); // cantidad de pasos
    const incremento = tope / pasos; // cuánto sumar en cada paso

    const interval = setInterval(() => {
      contador += incremento;
      if (contador >= tope) {
        e.textContent = tope; // aseguramos que sea exacto al final
        clearInterval(interval);
      } else {
        e.textContent = Math.floor(contador); // mostramos número entero
      }
    }, 1000 / fps);
  });
}

export default initContadorIcons;

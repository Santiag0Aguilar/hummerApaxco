async function FetchTrabajos() {
  const url = "https://santiag0aguilar.github.io/hummerApaxco/ciudades.json"; // en produccion cambiar ruta

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la solicitud");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default FetchTrabajos;




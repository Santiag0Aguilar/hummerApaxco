const url = "../../../ciudades.json"; // en produccion cambiar ruta

async function FetchCiudades() {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error en la solicitud");
  const data = await response.json();

  return data;
}

export default FetchCiudades;


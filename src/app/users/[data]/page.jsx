"use client";  // Esto indica que es un Client Component

import axios from "axios";
import { useEffect, useState } from "react";

export default function Datos({ params }) {
  const [usuario, setUsuario] = useState(null);

  // Función para obtener los datos del usuario
  async function obtenerUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios.get(url);
    setUsuario(response.data);
  }

  // Efecto que se ejecuta cuando params.data cambia
  useEffect(() => {
    if (params.data) {
      obtenerUsuario(params.data);
    }
  }, [params.data]);

  // Mostrar mensaje de carga si los datos del usuario aún no están disponibles
  if (!usuario) {
    return <p>Cargando datos...</p>;
  }

  // Retorno del contenido si los datos ya se cargaron
  return (
    <div>
      <h1>Datos del usuario</h1>
      <p><strong>Nombre:</strong> {usuario.name}</p>
      <p><strong>Username:</strong> {usuario.username}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.phone}</p>
      <p><strong>Sitio web:</strong> {usuario.website}</p>
      <p><strong>Compañía:</strong> {usuario.company.name}</p>
      <p><strong>Lema de la compañía:</strong> {usuario.company.catchPhrase}</p>
      <p><strong>BS de la compañía:</strong> {usuario.company.bs}</p>

      <h2>Dirección</h2>
      <p><strong>Calle:</strong> {usuario.address.street}</p>
      <p><strong>Suite:</strong> {usuario.address.suite}</p>
      <p><strong>Ciudad:</strong> {usuario.address.city}</p>
      <p><strong>Código Postal:</strong> {usuario.address.zipcode}</p>
      <p><strong>Coordenadas:</strong> Latitud {usuario.address.geo.lat}, Longitud {usuario.address.geo.lng}</p>
    </div>
  );
}

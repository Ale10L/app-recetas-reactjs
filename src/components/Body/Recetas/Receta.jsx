import React, { useState, useEffect } from "react";
import axios from "axios";

const Receta = () => {
  const [receta, setReceta] = useState({ id: 0, nombre_receta: "" });
  const [recetas, setRecetas] = useState([]);

  const obtenerRecetas = () => {
    axios.get("http://localhost:3030/recetas")
    .then((response) => {
      setRecetas(response.data)
    })
    .catch((error) => {
      alert("Error al traer los datos de las recetas")
    })
  }

  function formularioCambio(event) {
    setReceta({
      ...receta,
      nombre_receta: event.target.value,
    });
  }

  function agregarReceta() {
    setRecetas([...recetas, receta]);
  }

  useEffect(()=>{
    obtenerRecetas()
  }, [])
  
  return (
    <div className="">
      <h1 className="">Recetas</h1>
      <input
        type="text"
        placeholder="nombre_receta"
        onChange={(e) => formularioCambio(e)}
      />
      <h2>
        {receta.id_receta} - {receta.nombre_receta}
      </h2>
      <button onClick={agregarReceta}>Agregar receta</button>
      <ul>
        {recetas.map((re, index) => (
          <li key={index}>{re.id} - {re.nombre_receta}</li>
        ))}
      </ul>
    </div>
  );
};

export default Receta;

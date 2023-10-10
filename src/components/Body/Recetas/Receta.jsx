import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";

const Receta = () => {
  const [receta, setReceta] = useState({ id: 0, nombre_receta: "" });
  const [recetas, setRecetas] = useState([]);
  let lista_recetas = []
  const { nombre_receta } = receta;

  //const { idReceta } = useParams();

  const obtenerRecetas = () => {
    axios
      //.get("http://localhost:3030/recetas")
      .get("https://app-recetas-reactjs.vercel.app/recetas")
      .then((response) => {
        lista_recetas.push(response.data)
        if (Array.isArray(response.data)) {
          setRecetas(response.data);
        } else {
          console.error("La respuesta de la API no es un arreglo válido: ", response.data)
        }
      })
      .catch((error) => {
        alert("Error al traer los datos de las recetas");
      });
  };

  function formularioCambio(event) {
    setReceta({
      ...receta,
      [event.name]: event.value,
    });
  }

  function agregarReceta() {
    axios
      //.post("http://localhost:3030/recetas", receta)
      .post(
        "https://app-recetas-reactjs.vercel.app/recetas",
        receta
      )
      .then(() => {
        alert("Se creó la receta");
        obtenerRecetas();
      })
      .catch((error) => {
        alert("Error al guardar la receta");
      });
  }

  useEffect(() => {
    obtenerRecetas();
  }, []);

  return (
    <div className="">
      <h1 className="">Recetas</h1>
      <input
        type="text"
        name="nombre_receta"
        placeholder="nombre_receta"
        value={nombre_receta}
        onChange={(e) => formularioCambio(e.target)}
      />
      <h2>
        {receta.id_receta} - {receta.nombre_receta}
      </h2>
      <button onClick={agregarReceta}>Agregar receta</button>
      <ul>
        {console.log("Tipo de recetas: ", typeof recetas)}
        {lista_recetas.map((re, index) => {
          return (
            <li key={index}>
              {re.id} - {re.nombre_receta}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Receta;

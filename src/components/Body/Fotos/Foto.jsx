import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";//, useNavigate } from "react-router-dom";
import axios from "axios";

const Foto = () => {
  const [foto, setFoto] = useState({
    id: 0,
    nombre_foto: "",
    id_receta: 0,
  });

  const [fotos, setFotos] = useState([]);
  const [recetas, setRecetas] = useState([]);

  //const navigate = useNavigate();
  const { idFoto } = useParams();

  const { nombre_foto, id_receta } = foto;

  function formularioCambio(event) {
    setFoto({
      ...foto,
      [event.name]: event.value,
    });
  }

  const obtenerRecetas = () => {
    axios
      //.get("http://localhost:3030/recetas")
      .get("https://app-recetas-reactjs-4qhkpgmi6-ale10l.vercel.app/recetas")
      .then((response) => {
        setRecetas(response.data);
      })
      .catch((error) => {
        alert("Error al traer los datos de las recetas");
      });
  };

  const obtenerFotos = () => {
    axios
      //.get("http://localhost:3030/fotos")
      .get("https://app-recetas-reactjs-4qhkpgmi6-ale10l.vercel.app/fotos")
      .then((response) => {
        setFotos(response.data);
      })
      .catch((error) => {
        alert("Error al traer los datos de las fotos");
      });
  };

  const guardarFoto = () => {
    try {
      if (foto.id_receta === "Seleccione una receta" || foto.id_receta === 0) {
        throw new Error("Debe seleccionar una receta");
      } else {
        axios
          //.post("http://localhost:3030/fotos", foto)
          .post("https://app-recetas-reactjs-4qhkpgmi6-ale10l.vercel.app/fotos", foto)
          .then(() => {
            alert("Se creó la foto de la receta");
            obtenerFotos();
          })
          .catch((error) => {
            alert("Error al guardar la foto");
          });
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const editarFoto = (idFoto) => {
    try {
      if (foto.id_receta === "Seleccione una receta" || foto.id_receta === 0) {
        throw new Error("Debe seleccionar una receta");
      } else {
        if (idFoto) {
          axios
            //.put(`http://localhost:3030/fotos/${idFoto}`, foto)
            .put(`https://app-recetas-reactjs-4qhkpgmi6-ale10l.vercel.app/fotos/${idFoto}`, foto)
            .then(() => {
              alert("Se editó la foto de la receta");
              obtenerFotos();
            })
            .catch((error) => {
              alert("Error al guardar la foto");
            });
        }
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const eliminarFoto = (idFoto) => {
    if (idFoto) {
      axios
        //.delete(`http://localhost:3030/fotos/${idFoto}`)
        .delete(`https://app-recetas-reactjs-4qhkpgmi6-ale10l.vercel.app/fotos/${idFoto}`)
        .then(() => {
          alert("Se elimino la foto");
          obtenerFotos();
        })
        .catch((error) => {
          alert("Error al eliminar la foto");
        });
    }
  };
  useEffect(() => {
    obtenerRecetas();
  }, [id_receta]);

  useEffect(() => {
    obtenerFotos();
  }, [idFoto]);

  return (
    <div>
      <h1 className="">Foto</h1>
      <input
        type="text"
        className="form-control"
        name="nombre_foto"
        placeholder="nombre_foto"
        onChange={(e) => formularioCambio(e.target)}
        value={nombre_foto}
      />
      <select
        name="id_receta"
        className="form-select"
        onChange={(e) => formularioCambio(e.target)}
        value={id_receta}
      >
        <option>Seleccione una receta</option>
        {recetas.map((receta, index) => (
          <option key={index} value={receta.id}>
            {receta.id} - {receta.nombre_receta}
          </option>
        ))}
      </select>
      <button onClick={guardarFoto}>Crear</button>
      <ul>
        {fotos.map((photo, index) => (
          <li key={index}>
            {photo.id} - {photo.nombre_foto}: {photo.id_receta}{" "}
            <button onClick={() => editarFoto(photo.id)}>Editar</button>
            <button onClick={() => eliminarFoto(photo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foto;

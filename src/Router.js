import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Receta from "./components/Body/Recetas/Receta";
import Utensilio from "./components/Body/Utensilios/Utensilio";
import Foto from "./components/Body/Fotos/Foto";
import Reseña from "./components/Body/Reseñas/Reseña";

const Router = () => {
    return (
        <BrowserRouter>
            <div className="">
                <Link className="mx-3.5" to="/">Home</Link>
                <Link className="mx-3.5" to="/recetas">Recetas</Link>
                <Link className="mx-3.5" to="/utensilios">Utensilios</Link>
                <Link className="mx-3.5" to="/fotos">Fotos</Link>
                <Link className="mx-3.5" to="/reseñas">Reseña</Link>

                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recetas" element={<Receta/>} />
                    <Route path="/utensilios" element={<Utensilio/>} />
                    <Route path="/fotos" element={<Foto />} />
                    <Route path="/reseñas" element={<Reseña />} />
                </Routes>
            </div>
        </BrowserRouter>);
}

export default Router;
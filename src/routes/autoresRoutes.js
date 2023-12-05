import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAUTORES);
routes.get("/autores/:id", AutorController.listarAutoresPorId);
routes.post("/autores", AutorController.cadastrarAutores);
routes.put("/autores/:id", AutorController.atualizarAutores);
routes.delete("/autores/:id", AutorController.excluirAutores);

export default routes;
import express  from "express";
import livrosRoutes from "./livrosRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), livrosRoutes)
};

export default routes;
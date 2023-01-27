import express from "express";
import author from "./authorRoutes.js";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) =>{
        res.status(200).send('Course NodeJS');
    })

    app.use(express.json(), livros, author)
    // passa a responsabilidade para livrosRoutes
      
}
export default routes;
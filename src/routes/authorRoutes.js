import express  from "express";
import AuthorController from "../../controllers/authorControllers.js";

const router = express.Router();

router
 .get("/author", AuthorController.listarAuthor)
 .get("/author/:id", AuthorController.authorPorId)
 .post("/author", AuthorController.cadastrarAuthor)
 .put('/author/:id', AuthorController.atualizarAuthor)
 .delete("/author/:id", AuthorController.deletarAuthor)

 export default router;

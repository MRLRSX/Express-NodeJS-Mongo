import mongoose from "mongoose";
const livroSchema = new mongoose.Schema
({
   id: {type: String},
   Titulo: {type: String, required: true},
   Author: {type: mongoose.Schema.Types.ObjectId, ref:'author', required: true},
   Editora: {type: String, required: true},
   Paginas: {type: Number}

});

const livros = mongoose.model('livros', livroSchema); // Modelo que representa livro no banco de dados

export default livros;

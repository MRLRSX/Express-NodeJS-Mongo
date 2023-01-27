import mongoose from "mongoose";

mongoose.connect('mongodb+srv://lucasrocharsx:ASdf&&98644844@alura.cyc0gjb.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;
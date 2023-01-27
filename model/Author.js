import mongoose from "mongoose";
const authorSchema = new mongoose.Schema
({
   id: {type: String},
   nome: {type: String, required: true},
   nascimento: {type: String, required: true},
   nacionalidade: {type: String}
 },{
       versionKey: false
   }
)

const author = mongoose.model('author', authorSchema);
export default author;
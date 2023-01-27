
import authors from "../model/Author.js";

class AuthorController{
   
    static authorPorId = (req, res) => {
        const id = req.params.id;
        authors.findById(id, (err, author) =>{
           if(!err){
             res.status(200).json(author);
           }else{
            res.status(500).send({message: `${err.message} - falha ao buscar por Id.`})
           }
        })
    }

    static listarAuthor = (req, resp) => {
      authors.find((err, author) =>{
        resp.status(200).json(author)
      })
    }

    static cadastrarAuthor = (req, resp) =>{
        let author = new authors (req.body);
        author.save((err) => {
            if(err){
                resp.status(500).send({message: `${err.message} - falha ao cadastrar Author `})
            }else{
                resp.status(201).send(author.toJSON());
            }
        });
    }

    static atualizarAuthor = (req, res) =>{
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Author atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        });
    }
    static deletarAuthor = (req, res) =>{
        const id = req.params.id;
        authors.findOneAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Author Deletado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AuthorController;

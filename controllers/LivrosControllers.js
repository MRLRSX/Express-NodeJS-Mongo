
import livros from "../model/Livro.js";

class LivroController{
   
    static livroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livro) =>{
           if(!err){
             res.status(200).json(livro);
           }else{
            res.status(500).send({message: `${err.message} - falha ao buscar por Id.`})
           }
        })
    }

    static listarLivros = (req, resp) => {
      livros.find()
      .populate('Author')
      .exec((err, livros) =>{
        resp.status(200).json(livros)
      })
    }

    static cadastrarLivro = (req, resp) =>{
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                resp.status(500).send({message: `${err.message} - falha ao cadastrar livro `})
            }else{
                resp.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) =>{
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        });
    }
    static deletarLivro = (req, res) =>{
        const id = req.params.id;
        livros.findOneAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Livro Deletado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora;
        livros.find({'Editora' : editora}, {}, (err, livros) =>{
            res.status(200).send(livros);
        });
    }
}

export default LivroController;

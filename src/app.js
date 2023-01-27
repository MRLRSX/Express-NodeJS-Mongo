import express from 'express';

const app = express();

app.use(express.json());

const livros =[
    {id: 1, 'Titulo': "Senhor dos Aneis"},
    {id: 2, 'Titulo': "O hobbit"}
]

app.get('/', (req, resp) => {
    resp.status(200).send('Curso de Node');
})

app.get('/livros', (req, resp) => {
    resp.status(200).json(livros);
})

app.post('/livros', (req, resp) =>{
    livros.push(req.body);
    resp.status(201).send('Livro Foi Cadastrado Com Sucesso');
});

app.put('/livros/:id', (req, resp) =>{
  let index = buscaLivro(req.params.id);
  livros[index].Titulo = req.body.Titulo;
  resp.status(200).json(livros);
});

app.delete('/livros/:id', (req, resp) =>{
 let {id} = req.params;
 let index = buscaLivro(id);
 livros.splice(index, 1);
 resp.send(`Livro ${id} removido`);
});

function buscaLivro(id){
    return livros.findIndex((livro) => livro.id == id);
}

export default app;
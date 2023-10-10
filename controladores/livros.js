const {getTodosLivros, getLivroId, addLivro, modificaLivro, deletarLivro} = require('../servicos/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    }
    catch (erro) {
        res.status(500)
        res.send(erro.message)
    }
}

function getLivro(req, res) {
    try {
        const livroId = req.params.id
        console.log(livroId)

        const livro = getLivroId(livroId)
        res.send(livro)
    }
    catch (erro) {
        res.status(500)
        res.send(erro.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        console.log(livroNovo)
        addLivro(livroNovo)
        res.status(201)
        res.send("Livro adicionado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
    
function patchLivro(req, res) {
    try {
        const modifacoes = req.body
        const livroId = req.params.id

        modificaLivro(modifacoes, livroId)
        res.send("Livro editado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const livroId = req.params.id
        deletarLivro(livroId)
        res.send("Livro deletado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}
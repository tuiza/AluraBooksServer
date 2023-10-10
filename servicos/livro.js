const fs = require('fs')

function modificarOBanco(novosLivros) {
    fs.writeFileSync('livros.json', JSON.stringify(novosLivros))
}

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroId(id) {
    const livros = getTodosLivros()
    console.log(id)
    const livro = livros.filter((livro) => livro.id === Number(id))[0]
    return livro
}

function addLivro(novoLivro) {
    const livros = getTodosLivros()
    const novosLivros = [...livros, novoLivro]
    modificarOBanco(novosLivros)
}

function modificaLivro(modificacao, id) {
    let livrosAtuais = getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const livroModificado = { ...livrosAtuais[indiceModificado], ...modificacao }
    livrosAtuais[indiceModificado] = livroModificado
     modificarOBanco(livrosAtuais)
}

function deletarLivro(id) {
    const livros = getTodosLivros()
    const livroFiltrados = livros.filter(livro => livro.id !== id)
    modificarOBanco(livroFiltrados)
}

module.exports = {
    getTodosLivros,
    getLivroId,
    addLivro,
    modificaLivro,
    deletarLivro
}
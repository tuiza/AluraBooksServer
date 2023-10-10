const fs = require('fs')
//ler arquivo 
const dadosOriginais = JSON.parse(fs.readFileSync("livros.json"))
//editar o arquivo
const novoDado = { id: '4', nome: 'teste' }
fs.writeFileSync("livros.json", JSON.stringify([...dadosOriginais, novoDado]))

console.log(dadosOriginais)
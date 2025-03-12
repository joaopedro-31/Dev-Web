// var nome = "Carlos"
// let idade = 25
// const email = "teste@gmail.com"

// console.log("Nome: " + nome)
// console.log("Idade: " + idade)
// console.log("Email: " + email)

// function soma(a,b){
//     return a+b
// }

// console.log("Soma = "+soma(1,2))

// const sum = (a,b,c) => a+b+c

// console.log("Soma2 = "+sum(1,2,3))

// const nome = "Carlos"
// const idade = 25
// console.log(`Nome: ${nome} - Idade: ${idade}`)

// document.getElementById("sobre").innerHTML = `
//     <div> Usuario, ${nome} </div>
//     <div> Idade, ${idade} </div>
// `

const Pessoa = {
    nome: "Maria",
    idade: 25,
    gemail: "teste@gmail.com",
    end: {
        rua: "Rua Girassol",
        numero: "45"
    }
}

console.log(`Nome: ${Pessoa.nome} - Idade: ${Pessoa.idade}`)
console.log(`Nome: ${Pessoa.end.nome}`)

const {nome:name ,idade:age, gemail="Não informado", end:{rua,numero}} = Pessoa

console.log(`Nome: ${name} - Idade: ${age} - Email: ${gemail}`)
console.log(`End: ${rua} - ${numero}`)

console.log(JSON.stringify(Pessoa))
const user_rec = JSON.stringify(Pessoa)

console.log(JSON.parse(user_rec))

const users = [pessoa_1, pessoa_2, pessoa_3]
const numeros = [1,2,3,4,5]

const [pr,seg,ter] = numeros
console.log(`${pr} ${seg} ${ter}`)
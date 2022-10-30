var nome 
var idade 
var anoNascimento
var textoIdade
var textoAnoNascimento

nome = prompt(" Nome de Usuario ")
idade = prompt(" Idade do usuario")
anoNascimento = 2022 - idade

if( idade % 2 == 0){
    textoIdade = "Par"
}else{
    textoIdade = "Impar"
}
if( anoNascimento % 2 == 0){
    textoAnoNascimento = "Par"
}else{
    textoAnoNascimento = "Impar"
}

console.log (" Olá ", nome, ", voce tem ", idade, " anos ", textoIdade, "sua ano de nascimento é: ", anoNascimento, textoAnoNascimento)
if( idade > 18 ){
    console.log(" pode tomar uma ")
}else{
    console.log(" ainda nao esta liberado tomar uma ")
}

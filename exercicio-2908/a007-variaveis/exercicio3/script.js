// Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

let a = prompt("Qual o valor da variavel a?")
let b = prompt("Qual o valor da variavel a?")
let c = a

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`.

a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

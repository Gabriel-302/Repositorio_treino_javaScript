//!Exercícios Condicionais

//?Nível básico

//*EX 1

// let idade = Number(prompt("Digite uma idade:"));

// if(idade >= 18) {
//     alert(`Você é maior de idade, contedo uma idade de ${idade} anos`);
// }
// else {
//     alert(`Você não é maior de idade, contedo uma idade de ${idade} anos`);
// }


//*EX 2

// let numeroSinal = Number(prompt("Digite um número:"));

// if(numeroSinal > 0) {
//     alert(`O número ${numeroSinal} é positivo`);
// }
// else {
//     alert(`O número ${numeroSinal} é negativo`);
// }


//*EX 3

// let nota = Number(prompt("Digite sua nota:"));

// if(nota >= 60) {
//     alert(`Aprovado`);
// }
// else{
//     alert(`Reprovado`);
// }


//*EX 4

// let numero = Number(prompt("Digite um número:"));

// if(numero > 0) {
//     alert(`O número ${numero} é positivo`);
// }
// else if(numero == 0) {
//     alert(`O número ${numero} é zero`);
// }
// else {
//     alert(`O número ${numero} é negativo`);
// }


//*EX 5

// let idade = Number(prompt("Digite uma idade:"));

// if(idade <= 12) {
//     alert(`Você é criança, contedo uma idade de ${idade} anos`);
// }
// else if (idade >= 18) {
//     alert(`Você é adulto, contedo uma idade de ${idade} anos`);
// }
// else {
//     alert(`Você é adolescente, contedo uma idade de ${idade} anos`);
// }


//*EX 6

// let numero = Number(prompt("Digite um número:"));

// if(numero % 2 == 0) {
//     alert(`O número ${numero} é par`);
// }
// else {
//     alert(`O número ${numero} é ímpar`);
// }


//?Nível Intermediário

//*EX 1

// let num1 = Number(prompt("Digite o primeiro número:"));
// let operacao = prompt("Digite a operação (+, -, *, /):");
// let num2 = Number(prompt("Digite o segundo número:"));

// let resultado;

// if (operacao === "+") {
//   resultado = num1 + num2;
// }
// else if (operacao === "-") {
//   resultado = num1 - num2;
// }
// else if (operacao === "*") {
//   resultado = num1 * num2;
// }
// else if (operacao === "/") {
//   if (num2 !== 0) {
//     resultado = num1 / num2;
//   }
//   else {
//     resultado = "Erro: divisão por zero!";
//   }
// }
// else {
//   resultado = "Operação inválida!";
// }

// alert(`Resultado: ${resultado}`);


//*EX 2

// let num1 = Number(prompt("Digite o primeiro número:"));
// let num2 = Number(prompt("Digite o segundo número:"));
// let num3 = Number(prompt("Digite o terceiro número:"));

// if (num1 > num2 && num1 > num3) {
//   alert(`O maior número é o: ${num1}`);
// }
// else if (num2 > num1 && num2 > num3) {
//   alert(`O maior número é o: ${num2}`);
// }
// else {
//   alert(`O maior número é o: ${num3}`);
// }


//*EX 3

// let valor = Number(prompt("Digite o valor da compra:"));

// if (valor > 100) {
//     valor = Math.floor(valor * 0.9);
// }

// alert(`O valor é ${valor}`);


//*EX 4

let loginOriginal = "admin"
let senhaOriginal = "1234"

let login = prompt("Insira seu login:");
let senha = prompt("Insira sua senha:");

if (login === loginOriginal && senha === senhaOriginal) {
    alert("Login bem-sucedido");
}
else {
    alert("Acesso negado");
}
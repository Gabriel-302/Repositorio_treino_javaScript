//!Exercícios Repetição

//?Nível básico

//*EX 1

// for(let i = 1; i <= 10; i++) {
//   console.log(i);
// };


//*EX 2

// let numero = Number(prompt("Digite um número:"));

// for(let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// };


//*EX 3

// let natural = Number(prompt("Digite um número natural:"));
// let soma = 0;

// for(let i = 1; i <= natural; i++) {
//   soma += i;
// }

// console.log(`A soma de 1 até ${natural} é ${soma}`);


//?Nível intermediário

//*EX 1

// for(let i = 2; i <= 50; i += 2) {
//   console.log(i);
// };


//*EX 2

// let numero = Math.floor(Math.random() * 100);

// let palpite = Number(prompt("Adivinhe o número (entre 1 e 100):"));

// while (palpite !== numero) {
//   if (palpite < numero) {
//     palpite = Number(prompt("O número correto é MAIOR! Tente novamente:"));
//   } else {
//     palpite = Number(prompt("O número correto é MENOR! Tente novamente:"));
//   }
// }

// alert(`Parabéns! Você acertou, o número era ${numero}.`);


//*EX 3

// let numero = Number(prompt("Digite um número:"));

// while (numero >= 0) {
//     console.log(numero);
//     numero --;
// }


//*EX 4

// let senhaFixa = 1234;
// let senhaUsuario = Number(prompt("Digite a senha:"));

// while (senhaUsuario !== senhaFixa) {
//      senhaUsuario = Number(prompt("Senha Errada, tente novamente"));
// }

// alert(`Parabéns! Você acertou, a senha era ${senhaFixa}.`);
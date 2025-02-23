// ===============================
// Declaração de Variáveis
// ===============================

const c = 50; // Constante (não pode ser alterada)

var a = 1; // Variável global (evitar uso de var)
let b = 2; // Variável de escopo local
let d = 10;

console.log(a, b, c, d);

// ===============================
// Tipos de Variáveis - Numéricas
// ===============================

const ano = 1991;
let atrasoEmSegundos = 0.000016;
let area = 16 * 3.14; // Corrigido o uso da vírgula, que não é um separador válido
let metadeArea = area / 2;

console.log("Ano: " + ano);
console.log("Atraso: " + atrasoEmSegundos);
console.log("Área: " + area);
console.log("Metade da Área: " + metadeArea);

// ===============================
// Tipos de Variáveis - String e typeof
// ===============================

let pais = "Brasil";
let continente = "América do Sul";

console.log(pais, typeof pais);
console.log(continente, typeof continente);

let message1 = "O navio 'Mars' fez escala no porto.";
let message2 = "Chuva forte passará perto da cidade de São Paulo.";

console.log(message1);
console.log(message2);

// ===============================
// Strings - Template Literals
// ===============================

let nome = "João";
let idade = 30;

let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);

// ===============================
// Strings - Outras Operações
// ===============================

let texto = "JavaScript";
console.log(texto.charAt(4)); // Exibe 'S'

let frase1 = "O gato subiu no telhado e depois pulou";
console.log(frase1.indexOf("gato")); // Exibe 2
console.log(frase1.lastIndexOf("pulou")); // Exibe 33

let palavra = "abcdefgh";
console.log(palavra.substring(2, 5)); // Exibe 'cde'

let texto1 = "Esta é uma String.";
console.log(texto1.slice(5, 7)); // Exibe 'é'

let lista = "maçã, banana, laranja";
let frutas = lista.split(", ");
console.log(frutas); // Exibe [ 'maçã', 'banana', 'laranja' ]

let frase2 = "O JavaScript é incrível!";
let novaFrase = frase2.replace("JavaScript", "Python");
console.log(novaFrase); // Exibe 'O Python é incrível!'

let texto2 = "JavaSCRIPT";
console.log(texto2.toLowerCase()); // Exibe 'javascript'
console.log(texto2.toUpperCase()); // Exibe 'JAVASCRIPT'

let texto3 = "  Espaços ao redor  ";
console.log(texto3.trim()); // Exibe 'Espaços ao redor'

// ===============================
// Funções em JavaScript
// ===============================

function soma(a, b) {
  return a + b;
}

let resultadoSoma = soma(1, 2);
console.log("Resultado da soma: " + resultadoSoma); // Exibe 3

let multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(4, 3)); // Exibe 12

// ===============================
// Objetos
// ===============================

let usuario1 = {}; // Objeto vazio
console.log(usuario1, typeof usuario1);

let usuario2 = {
  nome: "João",
  sobrenome: "da Silva",
  idade: 18,
  email: "joaod@email.com",
};

console.log(`${usuario2.nome} ${usuario2.sobrenome}`);
console.log(usuario2.idade);
console.log(usuario2.email);

let usuario3 = {
  nome: "Maria",
  sobrenome: "da Silva",
  idade: 25,
  email: "maria@email.com",
};

console.log(`${usuario3.nome} ${usuario3.sobrenome}`);
usuario3.idade = 30;
console.log(usuario3.idade);

// ===============================
// Objetos - Métodos
// ===============================

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  acelerar: function () {
    console.log("O carro está acelerando!");
  },
};

carro.acelerar();

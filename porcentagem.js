var valor = parseFloat(prompt("Digite o valor a converter:"));
var porcentagem = parseInt(prompt("Digite a porcentagem encontrar:"));
// Converte o numero inteiro em decimal
// Só é possivel achar a % usando numero decimal
var porcentagemDecimal = porcentagem /100;
// Multiplica o valor pela porcentagem para encontrar o resultado
var resultado = valor * porcentagemDecimal;

console.log ("O Resultado é: " + resultado);

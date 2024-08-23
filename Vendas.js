//Elabore um programa que:
// Solicite o nome de um produto
// Solicite a quantidade vendida
// Solicite o valor do produto
// Apresente o valor total
// Solicite a %  de desconto
// Apresente o R$ total de desconto
// Apresente o valor total da venda depois do desconto


var nomeProduto = prompt ("Digite o nome do produto:");
var quantidadeVendida = parseInt (prompt ("Digite a quantidade vendida:"));
var valorProduto = parseFloat (prompt("Digite o valor do produto:"));
var totalVenda = quantidadeVendida*valorProduto;
console.log ( "O total da venda é" + totalVenda );
var porcentagemdeDesconto = parseInt (prompt("Digite a porcentagem de desconto"));
var porcentagemDecimal =  porcentagemDesconto /100;
var descontoReais = totalVenda + porcentagemDecimal;
var totalDesconto = totalVenda - descontoReais;

console.log ( "O produto" + nomeProduto + "gerou un total de: " + totalDesconto + "a pagar. " );









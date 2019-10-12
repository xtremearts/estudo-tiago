/*
function show(objeto: {categoria:string, produto:string}) {
    console.log(objeto.categoria);
    console.log(objeto.produto);
}

function show({categoria, produto}: ObjetoProdutos) {

}

show({categoria: 'Irrigação', produto: 'Válvula Solenoide'});

let produto: ObjetoProdutos = {categoria: 'Irrigação', produto: 'Válvula Solenoide'};

console.log(produto);

*/
var Produtos = /** @class */ (function () {
    function Produtos() {
    }
    return Produtos;
}());
var produto = new Produtos();
produto.categoria = 'Irrigação';
produto.produto = 'Válvula solenoide';
console.log(produto.categoria);
console.log(produto.produto);

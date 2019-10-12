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

interface ObjetoProdutos {
    categoria: string;
    produto?: string;
}

class Produtos implements ObjetoProdutos{
    categoria: string;
    produto: string;
}

let produto = new Produtos();
produto.categoria = 'Irrigação';
produto.produto = 'Válvula solenoide';


console.log(produto.categoria);
console.log(produto.produto);
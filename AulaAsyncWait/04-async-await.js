function preparaPedido() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pizza pronta!");
        }, 2000);
    });
}

async function fazerPedido() {  // esta função é assíncrona, ou seja, ela não vai esperar a execução do código para continuar a execução do restante do código
    console.log("Pedido Realizado");

    const pedido =  await preparaPedido();  //faz esperar

    console.log(pedido);
    console.log("Pedido Entregue");
}

fazerPedido();

function prepararPedido(){
    return new Promise((resolve, reject)=>{
        temPao = false;
        setTimeout(()=>{
            if(temPao){
                resolve("Hambúrge pronto!");
            }else{
                reject(new Error("Não deu para fazer o Hambúrge"));
            }

        },2000)
    })
}

prepararPedido().then((resultado)=>{
    console.log(resultado)
}).catch((erro) => {
    console.error(erro.message)
});

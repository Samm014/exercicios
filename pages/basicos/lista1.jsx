export default function lista1(){
    return(
        <div>
            {gerador(100)}
        </div>
    )
}

function gerador(valFinal){
    const lista = [];
    for(let i = 0; i <= valFinal; i++){
        if(i === 10){
            lista.push(<span>{i}</span>);
        }else{
            lista.push(<span>{i}, </span>);
        }
    }  

    return lista;
}

/*
    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10,</span>
    </div>
*/
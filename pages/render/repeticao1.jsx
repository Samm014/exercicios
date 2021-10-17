export default function Repeticao1(){
    const listaAprovados = [
        'Samuel',
        'Carlos',
        'Laura',
        'João',
        'Rafaela',
    ]

    function renderList(){
       return listaAprovados.map((aprovados, key)=><li key={key}>{aprovados}</li>)
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}


// function renderList(){

//     const itens = [];

//     for(let i = 0; i < listaAprovados.length; i++){
//         itens.push(
//             <li key={i}>{listaAprovados[i]}</li>
//         )
//     }

//     return itens;
// }
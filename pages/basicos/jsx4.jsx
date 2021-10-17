export default function jsx4(){
    const msg = 'Hello, World!'; 
    return(
        <div>
            <h1>Intregação JS e JSX</h1>
            <h2>{VerificaNumeroEntreDoisValores(5,4,0)}</h2>
        </div>
    )
}

function VerificaNumeroEntreDoisValores(valor, min, max){
    if(valor >= min && valor <= max){
        return `O número ${valor} está entre ${min} e ${max}`
    }else{
        return `O número ${valor} não está entre ${min} e ${max}`
    }
}
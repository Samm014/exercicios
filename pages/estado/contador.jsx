import { useState } from "react"

export default function contador(){

    const [valor, setValor] = useState(5);

    function getValor(e){
       e.target.innerHTML === "Aumentar(+)" ? setValor(valor+1) : setValor(valor-1);
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>{valor}</p>
            <button onClick={(e)=>getValor(e)}>Diminuir(-)</button>
            <button onClick={(e)=>getValor(e)}>Aumentar(+)</button>
        </div>
    )
} 
import { useState } from "react";
export default function formulario(){

    const [valor, setValor] = useState("");

    function alterarInput(e){
        e.preventDefault();
        setValor(`${valor}!`)
    }
    
    return (
        <div>
            <form action="" style={{
                display: "flex",
                flexDirection: "column",
                width: "500px",
            }}>
                <span>{valor}</span>
                <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
                <button onClick={(e)=>alterarInput(e)}>click me😀</button>
            </form>
        </div>
    )
}
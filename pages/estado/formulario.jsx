import { useState } from "react";
import style from "./css/styleFormulario.module.css"
export default function formulario(){

    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [idade, setIdade] = useState("");

    // function alterarInput(e){
    //     e.preventDefault();
    //     setValor(`${valor}`)
    // }
    
    return (
        <div className={style.body}>


            <form action="" className={style.form}>
                {/* <span>{valor}</span> */}

                <input className={style.input} type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                <input className={style.input} type="text" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)}/>
                <input className={style.input} type="number" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)}/>

                {/* <button onClick={(e)=>alterarInput(e)}>click me😀</button> */}
            </form>


            <div className={style.boxCadastro}>
                <span className={style.spanDados}>Nome: {nome}</span>
                <span className={style.spanDados}>Cidade: {cidade}</span>
                <span className={style.spanDados}>Idade: {idade}</span>
            </div>
        </div>
    )
}
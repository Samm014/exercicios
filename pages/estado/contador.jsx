import { useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import styles from './css/styleContador.module.css';

export default function contador(){
    
    const [valor, setValor] = useState(0);

    function getValor(e){
        e.target.innerHTML === "Aumentar(+)" ? setValor(valor+1) : setValor(valor-1);
    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1 className={styles.title}>Contador</h1>
                <NumeroDisplay valor={valor}/>
                <div className={styles.wrapButtons}>
                    <button className={styles.button} onClick={(e)=>getValor(e)}>Diminuir(-)</button>
                    <button className={styles.button} onClick={(e)=>getValor(e)}>Aumentar(+)</button>
                </div>
            </div>
        </div>
        
    )
} 
import { useState } from "react";
import mega from '../../functions/megaSenaFunction';
import NumeroDisplay from '../../components/NumeroDisplay';
import styles from '../../styles/NumeroDisplay.module.css';
export default function megaSena(){

    const [number, setNumber] = useState(0);
    const [valorInput, setValorInput] = useState([0]);

    function getCountNumbers(){
        let count = parseInt(document.getElementById('numberInput').value);
        setNumber(count);
    }

    return (
        <div className={styles.container}>
        <h1>Mega Sena</h1>
            <div className={styles.wraperNumbers}>
                {mega(number).map((e)=>{
                    return  <NumeroDisplay valor={e} />
                })}
            </div>

            <input type="number" id="numberInput" min={6} max={20} value={valorInput}
            onChange={e => setValorInput(+e.target.value)}/>
            <button onClick={()=>{getCountNumbers()}}>Gerar números</button>
        </div>
    )
}
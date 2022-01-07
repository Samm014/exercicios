import styles from '../styles/NumeroDisplay.module.css';
export default function NumeroDisplay(props){
    return(
            <div className={styles.backgroundValor}>
                <p className={styles.valor}>{props.valor}</p>
            </div>
    )
}
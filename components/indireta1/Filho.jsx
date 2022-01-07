export default function Filho(props){
 
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={(e)=>props.function(e)}>Talk to Dad #event</button>
            <button onClick={()=>props.function("Passei no ENEM!")}>Talk to Dad</button>
        </div>
    )
}
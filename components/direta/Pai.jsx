import Filho from "./Filho";

export default function Pai(props){
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Família {props.nameFamily}</h1>
                <Filho nameChild="Rafaela" nameFamily={props.nameFamily}/>
                <Filho nameChild="João"    nameFamily={props.nameFamily}/>
                <Filho nameChild="Samuel"  {...props}/>
        </div>
    )
}
export default function onlyPair(props){

    const isPair = (props.numero) % 2 === 0; //return true or false

    return isPair ? <h1>{props.numero}</h1> : null

    // ou

    // if (props.numero % 2 === 0) {
    //     return <h1>{props.numero}</h1>
    // } else {
    //     return null
    // }

    
}
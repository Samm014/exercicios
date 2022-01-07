export default function Title(props){
    console.log(props);
    
    return (props.small) ?(
        <>
            <p>{props.mainText}</p>
            <p>{props.subtitle}</p>
        </>
    )
    : 
    (
        <>
            <h1>{props.mainText}</h1>
            <h3>{props.subtitle}</h3>
        </>
    )
}
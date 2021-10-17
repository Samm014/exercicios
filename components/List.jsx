export default function List(props){
    return (
        <div>
            <h1>Lista de Itens</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}
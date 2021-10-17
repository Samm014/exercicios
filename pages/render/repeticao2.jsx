import Produto from "../../model/produto"
import listaProdutos from "../../data/listaProdutos"
export default function Repeticao2(){

    function renderLinhas(){
        return listaProdutos.map(function(produto){
            return (
                <tr key={produto.id}>
                    <td style={styleBorda}>{produto.id}</td>
                    <td style={styleBorda}>{produto.nome}</td>
                    <td style={styleBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    const styleBorda = {
        border: "3px solid #000",
    }

    return (
        <div>
            <table style={styleBorda}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLinhas()}
                </tbody>
            </table>
        </div>
    )
}
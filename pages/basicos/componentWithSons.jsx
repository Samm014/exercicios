import Item from "../../components/Item";
import List from "../../components/List";

export default function componenteWithSons(){
    return (
        <div>
            <List>
                <Item conteudo="Item #11" />
                <Item conteudo="Item #12" />
                <Item conteudo="Item #13" />
            </List>
        </div>
    )
}
import Filho from "./Filho";

export default function Pai(props){

    function TalkToSon(callback){
        console.log(callback);
    }
    return (
        <div>
            <Filho function={TalkToSon}/>
        </div>
    )
}
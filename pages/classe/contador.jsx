import { Component } from 'react';
import Contador from '../../components/Contador';

export default class ContadorPage extends Component{

    render(){
        return (
            <>
                <Contador InitialValue={0} passo={10}/>
            </>
        )
    }
    
}
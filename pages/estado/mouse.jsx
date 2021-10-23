/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';

export default function mouse(props){

    const [arrayX, setArrayX] = useState(0);

    const arrayY = useState(0);
    let y = arrayY[0];
    const setArrayY = arrayY[1];


    const style = {
        backgroundColor: '#2b2b2b',
        color: '#fff',
        height: '100vh',
        width: '100%',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    function mouseMoved(e){
       /*  console.log(e); */
       setArrayX(e.clientX)
       setArrayY(e.clientY)
    }

    return (
        <div style={style} onMouseMove={(e)=>mouseMoved(e)}>
            <span>Eixo X: {arrayX}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}
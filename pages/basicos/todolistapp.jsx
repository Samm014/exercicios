/* eslint-disable react-hooks/rules-of-hooks */
import Blog from "../../components/todolistapp"
import React, { useState } from "react";
export default function writeBlog(){

    const [task,setTask] = useState('');
    const [taskList,setTaskList] = useState([]);


    function recuperarDados(){
        const content = document.querySelector("#titleInput").value;
        setTask(content);
    }

    function submit(){
        setTaskList([...taskList, task])
    }


    return (
        <>
            <input id="titleInput" onChange={()=>recuperarDados()} type="text" placeholder="Digite o título"></input>
            <button onClick={()=>submit()}>Enviar</button>
            <Blog contents={taskList} />
        </>
    )
}
function action1(){
    console.log("action 1")
}

export default function button(){
    return (
        <div>
            <button onClick={()=>action1()}>Click me 😜</button>
        </div>
    )
}
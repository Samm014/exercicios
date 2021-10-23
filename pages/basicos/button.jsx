function action1(e){
    console.log(e)
}

export default function button(){
    return (
        <div>
            <button onClick={(e)=>action1(e)}>Click me 😜</button>
        </div>
    )
}
export function Comp1(){
    return (
        <div>
            <h2>Comp1</h2>
        </div>
    )
}

export const Comp2 = function(){
    return <h2>Comp2</h2>
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return(
        <div>
            <h2>Comp3</h2>
        </div>
    )
}

export const Comp4 = ()=>{
    return <h2>Comp4</h2>
}

export const Comp5 = ()=> <h2>Comp5</h2>

export const Comp6 = props=>{
    return (
        <div>
            {props.msg}
        </div>
    )
}

// export {
//     Comp1,Comp2,Comp4,Comp5,Comp6,
// }
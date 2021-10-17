import If from "../../components/If";

export default function condicional2(){
    const number = 2;
    return (
        <div>
           <If expression={number % 2 === 0}>
               The number is pair
           </If>

           <If expression={number % 2 === 1}>
               The number is not pair
           </If>
        </div>
    )
}
export default function mega(count = 6, numbers=[]){

    if(count < 6 && count > 60){
        throw "Quantidade INVÁLIDA";
    }

    if(numbers.length === count){
        return numbers.sort((a,b) => a - b);
    }

    const randomNumber = parseInt(Math.random() * 60) + 1;
    if(!numbers.includes(randomNumber)){
        return mega(count, [...numbers, randomNumber]);
    } else{
        return mega(count, numbers)
    }
 
}

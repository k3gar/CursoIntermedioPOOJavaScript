/* function recursiva(){
    if ( Validación){
        //llamados recursivos
    }else {
        //LLamados normales sin recursividad
    }
} */
const numeritos = [0,1,2,3,4,5,6,7,8,3453,]
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[index]
//     console.log({index, numerito})
// }

function recursiva(parame){
    if(parame.length != 0){
        const firstNum = parame[0];
        console.log(firstNum)
        parame.shift()
        return recursiva(parame);

    } else {

    }
}

recursiva(['😎','🤩','😜','🤑']);
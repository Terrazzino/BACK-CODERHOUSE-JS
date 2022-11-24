//FUNCIONES FLECHA

// const mostrar = (na)=>{
//     console.log(na)
// }
// mostrar ("TERRA")

//CALLBACKS

// const ejecutar = (unaFuncion,yourName) =>{
//     unaFuncion(yourName)
// }
// const myName = (name)=>{
//     console.log("Mi nombre es ", name)
// }
// ejecutar(myName,"TERRA")

//EJERCICIO CALLBACK

// const operacion = (val1,val2,func) =>func(val1,val2)
// const suma = (valu1,valu2)=>valu1+valu2
// const multiplicacion = (valu1,valu2)=>valu1*valu2
// const resta = (valu1,valu2)=>valu1-valu2
// const division = (valu1,valu2)=>valu1/valu2
// const modulo = (valu1,valu2)=>valu1%valu2
// console.log(operacion(5,5,suma))
// console.log(operacion(5,2,resta))
// console.log(operacion(5,5,multiplicacion))
// console.log(operacion(5,2,division))
// console.log(operacion(11,2,modulo))

//PROMESAS

const operacion = (val1,val2,func) =>{
    return new Promise ((resolve,reject)=>{
        if (val2>val1){
            reject("NO SE PERMITE QUE EL SEGUNDO VALOR SEA MAYOR")
        }else{
            resolve(func(val1,val2))
        }
    })
}
const suma = (valu1,valu2)=>valu1+valu2
const multiplicacion = (valu1,valu2)=>valu1*valu2
const resta = (valu1,valu2)=>valu1-valu2
const division = (valu1,valu2)=>valu1/valu2
const modulo = (valu1,valu2)=>valu1%valu2

operacion(5,55,suma).then(res=>console.log('Resultado: ',res)).catch(err=>console.log('error: ',err))
operacion(5,2,resta).then(res=>console.log('Resultado: ',res)).catch(err=>console.log('error: ',err))
operacion(5,5,multiplicacion).then(res=>console.log('Resultado: ',res)).catch(err=>console.log('error: ',err))
operacion(5,25,division).then(res=>console.log('Resultado: ',res)).catch(err=>console.log('error: ',err))
operacion(11,2,modulo).then(res=>console.log('Resultado: ',res)).catch(err=>console.log('error: ',err))

console.log("Yo primero?")
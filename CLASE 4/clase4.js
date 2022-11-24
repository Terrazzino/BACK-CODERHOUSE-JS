//FUNCION MOSTRAR LETRAS

// const fin = ()=>console.log("Fin del deletreo por segundo")
// const mostrarLetras =(words,cb)=>{
//     let i = 0;
//     const Interval = setInterval(()=>{
//         const letters = words[i];
//         i++;
//         if(letters){
//             console.log(letters)
//         }else{
//             clearInterval(Interval);
//             cb()
//         }
//     },1000)
// }
// setTimeout(()=>{
//     mostrarLetras("TERRA",fin)
// },0)
// setTimeout(()=>{
//     mostrarLetras("TERRA",fin)
// },250)
// setTimeout(()=>{
//     mostrarLetras("TERRA",fin)
// },500)

//FILE SYSTEM

// const fs = require('fs');
// fs.writeFileSync('data.txt','Del futuro que te digo?')
// fs.appendFileSync('data.txt','No somos amigos del futuro')
// const data = fs.readFileSync('data.txt','utf-8')
// console.log(data)
// fs.unlinkSync('data.txt')

//EJERCICIO FECHA Y HORA con FS SINCRÓNICO

// const fs = require('fs');
// const date = new Date();
// try {
//     fs.writeFileSync('./fyh.txt',date.toLocaleString())
// } catch (error) {
//     console.log("NO EXISTE EL PATH ",error)
// }
// try {
//     const data = fs.readFileSync('./fyh.txt','utf-8') 
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

//FILE SYSTEM ASINCRÓNICO

// const fs = require('fs');
// const data = fs.readFile('./fyh.txt','utf-8',(error,respuesta)=>{
//     if (error){
//         console.log('Error: ',error)
//     }else{
//         setTimeout(()=>console.log(respuesta),1000)
//     }
// })

//EJERCICIO 2 FS ASINCRONICO

// const fs = require('fs');
// const data = fs.readFile('./package.json','utf-8',(error,respuesta)=>{
//     if(error){
//         console.log('ERROR DE LECTURA: ',error)
//     }else{
//         const info ={
//             contenidoStr: respuesta,
//             contenidoObj: JSON.parse(respuesta),
//             size: respuesta.length
//         }
//         fs.writeFile('./json.txt',JSON.stringify(info,null,2),(error)=>{
//             if(error){
//                 console.log('Error: ',error)
//             }else{
//                 fs.readFile('./json.txt','utf-8',(error,data)=>{
//                     if(error){
//                         console.log(error)
//                     }else{
//                         console.log('ARCHIVO SUBIDO: ',data)
//                     }
//                 })
//             }
//         })
//     }
// })

//FILE SYSTEM ASINCRÓNICO CON PROMESA

// const fs = require('fs')
// fs.promises.writeFile('./json.txt','Agregando mediante promesa una pizca de Rola')
// .then(leerData)
// .catch(err=>console.log(err))
// async function leerData(){
//     try {
//         await fs.promises.readFile('./json.txt','utf-8')
//         .then(res=>console.log('Ingresados y leídos los datos correctamente: ',res))
//         .catch(err=>console.log("No se pueden leer los datos correctamente ",err))
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// console.log("RECOPILANDO DATOS")

//EJERCICIO FILE SYSTEM CON PROMISES

const fs = require('fs');

fs.promises.readFile('./json.txt','utf-8')
.then(cont=>{
    const info = JSON.parse(cont);
    console.log(info)

    const jsonObj = info.contenidoObj
    jsonObj.author="CODERHOUSE"
    fs.promises.writeFile('package.json.coderhouse',JSON.stringify(jsonObj,null,2))
    .then(()=>console.log("Escritura exitosa"))
    .catch(err=>console.log("ERROR: ",err))
})
.catch(err=>console.log(err))
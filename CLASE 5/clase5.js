//EJERCICIO 1

// const numeroRandom = ()=>{
//     let numeros={}
//     for (let i=0;i<10000;i++){
//         let num = parseInt(Math.random()*20+1);
//         if (!numeros[num]) numeros[num]=0
//             numeros[num]++
//         }
//         console.log(numeros)
//     }

// numeroRandom()

//EJERCICIO 2

// const productos = [
//     {id:1,style:"scottish",price:500.4563},
//     {id:2,style:"ipa",price:800.34543},
//     {id:3,style:"porter",price:200.2341},
// ]
// const getName = ()=>productos.map(prod=>prod.style).join(';')
// const getTotalPrice=()=>{
//     let total=0;
//     productos.forEach(price=>{total+=price.price})
//     return dosDecimales(total)
// }

// const getAveragePrice=()=>dosDecimales(getTotalPrice()/productos.length)
// const lowerPrice = ()=>{
//     let num=productos[0].price;
//     let producto;
//     productos.map(prod=>{
//         if(prod.price<num){
//             num=prod.price
//             producto=prod.style
//         }else{
//             num=num
//         }
//     })
//     return `Producto mas barato: ${producto} a ${dosDecimales(num)}`
// }
// const maximumPrice = ()=>{
//     let num=productos[0].price;
//     let producto;
//     productos.map(prod=>{
//         if(prod.price>num){
//             num=prod.price
//             producto=prod.style
//         }else{
//             num=num
//         }
//     })
//     return `Producto mas caro: ${producto} a ${dosDecimales(num)}`
// }
// dosDecimales = (precio)=>{
//     return Number(precio.toFixed(2))
// }
// const datos = {
//     productos:getName(),
//     precioTotal:getTotalPrice(),
//     precioPromedio:getAveragePrice(),
//     productoBarato:lowerPrice(),
//     productoCaro:maximumPrice()
// }
// console.log("Los productos son: ",getName())
// console.log("El precio total es: ",getTotalPrice())
// console.log("El precio promedio es: ",getAveragePrice())
// console.log(lowerPrice())
// console.log(maximumPrice())
// console.log(datos)

//MÓDULOS NATIVOS NODE.JS


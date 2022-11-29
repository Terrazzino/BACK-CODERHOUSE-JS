const fs = require('fs');
const express = require('express');

let productsLista=[];

const productos1 = {style:"Dorada Pampeana",price:500}
const productos2 = {style:"Golden",price:550}
const productos3 = {style:"Scottish",price:700}
const productos4 = {style:"Porter",price:700}
const productos5 = {style:"ipa",price:850}

class Contenedor {
    constructor (archivo){
        this.archivo=archivo
    }

    save = async(objeto)=>{
        try {
            let newObj;
            for(let i=0;i<=productsLista.length;i++){
                newObj = {
                    title:objeto.style,
                    price:objeto.price,
                    id:i
                }
            }
            productsLista.push(newObj);
            await fs.promises.writeFile(this.archivo,JSON.stringify(productsLista,null,2))
            .then(console.log("Anexamos los productos con éxito"))
            .catch(err=>console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    getAll = async()=>{
        try {
            const respuesta = await fs.promises.readFile(this.archivo,'utf-8')
            return(JSON.parse(respuesta))
        } catch (error) {
            console.log("No podemos acceder al archivo",error)
        }
    }

    getById= async(num)=>{
        try {
            const respuesta = await fs.promises.readFile(this.archivo,'utf-8')
            return (JSON.parse(respuesta)[num])
        } catch (error) {
            console.log("No corresponde el numero ",error)
        }
    }

}

const prod = new Contenedor('./productos.txt')

prod.save(productos1)
prod.save(productos2)
prod.save(productos3)
prod.save(productos4)
prod.save(productos5)


const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error",error=>console.log( `Error en servidor ${error}`))

app.get('/productos',async(req,res)=>{
    const products = await prod.getAll()
    res.send(products)
})

app.get('/productoRandom',async(req,res)=>{
    let num= Math.round(Math.random()*(productsLista.length-1))
    const random = await prod.getById(num)
    res.send(random)
})
const fs = require('fs');

let productsLista=[];

const beer1 = {
    title:'Ipa',
    price:600,
    img:'Green'
}
const beer2 = {
    title:'Scottish',
    price:400,
    img:'Red'
}
const beer3 = {
    title:'Porter',
    price:900,
    img:'Black'
}
const beer4 = {
    title:'Golden',
    price:300,
    img:'Rubia'
}
const beer5 = {
    title:'Dorada Pampeana',
    price:200,
    img:'Dorada'
}

class Contenedor {
    constructor (archivo){
        this.archivo=archivo
    }

    async deleteById(num){
        try {
            productsLista.map(prod=>{
                if(prod.id==num){
                   productsLista.splice(num,1);
                    fs.promises.writeFile(this.archivo,JSON.stringify(productsLista,null,2))
                    .then(console.log("Los nuevos productos son: ", productsLista))
                    .catch(err=>console.log("Error: ",err))
                }else{
                    console.log("El numero ingresado no corresponde a la lista de productos")
                }
            })
        } catch (error) {
            console.log("Error al buscar el numero de ID")
        }
    }

    async save(objeto){
        try {
            let newObj;
            for(let i=0;i<=productsLista.length;i++){
                newObj = {
                    title:objeto.title,
                    price:objeto.price,
                    img:objeto.img,
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

    async getAll(){
        try {
            await fs.promises.readFile(this.archivo,'utf-8')
            .then(data=>console.log(JSON.parse(data)))
            .catch(console.log("No hay productos en el archivo"))
        } catch (error) {
            console.log("No podemos acceder al archivo")
        }
    }

    async getById(num){
        try {
            await productsLista.map(pro=>{
                if(pro.id==num){
                console.log(productsLista[num])
            }else{
             null
            }})
        } catch (error) {
            console.log("No corresponde el numero ",error)
        }
    }

    async deleteAll(){
        productsLista=[];
        await fs.promises.writeFile(this.archivo,JSON.stringify(productsLista));
        console.log("Productos de la lista: ",productsLista)
    }
}

const prod = new Contenedor('./productos.txt')

prod.save(beer1)
prod.save(beer2)
prod.save(beer3)
prod.save(beer4)
prod.save(beer5)

prod.getAll()

prod.getById(1)
prod.deleteById(2)
prod.deleteAll()
console.log("Lista Final: ",productsLista)
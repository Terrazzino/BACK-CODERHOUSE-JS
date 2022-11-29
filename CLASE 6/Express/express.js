const express = require('express');
const moment = require('moment')

const app = express();

const PORT = 8080;
let count = 0

const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error",error=>console.log( `Error en servidor ${error}`))

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>')
})
app.get('/visitas',(req,res)=>{
    res.send(`Numero de visitas: ${++count}`)
})
app.get('/fyh',(req,res)=>{
    res.send(moment().format('MMMM Do YYYY, h:mm:ss a'))
})
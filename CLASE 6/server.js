const http = require('http')

const server = http.createServer((require,response)=>{
    response.end(getMessage())
})

const PORT = 8080

const conectedServer = server.listen(PORT,()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${conectedServer.address().port}`)
})

const getMessage = () =>{
    const hours = new Date().getHours();
    if(hours>=6 && hours<=12){
        return('Buenos días!')
    }
    if(hours>=13 && hours<=19){
        return('Buenas tardes!')
    }
    else{
        return('<h1 style="color:blue">Buenas noches!</h1>')
    }
}
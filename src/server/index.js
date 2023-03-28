const express = require("express")

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.router()
    }
    //! aqui se coloca las servidor con metodo de casa
    router(){
        this.app.use('/',(req,res)=>{
            res.send("ruta principal")
        })
    }
    listen (){
        this.app.listen(this.port, ()=>{
            console.log(`servidor escuhando en estos momentos ${this.port}`)
        })
    }
}

module.exports = Server 
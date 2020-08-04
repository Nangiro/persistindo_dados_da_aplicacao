const express = require('express') /*chamar o express para essa variavel*/
const nunjucks = require('nunjucks')
const routes = require("./routes")
const methodOverride = require('method-override')

const server = express()
//require: chama o JS
// ponto barra (./) referencia a raiz do projeto
server.use(express.urlencoded({extended: true})) //responsavel por fazer o req.body funcionar
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes) //para que possamos usar o routes

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.listen(5000, function(){
  console.log("Server is running")
})
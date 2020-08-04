const express = require ('express')
const routes = express.Router ()
const instructors = require('./app/controllers/instructors') //chamando a function do arquivo instructors
const members = require('./app/controllers/members')
//o comando express.Router faz com que a variavel routes seja responsavel pelas rotas

routes.get('/', function(req, res){
  return res.redirect ("/instructors")
})

routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.get('/instructors/:id/edit', instructors.edit)
routes.post("/instructors", instructors.post)
routes.put("/instructors", instructors.put)
routes.delete("/instructors", instructors.delete)



routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)
routes.post("/members", members.post)
routes.put("/members", members.put)
routes.delete("/members", members.delete)


//exportando a variavel
module.exports = routes
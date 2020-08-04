const Instructor = require ('../models/instructor')

module.exports = {
  index(req,res){
    Instructor.all(function(instructors){
      return res.render("instructors/index", {instructors})
    })
  
  },

  show(req,res){
    return
  },

  create(req,res){
    return res.render("instructors/create")

  },

  post(req,res){
    const keys = Object.keys(req.body) //o object.keys cria um array de chaves

    for(key of keys) {
      //req.body[key] é igual a req.body.avatar_url
      if(req.body[key] == ""){
        return res.send('Please, fill in all fields')
      }
    }

    Instructor.create(req.body, function(instructor) {
      return res.redirect(`/instructors/${instructor.id}`)
    })
  },

  edit(req,res){
    return
  },

  put(req,res){
    const keys = Object.keys(req.body) //o object.keys cria um array de chaves

    for(key of keys) {
      //req.body[key] é igual a req.body.avatar_url
      if(req.body[key] == ""){
        return res.send('Please, fill in all fields')
      }
    }
    return
    },

    delete(req,res){
    return
  },
}
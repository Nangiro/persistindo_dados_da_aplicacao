module.exports = {
  index(req,res){
    return res.render("members/index")

  },

  show(req,res){
    return
  },

  create(req,res){
    return res.render("members/create")

  },

  post(req,res){
    const keys = Object.keys(req.body) //o object.keys cria um array de chaves

    for(key of keys) {
      //req.body[key] é igual a req.body.avatar_url
      if(req.body[key] == ""){
        return res.send('Please, fill in all fields')
      }
    }

    return 
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
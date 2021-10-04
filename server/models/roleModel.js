const {model, Schema} = require('mongoose')

//роли нашего пользователя
const roles = new Schema({
    value:{type:String, unique:true, default:"USER"}
})

module.exports = model('Role', roles)

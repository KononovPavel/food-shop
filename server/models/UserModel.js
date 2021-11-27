const {model, Schema, Types, ObjectId} = require('mongoose')

const user = new Schema({
    //имя пользователя обязательно
    firstName: {type: String, required: true},
    //фамилия пользователя обязательно
    lastName: {type: String, required: true},
    //email пользователя обязательно
    email: {type: String, required: true},
    //password пользователя должен быть также обязательным
    password: {type: String, required: true},
    //адрес пользователя не нужно спрашивать при регистрации, но вот создать отдельный блок с профилем нужно обязательно
    address: {
        street: {type: String,default:""},
        city: {type: String,default:""},
        country: {type: String, default:""}
    },
    // корзина
    card: [],
    //заказы
    orders:[],
    //роли пользователя строка, так как одно поле которое стринг
    role: {type: String, ref: 'ROLE'},
    //Статус пользователя, забанить можно за то, что не заплатит за заказ например :
    ban: {
        status: {type: Boolean, default: false},
        reason: {type: String, default: ''}
    },
})
//создаем модель пользователя, используя метод model из mongoose
//первый параметр, это то, как модель будет называться в бд, второй - наш объект
module.exports = model("USER", user)

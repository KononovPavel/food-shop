const {model, Schema, ObjectId} = require('mongoose')

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
        street: {type: String},
        city: {type: String},
        country: {type: String}
    },
    //массив заказов
    orders: [],
    //массив выполненых заказов
    ordersComplete: [],
    //корзина заказов пользователя (не администратора)
    card: [],
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

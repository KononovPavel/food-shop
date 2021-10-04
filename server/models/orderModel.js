const {model, Schema, ObjectId} = require('mongoose')
//это будет блок заказа
const order = new Schema({
    products: [{type: ObjectId, ref: "PRODUCT"}],
    //дата заказа
    date: {type: Date, required: true},
    //владелец, с помощью которого можно будет перевести заказ на статус выполнен
    owner: {type: ObjectId, ref: "USER"},
    // статус нашего заказа : Принят, в процессе, отправлен
    status: {type: String, default: "Принят администратором"},
    //варианты доставки : самовывоз, доставка со стоимостью в 2$, бесплатная доставка от 50$
    delivery: {type:String, default: "Самовывоз"},
    payment: {type:String, default: "Наличными"}
})
module.exports = model("ORDER", order)

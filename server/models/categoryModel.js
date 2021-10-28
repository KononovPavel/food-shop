const {Schema, Types, model} = require('mongoose')

const schema = new Schema({
    value: {type: String, default: "Без категории"},
    products:[{type:Types.ObjectId, ref:"PRODUCT"}],
})

module.exports = model("Category", schema)

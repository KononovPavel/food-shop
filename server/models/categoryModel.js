const {Schema, Types, model} = require('mongoose')

const schema = new Schema({
    value: {type: String, default: "Без категории"},
    photo:{type :String, default : ""},
})

module.exports = model("Category", schema)

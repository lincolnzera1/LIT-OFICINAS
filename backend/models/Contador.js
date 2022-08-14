const mongoose = require('mongoose')


const Contador = mongoose.model("contador", {
    numero: Number
})

module.exports = Contador
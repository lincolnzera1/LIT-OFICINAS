const mongoose = require("mongoose")
const express = require('express')
const router = express.Router()
const Contador = require('../models/Contador')
var axios = require("axios")

router.get("/", async (req, res) => {
    const numeros = await Contador.find()

    res.json(numeros)
})

router.post("/", async (req, res) => {
    const {numero} = req.body

    const contador = {
        numero
    }

    try {
        await Contador.create(contador)
        console.log("Contador adicionado")
        res.send("nothing")
    } catch (error) {
        console.log("Houve um erro")
        res.send("dqwokpdwq")
    }
})


module.exports = router
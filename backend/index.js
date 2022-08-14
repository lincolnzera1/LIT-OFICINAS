require('dotenv').config()
const express = require('express')
const app = express()
const rotaPessoas = require('./routes/pessoas')
const mongoose = require('mongoose')
var cors = require('cors')

const dbPassword = process.env.DB_PASSWORD
const dbUser = process.env.DB_USER

const mongoUrl = `mongodb+srv://guilherme:${dbPassword}@cluster0.jiz8pb1.mongodb.net/nodeJourney?retryWrites=true&w=majority`

 
// Essas linhas de cors permitem o react(localhost:3000) acessar o node(localhost:3001) 
app.use(cors()) 

var corsOptions = {
    origin: 'http://localhost:3000' || process.env.PORT,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
//////

app.use(
    express.urlencoded({
        extended: true
    })
)


app.use(express.json())

app.use("/pessoas", rotaPessoas)

app.get("/", (req, res) => {
    res.send("wellcome")
})




mongoose.connect(mongoUrl).then(() => {
    app.listen(process.env.PORT || 3001, () => console.log("Server on"))
}).catch((err) => {
    console.log("erro foi: " + err)
})


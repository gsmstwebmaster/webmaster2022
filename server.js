const express = require("express")

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Server Running")
    console.log("Home visited")
})

app.listen(1213)
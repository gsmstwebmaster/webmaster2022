const express = require("express")
const app = express()
const teamRouter = require("./routes/teams")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/teams', teamRouter)

app.get('/', (req, res) => {
    res.render("teams")
    console.log("Went home")
})


app.listen(1213)
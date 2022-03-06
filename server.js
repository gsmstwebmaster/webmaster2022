const express = require("express")
const app = express()
const teamRouter = require("./routes/teams")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/teams', teamRouter)

app.get('/', (req, res) => {
    res.redirect('/ourchapter.html')
    console.log("Went home")
})

app.get('/chapter', (req, res) => {
    res.redirect('/ourchapter.html')
})

app.get('/contamihax', (req, res) => {
    res.redirect('/contamihax.html')
})


app.listen(process.env.PORT || 1213)
console.log(`listening on port localhost:1213`)
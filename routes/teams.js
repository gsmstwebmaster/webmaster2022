const express = require("express")
const router = express.Router()
const db = require("../firebase")
const createIdeas = require("../test-funcs")
const { FieldValue } = require('firebase-admin/firestore');

router.get('/', (req, res) =>{
    console.log("visited teams")
    const ideas = [];
    const idea = db.collection('ideas').get()
    .then((snapshot) => {
        snapshot.forEach(idea => {
            ideas.push(idea.data())
        })
    })
    .then(() => {
        console.log(ideas)
        res.render('teams', {ideas})
    })
    
})

router.post('/ideas', (req, res) => {
    data = {
        name: req.body.name,
        idea: req.body.idea
    }
    db.collection('ideas').add(data)
    .then(() => {
        res.redirect('/teams')
    })
})

router.get('/create-ideas', (req, res) => {
    createIdeas(25)
    res.redirect('/teams')
})

module.exports = router
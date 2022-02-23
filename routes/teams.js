const express = require("express")
const router = express.Router()
const db = require("../firebase")
const { FieldValue } = require('firebase-admin/firestore');

router.get('/', (req, res) =>{
    const ideas = [];
    const idea = db.collection('ideas').get()
    .then((snapshot) => {
        snapshot.forEach(idea => {
            ideas.push({
                name: idea.data().name,
                idea: idea.data().idea,
                id: idea.id,
                likes: idea.data().likes
            })
        })
    })
    .then(() => {
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

router.post('/:id/like', (req, res) => {
    db.collection('ideas').doc(req.params.id)
    .update({likes: FieldValue.increment(1)})
    .then(() => {
        res.redirect('/teams')
    })
})


module.exports = router
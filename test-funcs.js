const faker = require('faker')
const db = require('./firebase')


function createIdeas(num){
    for(i = 0; i < num; i++)
    {
        const name = faker.name.firstName() + " " + faker.name.lastName()
        const idea = faker.lorem.words(20);
        data = {
            name: name,
            idea: idea
        }
        db.collection('ideas').add(data)
    }
}

module.exports = createIdeas
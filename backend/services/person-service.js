const BaseService = require('./base-service')
const PersonModel = require('../models/person')

class PersonService extends BaseService {
    model = PersonModel

    async joinTeam(person, team) {
        person.team=team
        team.people.push(person)
        await person.save()
        await team.save()
    }
    async changeTeam(person,team) {
        let oldTeam=person.team;
        let index=oldTeam.people.indexOf(person._id);
        oldTeam.people.splice(index,1);
        await oldTeam.save();
        
        person.team=team;
        team.people.push(person);
        await person.save();
        await team.save();
        return person;
    }
}

module.exports = new PersonService()
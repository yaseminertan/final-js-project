const BaseService = require('./base-service')
const TeamModel = require('../models/team')

class TeamService extends BaseService {
    model = TeamModel

    async acceptIssue(team, issue) {
        //issue.status='progress'
        team.issues.push(issue)
        issue.team=team
        await team.save()
        await issue.save()
    }
    async finishIssue(issue, team) {
        person.team=team
        team.issues.splice(team.issues.indexOf(issue),1)
        await person.save()
        await team.save()
    }
    

}

module.exports = new TeamService()
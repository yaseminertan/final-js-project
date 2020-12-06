const BaseService = require('./base-service')
const IssueModel = require('../models/issue')

class IssueService extends BaseService {
    model = IssueModel
    async changeStatus(issue,team,status,deadline) {
        issue.status=status;
        issue.team=team;
        issue.deadline=deadline;
        await issue.save();
        return issue;
    }
}

module.exports = new IssueService()
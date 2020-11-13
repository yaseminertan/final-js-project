const BaseService = require('./base-service')
const IssueModel = require('../models/issue')

class IssueService extends BaseService {
    model = IssueModel

}

module.exports = new IssueService()
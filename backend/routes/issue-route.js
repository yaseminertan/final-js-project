const express = require('express')
const router = express.Router()

const IssueService = require('../services/issue-service')

router.get('/all', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const issues = await IssueService.findAll()
  res.render('list', { items: issues,type:'issues' })
})

router.get('/all/json', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const issues = await IssueService.findAll()
  res.send(issues)
})

router.get('/:id', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const issue = await IssueService.find(req.params.id)
  if(!issue) res.status(404)
  res.render('data', { data: issue })
})

router.get('/:id/json', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const issue = await IssueService.find(req.params.id)
  if(!issue) res.status(404)
  res.send(issue)
})
router.post('/', async (req, res) => {
  const issue = await IssueService.add(req.body)
  res.send(issue)
})

router.delete('/:id', async (req, res) => {
  const issue = await IssueService.del(req.params.id)
  res.send(issue)
})

module.exports = router
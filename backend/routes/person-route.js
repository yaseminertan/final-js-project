const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')
const TeamService = require('../services/team-service')

router.get('/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.render('list', { items: people,type:'people' })
})

router.get('/all/json', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const people = await PersonService.findAll()
  res.send(people)
})

router.get('/:id', async (req, res) => {
  const user = await PersonService.find(req.params.id)
  if(!user) res.status(404)
  res.render('data', { data: user })
})

router.get('/:id/json', async (req, res) => {
  const user = await PersonService.find(req.params.id)
  if(!user) res.status(404)
  res.send(user)
})

router.post('/', async (req, res) => {
  const user = await PersonService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await PersonService.del(req.params.id)
  res.send(user)
})

router.post('/team', async (req, res) => {
  const user = await PersonService.find(req.params.person)
  const team = await TeamService.find(req.params.team)
  await PersonService.changeTeam(user, team)
  res.send(user)
})

router.get('/:id/people', async (req, res) => {
  const user = await PersonService.find(req.params.id)
  const peers = await user.findPeople()
  res.send(peers)
})

module.exports = router
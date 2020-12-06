const express = require('express')
const router = express.Router()

const TeamService = require('../services/team-service')

router.get('/all', async (req, res) => {
  const teams = await TeamService.findAll()
  res.render('list', { items: teams,type:'teams'  })
})

router.get('/all/json', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const teams = await TeamService.findAll()
  res.send(teams)
})

router.get('/:id', async (req, res) => {
  const team = await TeamService.find(req.params.id)
  if(!team) res.status(404)
  res.render('data', { data: team })
})

router.get('/:id/json', async (req, res) => {
  const team = await TeamService.find(req.params.id)
  if(!team) res.status(404)
  res.send(team)
})
router.post('/', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const team = await TeamService.add(req.body)
  res.send(team)
})

router.delete('/:id', async (req, res) => {
  const team = await TeamService.del(req.params.id)
  res.send(team)
})


module.exports = router
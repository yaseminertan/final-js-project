const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const personRouter=require('./routes/person-route')
const teamRouter=require('./routes/team-route')
const issueRouter=require('./routes/issue-route')
require('./mongo-connection')

app.set('view engine','pug')
app.use(bodyParser.json())

app.use('/person',personRouter)
app.use('/team',teamRouter)
app.use('/issue',issueRouter)

app.listen(3000,()=>{
    console.log('server listening')
})
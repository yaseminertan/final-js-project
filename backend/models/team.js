const mongoose=require('mongoose')

const TeamSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    people:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Person',
        autopopulate:{
            maxDepth:1
        }
    }],
    issues:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Issue',
        autopopulate:{
            maxDepth:1
        }
    }]
})

TeamSchema.plugin(require('mongoose-autopopulate'))
const TeamModel=mongoose.model('Team',TeamSchema)

module.exports=TeamModel
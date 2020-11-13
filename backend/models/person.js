const mongoose=require('mongoose')

const PersonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    team:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Team',
        autopopulate:{
            maxDepth:1
        }
    }
})

PersonSchema.plugin(require('mongoose-autopopulate'))
const PersonModel=mongoose.model('Person',PersonSchema)

module.exports=PersonModel
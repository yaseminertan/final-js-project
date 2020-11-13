const mongoose=require('mongoose')

const IssueSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true,
        minlength:2
    },
    createdby:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Person',
        autopopulate:{
            maxDepth:1
        }
    },
    status:{
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
    },
    deadline:{
        type:Date,
    }
})

IssueSchema.plugin(require('mongoose-autopopulate'))
const IssueModel=mongoose.model('Issue',IssueSchema)

module.exports=IssueModel
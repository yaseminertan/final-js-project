<script>
export default {
    name:'IssueCard',
    props:['issue'],
     computed:{
        issueUrl(){
            return `/issue/${this.issue._id}`
        }
    }
}
</script>
<template lang="pug">
    article.card
        h4.card-title 
            p.text {{issue.text}} 
                h5 Created by: {{issue.createdby.name}}
                h5(v-if="issue.status!='created'") Team: {{issue.team.name}}
                h5(v-if="issue.status!='created'") Deadline: {{issue.deadline}}
        
</template>

<style scoped>
    .card{
        color:rgb(165, 163, 163);
        display: inline-block;
        text-align: left;
        padding: 0 15px 0 15px;
        border-radius: 10px;
        margin: 20px;
        width: 300px;
        background: white;
        font-weight: lighter;
        font-size: 14px;
    }
    .text{
        color:rgb(65, 62, 62);
        font-size: 15px;
        font-weight: lighter;
    }
    .router{
        text-decoration: none;
    }
    h5{
        margin: 10px;
    }
</style>
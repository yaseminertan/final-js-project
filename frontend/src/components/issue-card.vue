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
      
        h2.card-title 
            router-link(:to="issueUrl") {{issue.text}} 
        h4 {{issue.status}}
</template>

<style scoped>
    .card{
        display: inline-block;
        color:blue;
        text-align: left;
        padding: 20px;
        border:1px solid black;
        border-radius: 10px;
        margin: 20px;
        min-width: 200px;
    }
    h4{
        padding-left: 15px;
    }
</style>
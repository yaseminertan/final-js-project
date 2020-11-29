<script>

export default {
    name:'teamCard',
    props:['team'],
     computed:{
        teamUrl(){
            return `/team/${this.team._id}`
        }
    }
}
</script>
<template lang="pug">
    article.card
        h4.card-title 
            p.text {{team.name}} 
                h4(v-if="team.issues.length!=0") 
                    h5 Issues: 
                        h5(v-for="issue in team.issues") 
                            li {{issue.text}}
                h5(v-if="team.people.length!=0") 
                    h4 People: 
                        h5(v-for="person in team.people") {{person.name}}
                
</template>

<style scoped>
    .card{
        color:rgb(145, 141, 141);
        display: inline-block;
        text-align: left;
        padding: 0 15px 0 15px;
        border-radius: 10px;
        margin: 20px;
        width: 300px;
        background: white;
   
    }
    .text{
        color:rgb(65, 62, 62);
        font-size: 15px;
        font-weight: lighter;
        text-transform: uppercase;
    }
    .router{
        text-decoration: none;
    }
    h4, h5, h6{
        margin: 5px;
        font-weight: normal;
        letter-spacing: 0.05rem;
    }
</style>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'personCard',
    props:['person'],
     computed:{
        personUrl(){
            return `/people/${this.person._id}`
        },
        ...mapState(['teams'])
    },
    data: () => {
    return {
      change:false,
      selectedTeam: '',
    }
    },
    methods:{
        ...mapActions(['fetchTeams','changeTeam']),
        change_team(){
        let params={
            team:this.selectedTeam,
            person:this.person
        }
        console.log(params);
        this.changeTeam(params);
        location.reload();
    }
  },
  created(){
    this.fetchTeams();
    
  }
}
</script>
<template lang="pug">
    article.card
        h4.card-title {{person.name}}
        div.align-between
            h5 {{person.team.name}}
            button(style='font-size:13px;' @click='change = true') Change team
        div.modal-container
            .modal(v-if="change" @close="change = false" class='modal')
                .grid
                .row.align-between 
                    label Change Team
                    button(@click='change = false') X
                .row
                    select(v-model="selectedTeam" name="teams" id="teams" class="form-control" placeholder='Select team')
                        option(v-for="(team) in teams" :key="team._id" :value="team") {{team.name}}
                .row.align-end
                    button(@click='change_team()') Save
                
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
    
    .router{
        text-decoration: none;
    }
    h5{
        margin-top:0;
    }
 
</style>
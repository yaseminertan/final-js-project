<script>
// @ is an alias to /src
import teamCard from '@/components/team-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Teams',
  components: {
    teamCard
  },
  data: () => {
    return {
      add:false,
    }
  },
  computed:{
    ...mapState(['teams'])
  },
  methods:{
    ...mapActions(['fetchTeams','addTeam']),
    add_team(){
      let params={
        name:document.getElementById('name').value,
      }
      console.log(params);
      console.log(this);
      this.addTeam(params);
      location.reload();
    }
  },
  created(){
    this.fetchTeams();
  },
} 
</script>

<template lang='pug'>
  main
    div.modal-container
      .modal(v-if="add" @close="add = false" class='modal')
        .grid
          .row.align-between 
            label New Team
            button(@click='add = false') X
          .row
            input(id='name' placeholder='Team Name')
          .row.align-end
            button(@click='add_team()') Save

    button(@click='add=true') + Add team
    div.team
        team-card(v-for="team in teams",:team="team"  v-bind:key="team.id")
</template>

<style scoped>
.teams{
  padding: 10px 0;
}
.team{
   flex-wrap: wrap;
    display: flex;
    padding: 10px;
    margin: 20px;
    justify-content: center;
}
 
</style>

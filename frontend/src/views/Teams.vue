<script>
// @ is an alias to /src
import teamCard from '@/components/team-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Teams',
  components: {
    teamCard
  },
  computed:{
    ...mapState(['teams'])
    
  },
  methods:{
    ...mapActions(['fetchTeams'])
   
  },
  created(){
    this.fetchTeams()
  }
}
</script>

<template lang='pug'>
  main
   <h2>Teams</h2>
    div(class='teams')
        div.team
            team-card(v-for="team in teams",:team="team")
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
    border-radius: 10px;
    background: rgba(211, 211, 211, 0.6);
}
 
</style>

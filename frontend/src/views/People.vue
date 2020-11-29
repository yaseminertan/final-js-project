<script>
// @ is an alias to /src
import personCard from '@/components/person-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'people',
  components: {
    personCard
  },
   data: () => {
    return {
      add:false,
      selectedTeam: '',
    }},
  computed:{
    ...mapState(['people','teams'])
    
  },
  methods:{
    ...mapActions(['fetchPeople','fetchTeams','addPerson']),
   add_person(){
     let params={
      name:document.getElementById('name').value,
      team:this.selectedTeam,
     }
    console.log('team',this.selectedTeam);
    this.addPerson(params);
    location.reload();
   }
  },
  created(){
    this.fetchPeople();
    this.fetchTeams();
  }
}
</script>

<template lang='pug'>
  main
   div.modal-container
      .modal(v-if="add" @close="add = false" class='modal')
        .grid
          .row.align-between 
            label New Person
            button(@click='add = false') X
          .row
            input(id='name' placeholder='Name')
          .row
            select(v-model="selectedTeam" name="teams" id="teams" class="form-control" placeholder='Select team')
              option(v-for="(team) in teams" :key="team._id" :value="team._id") {{team.name}}
          .row.align-end
            button(@click='add_person()') Save

   button(@click='add=true') + Add person
   div(class='people')
      div.person
        p.title People
        personCard(v-for="person in people",:person="person"  v-bind:key="person.id")
</template>

<style scoped>

.people{
  padding: 10px 0;
}
.person{
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    background: rgba(211, 211, 211, 0.6);
}
label{
  float:left
}

</style>

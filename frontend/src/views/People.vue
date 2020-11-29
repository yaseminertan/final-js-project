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
    }},
  computed:{
    ...mapState(['people'])
    
  },
  methods:{
    ...mapActions(['fetchPeople','addPerson']),
   add_person(){
     console.log('saving');
     let list=['5faaa0c8ce82d73580839be9','5fb8d183d661a72b243c2169','5fb8d1a1d661a72b243c216a']
     let team=list[Math.floor(Math.random()*3)]
    let params={
      name:document.getElementById('name').value,
      team:team,
    }
    this.addPerson(params);
    location.reload();
   }
  },
  created(){
    this.fetchPeople()
  }
}
</script>

<template lang='pug'>
  main
   <h2>People</h2>
   button(@click='add=true') + Add person

   div.modal-container
      .modal(v-if="add" @close="add = false" class='modal')
        .grid
          .row.align-between 
            label New Person
            button(@click='add = false') X
          .row.align-between  
            input(style='width:100%' id='name' placeholder='Name')
          .row.align-end
            button(@click='add_person()') Save


   div(class='people')
      div.person
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

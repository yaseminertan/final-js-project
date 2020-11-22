<script>
// @ is an alias to /src
import personCard from '@/components/person-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'people',
  components: {
    personCard
  },
  computed:{
    ...mapState(['people'])
    
  },
  methods:{
    ...mapActions(['fetchPeople'])
   
  },
  created(){
    this.fetchPeople()
  }
}
</script>

<template lang='pug'>
  main
   <h2>People</h2>
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
 
</style>

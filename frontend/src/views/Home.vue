<script>
// @ is an alias to /src
import IssueCard from '@/components/issue-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    IssueCard
  },
  computed:{
    ...mapState(['issues'])
    
  },
  methods:{
    ...mapActions(['fetchIssues'])
   
  },
  created(){
    this.fetchIssues()
  }
}
</script>

<template lang='pug'>
  main
    section
      Issue-card(v-for="issue in issues",:issue="issue")
    
</template>

<style scoped>
section{
  padding: 40px 0;
}
 
</style>

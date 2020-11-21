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
    div(class='issues')
      div(class='issue-created')
        h3 Created 
        Issue-card(v-for="issue in issues",:issue="issue" v-if="issue.status=='created'")
      div(class='issue-created')
        h3 On Process
        Issue-card(v-for="issue in issues",:issue="issue" v-if="issue.status=='onprocess'")
      div(class='issue-created')
        h3 Finished 
        Issue-card(v-for="issue in issues",:issue="issue" v-if="issue.status=='finished'")
</template>

<style scoped>
.issues{
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
}
.issue-created{
  flex-direction: column;
  display: flex;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  background: rgba(211, 211, 211, 0.6);
}
h3{
  text-align: left;
  padding-left: 20px;
}
 
</style>

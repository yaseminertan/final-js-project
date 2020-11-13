<script>

import IssueCard from '@/components/issue-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Issue',
  components: {
    IssueCard
  },
  computed:{
    ...mapState(['issue'])
    
  },
  methods:{
    ...mapActions(['fetchIssue'])
    
  },
  created(){
    this.fetchIssue(this.$route.params.id)
  }
}
</script>

<template lang='pug'>
  section
      Issue-card(:issue="issue")
</template>

<style scoped>
section{
  padding: 40px 0;
}
 
</style>

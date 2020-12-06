<script>
// @ is an alias to /src
import IssueCard from '@/components/issue-card.vue'
import {mapState,mapActions} from 'vuex'

export default {
  name: 'Issues',
  components: {
    IssueCard
  },
   data: () => {
    return {
      add:false,
    }},
  computed:{
    ...mapState(['issues'])
    
  },
  methods:{
    ...mapActions(['fetchIssues','addIssue']),
    add_Issue(){
     console.log('saving');
     let list=['5faa9e8f26a14839b00d0ee1','5faa9fe485d76d2b185e2838','5fb8d291d661a72b243c216d',
     '5fb8d2a5d661a72b243c216e','5fb8d341d661a72b243c216f',
     '5fb8d343d661a72b243c2170','5fb8d343d661a72b243c2171']
     let person=list[Math.floor(Math.random()*7)]
    let params={
      text:document.getElementById('issueText').value,
      status:'created',
      createdby:person
    }
    this.addIssue(params);
    location.reload();
   }
  },
  created(){
    this.fetchIssues()
  }
}
</script>


<template lang='pug'>
  main
    button(@click='add=true') + Add issue
    div.modal-container
      .modal(v-if="add" @close="add = false" class='modal')
        .grid
          .row.align-between 
            label New Issue
            button(@click='add = false') X
          .row 
            textarea(wrap='true' rows=6 id='issueText' placeholder='Issue Text')
          .row.align-end
            button(@click='add_Issue()') Save

    //- p.title(style='text-align:center') Issues
    div(class='issues')
      div(class='issue-category')
        h4 TO DO
        Issue-card(v-for="issue in issues",:issue="issue"  v-bind:key="issue.id" v-if="issue.status=='created'")
      div(class='issue-category')
        h4 IN PROGRESS
        Issue-card(v-for="issue in issues",:issue="issue"  v-bind:key="issue.id" v-if="issue.status=='progress'")
      div(class='issue-category')
        h4 DONE 
        Issue-card(v-for="issue in issues",:issue="issue"  v-bind:key="issue.id" v-if="issue.status=='finished'")
</template>

<style scoped>
.issues{
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
}
.issue-category{
  flex-direction: column;
  display: flex;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  background: rgba(211, 211, 211, 0.6);
}
h4{
  color:rgb(88, 86, 86);
  text-align: left;
  padding-left: 20px;
  font-weight: bold;
        font-size: 16px;
}

</style>

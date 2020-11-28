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
    let params={
      text:document.getElementById('issueText').innerText,
      status:'created'
    }
    this.addIssue(params);
   }
  },
  created(){
    this.fetchIssues()
  }
}
</script>


<template lang='pug'>
  main
   <h1>Issues</h1>
    button(class='btn-add' @click='add=true') + Add issue
    div.modal-container
      .modal(v-if="add" @close="add = false" class='modal')
        .grid
          .row.close
            button(class='btn-close' @click='add = false') X
          .row 
            textarea(wrap='true' style='width:100%' rows=6 id='issueText')
          .row.close
            button(@click='add_Issue()') Save

    div(class='issues')
      div(class='issue-category')
        h3 TO DO
        Issue-card(v-for="issue in issues",:issue="issue"  v-bind:key="issue.id" v-if="issue.status=='created'")
      div(class='issue-category')
        h3 IN PROGRESS
        Issue-card(v-for="issue in issues",:issue="issue"  v-bind:key="issue.id" v-if="issue.status=='progress'")
      div(class='issue-category')
        h3 DONE 
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
h3{
  text-align: left;
  padding-left: 20px;
}
button{
  background: none;
  border:none;
  color:rgb(161, 159, 159);
  font-size: 16px;
  font-weight: bold;
  outline: none;
  display: flex;
  margin: 10px;
  cursor: pointer;
}
button:hover{
  color:rgb(71, 71, 71)
}
.add{
  display: flex;
  justify-content: center;
}
.modal-container{
  display: flex;
  justify-content: center;
}
.modal {
  display: block;
  width: 300px;
  margin: 50px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  color:rgb(80, 79, 79);
  font-size: 16px;
  position: fixed;
  z-index: 9998;
  transition: opacity 0.3s ease;
}
.close{
  display: flex;
  justify-content: flex-end;
}
input, textarea{
  border:none;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  padding:5px;
  margin:5px;
  resize: none;
  outline: none;
}
</style>

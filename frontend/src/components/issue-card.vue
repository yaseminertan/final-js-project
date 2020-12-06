<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'IssueCard',
    props:['issue'],
     computed:{
        issueUrl(){
            return `/issue/${this.issue._id}`
        },
         ...mapState(['teams'])
    },
    data: () => {
        return {
            change:false,
            selectedStatus: '',
            selectedTeam: '',
            deadline:'',
        }
     },
     methods:{
        ...mapActions(['changeStatus','fetchTeams']),
        change_status(){
        let params={
            status:this.selectedStatus,
            issue:this.issue,
            team:this.selectedTeam,
            deadline:this.deadline
        }
        this.changeStatus(params);
        location.reload();
    },
    created(){
        this.fetchTeams();
    }
  },
}
</script>
<template lang="pug">
    article.card
        h4.card-title 
            p.text {{issue.text}} 
                h5 Created by: {{issue.createdby.name}}
                h5(v-if="issue.status!='created'") Team: {{issue.team.name}}
                h5(v-if="issue.status!='created'") Deadline: {{issue.deadline}}
        button.button-change-status(@click='change = true') Change status

        div.modal-container
        .modal(v-if="change" @close="change = false" class='modal')
            .grid
            .row.align-between 
                label Change status
                button(@click='change = false') X
            .row
                select(v-model="selectedStatus" name="status" id="status" class="form-control" placeholder='Select status')
                    option(value="created") created
                    option(value="progress") in progress 
                    option(value="finished") finished 
            .row
                select(v-model="selectedTeam" name="teams" id="teams" class="form-control" placeholder='Select team')
                    option(v-for="(team) in teams" :key="team._id" :value="team") {{team.name}}
            .row
                input(placeholder='Deadline' v-model="deadline")
            .row.align-end
                button(@click='change_status()') Save
</template>

<style scoped>
    .card{
        color:rgb(165, 163, 163);
        text-align: left;
        padding: 0 15px 0 15px;
        border-radius: 10px;
        margin: 20px;
        width: 300px;
        background: white;
        font-weight: lighter;
        font-size: 14px;
        display: flex;
        flex-direction: column;
    }
    .text{
        color:rgb(65, 62, 62);
        font-size: 15px;
        font-weight: lighter;
    }
    .button-change-status{
        font-size:14px;
        margin-bottom: 20px;
        align-self: flex-end;
    }
    .router{
        text-decoration: none;
    }
    h5{
        margin: 10px;
    }
</style>
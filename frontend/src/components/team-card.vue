<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'teamCard',
    props:['team'],
     computed:{
        teamUrl(){
            return `/team/${this.team._id}`
        },
        ...mapState(['people'])
    },
     data: () => {
        return {
        change:false,
        selectedPerson: '',
        }
     },
     methods:{
        ...mapActions(['fetchPeople','changeTeam']),
        add_person(){
        let params={
            person:this.selectedPerson,
            team:this.team
        }
        this.changeTeam(params);
         location.reload();
    }
  },
  created(){
    this.fetchPeople();
  }
}
</script>
<template lang="pug">
    article.card
        h4.card-index 
            p.text {{team.name}} 
            h4(v-if="team.issues") 
                h5 Issues: 
                    h5(v-for="issue in team.issues") 
                        li {{issue.text}}
            h5(v-if="team.people") 
                h4 People: 
                    h5(v-for="person in team.people") {{person.name}}
        button.button-add-person(@click='change = true') + Add person

        div.modal-container
        .modal(v-if="change" @close="change = false" class='modal')
            .grid
            .row.align-between 
                label Add Person
                button(@click='change = false') X
            .row
                select(v-model="selectedPerson" name="people" id="people" class="form-control" placeholder='Select person')
                    option(v-for="(person) in people" :key="person._id" :value="person") {{person.name}}
            .row.align-end
                button(@click='add_person()') Save
                
</template>

<style scoped>
    .card{
        color:rgb(145, 141, 141);
        text-align: left;
        padding: 0 15px 0 15px;
        border-radius: 10px;
        margin: 20px;
        width: 300px;
        background: white;
        display: flex;
        flex-direction: column;
    }
    .card-index{
        height:100%;
    }
    .text{
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
    }
    .router{
        text-decoration: none;
    }
    .button-add-person{
        font-size:12px;
        margin-bottom: 20px;
        align-self: flex-end;
    }
    h4, h5, h6{
        margin: 5px;
        font-weight: normal;
        letter-spacing: 0.05rem;
    }
</style>
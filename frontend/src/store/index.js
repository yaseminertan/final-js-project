import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // counter:0,
    issue:{},
    issues:[],
    teams:[],
    people:[],
  },
  mutations: {
    setIssue(state,data){
      state.issue=data
    },
    setIssues(state,data){
      state.issues=data
    },
    setTeams(state,data){
      state.teams=data
    },
    setPeople(state,data){
      state.people=data
    },
  
  },
  actions: {
    
    async fetchIssue({commit}, id){
      const result=await axios.get(`http://localhost:3000/issue/${id}/json`)
      commit('setIssue',result.data)
    },
    async fetchIssues({commit}){
      const result=await axios.get('http://localhost:3000/issue/all/json')
      commit('setIssues',result.data)
    },
    async addIssue({commit},params){
      const result=await axios.post('http://localhost:3000/issue',params)
      commit('setIssue',result.data)
    },
    async addPerson({commit},params){
      const result=await axios.post('http://localhost:3000/person',params)
      commit('setPeople',result.data)
    },
    async fetchTeams({commit}){
      const result=await axios.get('http://localhost:3000/team/all/json')
      commit('setTeams',result.data)
    },
    async fetchPeople({commit}){
      const result=await axios.get('http://localhost:3000/person/all/json')
      commit('setPeople',result.data)
    },
  },
  modules: {
  }
})

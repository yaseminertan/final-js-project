import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // counter:0,
    issue:{},
    issues:[]
  },
  mutations: {
    setIssue(state,data){
        state.issue=data
      },
      setIssues(state,data){
        state.issues=data
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
   
  },
  modules: {
  }
})

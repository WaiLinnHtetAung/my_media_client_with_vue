import { createStore } from 'vuex'

export default createStore({
  state: {
    userData : [],
    userToken : '',
  },
  getters: {
    getToken : state => state.userToken,
    getUserData : state => state.userData,
  },
  mutations: {
  },
  actions: {
    setToken : ({state}, value) => state.userToken = value,
    setUserData : ({state}, value) => state.userData = value,
  },
  modules: {
  }
})

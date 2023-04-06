import { createStore } from 'vuex'

export default createStore({
  state: {
    userData : [],
    userToken : '',
    userStatus : false,
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
    userStatus: ({state}, value) => state.userStatus = value,
  },
  modules: {
  }
})

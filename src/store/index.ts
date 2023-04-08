import { createStore } from 'vuex'

export default createStore({
  state: {
    userData : [],
    userToken : '',
    userStatus : false,
    posts : [],
  },
  getters: {
    getToken : state => state.userToken,
    getUserData : state => state.userData,
    getAllPosts : state => state.posts,
  },
  mutations: {
  },
  actions: {
    setToken : ({state}, value) => state.userToken = value,
    setUserData : ({state}, value) => state.userData = value,
    userStatus: ({state}, value) => state.userStatus = value,
    postByCategory : ({state},value) => state.posts = value,
  },
  modules: {
  }
})

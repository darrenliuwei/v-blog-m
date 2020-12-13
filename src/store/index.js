import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 文章内容
    article: {}
  },
  mutations: {
    // 给文章内容赋值
    SET_ARTICLE(state, payload) {
      state.article = payload
    }
  },
  actions: {},
  modules: {}
})

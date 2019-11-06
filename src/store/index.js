import Vue from 'vue'
import Vuex from 'vuex'
import booklist from "./cart"
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    booklist
  }
})

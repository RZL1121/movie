import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './home'

import Audio from './audio'
import Mine from './mine'
import Bookdetail from './bookdetail'
import Linkbook from './linkbook'
Vue.use(VueRouter)



export default new VueRouter({
  routes :[
    {path:'/',redirect:"home"},
    Home,Audio,Mine,Bookdetail,Linkbook
 ]
})


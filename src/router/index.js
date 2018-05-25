import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import start from '@/components/start'
import rules from '@/components/rules'
import rankingList from '@/components/rankingList'
import card from '@/components/card'
import reward from '@/components/reward'

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'localhost:3000')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/start',
      name:'start',
      component:start
    },
    {
      path:'/rules',
      name:'rules',
      component:rules
    },
    {
      path:'/rankingList',
      name:'rankingList',
      component:rankingList
    },
    {
      path:'/card',
      name:'card',
      component:card
    },
    {
      path:'/reward',
      name:'reward',
      component:reward
    }
  ]
})

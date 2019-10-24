/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import VueSession from 'vue-session'
import boardListPage from '@/components/boardListPage'
import boardWritePage from '@/components/boardWritePage'
import boardDetailPage from '@/components/boardDetailPage'
import memberLoginPage from '@/components/memberLoginPage'
import memberJoinPage from '@/components/memberJoinPage'
import memberDetailPage from '@/components/memberDetailPage'
import chatPage from '@/components/chatPage'


Vue.use(VueSession)
Vue.use(Router)

export default new Router({
  //mode : 'history',
  routes: [
    {
      path: '/',
      name: 'boardListPage',
      component: boardListPage
    },    
    {
      path: '/callback',
      name: 'boardListPagecallback',
      component: boardListPage
    },    
    {
      path: '/boardWritePage/:id',
      name: 'boardWritePage',
      component: boardWritePage
    },
    {
      path: '/boardDetailPage/:id',
      name: 'boardDetailPage',
      component: boardDetailPage
    },
    {
      path: '/memberLoginPage',
      name: 'memberLoginPage',
      component: memberLoginPage
    },
    {
      path: '/memberJoinPage',
      name: 'memberJoinPage',
      component: memberJoinPage
    },
    {
      path: '/memberDetailPage',
      name: 'memberDetailPage',
      component: memberDetailPage
    },
    {
      path: '/chatPage',
      name: 'chatPage',
      component: chatPage
    }
  ]
})


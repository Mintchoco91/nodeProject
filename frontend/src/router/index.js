/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import boardListPage from '@/components/boardListPage'
import boardWritePage from '@/components/boardWritePage'
import boardDetailPage from '@/components/boardDetailPage'


Vue.use(Router)

export default new Router({
  //mode : 'history',
  routes: [{
      path: '/',
      name: 'boardListPage',
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
    }
  ]
})


/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import DetailMoviePage from '@/components/DetailMoviePage'
import BoardListPage from '@/components/BoardListPage'


Vue.use(Router)

export default new Router({
  //mode : 'history',
  routes: [{
      path: '/',
      name: 'BoardList',
      component: BoardListPage
    },
    {
      path: '/:id',
      name: 'detailmovie',
      component: DetailMoviePage
    }
  ]
})


/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import MovieListPage from '@/components/MovieListPage'
import DetailMoviePage from '@/components/DetailMoviePage'

Vue.use(Router)

export default new Router({
  //mode : 'history',
  routes: [{
      path: '/',
      name: 'movielist',
      component: MovieListPage
    },
    {
      path: '/:id',
      name: 'detailmovie',
      component: DetailMoviePage
    }
  ]
})


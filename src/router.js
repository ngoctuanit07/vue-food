import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue');
const Thucdon = () => import('@/views/Thucdon.vue');
const Thongtindon = () => import('@/views/Thongtindon.vue');
const Tracuudon = () => import('@/views/Tracuudon.vue');
const Hoanthanhdon = () => import('@/views/Hoanthanhdon.vue');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thucdon',
      name: 'Thucdon',
      component: Thucdon
    },
    {
      path: '/thongtindon',
      name: 'Thongtindon',
      component: Thongtindon
    },
    {
      path: '/tracuudon',
      name: 'Tracuudon',
      component: Tracuudon
    },
    {
      path: '/hoanthanhdon',
      name: 'Hoanthanhdon',
      component: Hoanthanhdon
    },
  ],
  mode: 'history'
})

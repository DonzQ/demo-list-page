// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Mock from 'mockjs'
import routes from './router/router'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  base: '/',
  routes
})

new Vue({
  router,
  Mock
}).$mount('#app')

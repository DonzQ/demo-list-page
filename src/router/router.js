const Home = resolve => require(['../components/site/Home'], resolve)
const VueDemo = resolve => require(['../components/site/VueDemo'], resolve)

const router = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/vue-demo', component: VueDemo }
]

export default router

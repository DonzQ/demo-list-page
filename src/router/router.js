const Index = resolve => require(['../components/site/Index'], resolve)
const About = resolve => require(['../components/site/About'], resolve)

const router = [
  { path: '', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/about', component: About }
]

export default router

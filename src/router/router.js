const Index = resolve => require(['../components/site/Index'], resolve)
const About = resolve => require(['../components/site/About'], resolve)
const Content = resolve => require(['../components/site/Content'], resolve)
const Detail = resolve => require(['../components/site/Detail'], resolve)

const router = [
  { path: '', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/about', component: About },
  { path: '/content', component: Content },
  { path: '/detail/:id', component: Detail }
]

export default router

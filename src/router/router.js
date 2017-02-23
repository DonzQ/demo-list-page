const Index = resolve => require(['../components/site/Index'], resolve)

const router = [
  { path: '', redirect: '/index' },
  { path: '/index', component: Index }
]

export default router

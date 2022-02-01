

export const demosRoutes = [
  {
    path: '/demos/search/dashboard',
    component: () => import('@/views/demos/search/Dashboard.vue')
  },
  {
    path: '/demos/search/scims',
    component: () => import('@/views/demos/search/Scims.vue'),
    props: true
  },
  {
    path: '/demos/search/select-rep-example',
    component: () => import('@/views/demos/search/SelectRep.vue'),
    props: true
  },
  {
    path: '/demos/search/customer-summary',
    component: () => import('@/views/demos/search/Customer-Summary.vue'),
    props: true
  },
  
  {
    path: '/help',
    component: () => import('@/views/demos/help/Help.vue')
  }
]
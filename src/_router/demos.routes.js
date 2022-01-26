

export const demosRoutes = [
  {
    path: '/demos/dashboard-example',
    component: () => import('@/views/demos/Dashboard.vue')
  },
  {
    path: '/demos/select-rep-example',
    component: () => import('@/views/demos/SelectRep.vue'),
    props: true
  },
  {
    path: '/help',
    component: () => import('@/views/demos/help/Help.vue')
  }
]


export const demosRoutes = [
  {
    path: '/demos/search/dashboard',
    component: () => import('@/views/demos/search/Dashboard.vue')
  },
  {
    path: '/demos/search/scims',
    component: () => import('@/views/demos/search/Scims.vue'),
  },
  {
    path: '/demos/search/select-rep-example',
    component: () => import('@/views/demos/search/SelectRep.vue'),
  },
  {
    path: '/demos/search/customer-summary',
    component: () => import('@/views/demos/search/Customer-Summary.vue'),
  },
  {
    path: '/demos/search/payment-results',
    component: () => import('@/views/demos/search/Payment-Search-Results.vue'),
  },
  {
    path: '/demos/search/irs-forms-results',
    component: () => import('@/views/demos/search/Irs-Forms-Search-Results.vue'),
  },
  {
    path: '/demos/search/payment-details/:id',
    component: () => import('@/views/demos/search/Payment-Details.vue'),
    props: true
  },
  {
    path: '/demos/search/irs-forms-details/:id',
    component: () => import('@/views/demos/search/Irs-Forms-Details.vue'),
    props: true
  },
  
  {
    path: '/help',
    component: () => import('@/views/demos/help/Help.vue')
  }
]
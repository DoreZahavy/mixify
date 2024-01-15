
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MixtapeIndex.vue') },
      { path: 'search', component: () => import('pages/SearchPage.vue') },
      { path: 'mixtape/:id', component: () => import('pages/MixtapeDetails.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login',  component: () => import('pages/LoginPage.vue') },
      { path: 'signup',  component: () => import('pages/SignupPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

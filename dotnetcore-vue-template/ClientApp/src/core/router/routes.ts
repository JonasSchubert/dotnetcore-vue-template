export const routes = [
  {
    path: '/',
    name: 'Home',
    component: (): any => import('@/libs/core/views/Home.vue'),
    meta: {
      allowLocaleStorage: true,
      icon: 'mdi-home',
      inNavigationBar: true,
      text: 'message.home'
    }
  },
  {
    path: '/examples',
    name: 'Examples',
    component: (): any => import('@/examples/views/Examples.vue'),
    meta: {
      allowLocaleStorage: true,
      icon: 'mdi-apps',
      inNavigationBar: true,
      text: 'message.example'
    }
  },
  {
    path: '*',
    name: '404',
    component: (): any => import('@/libs/core/views/NotFound.vue'),
    meta: {
      allowLocaleStorage: false,
      inNavigationBar: false
    }
  }
];

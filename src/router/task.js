export default {
  path: '/tasks',
  name: 'tasks',
  component: () => import('../components/task/Layout'),
  redirect: { name: 'TaskList' },
  children: [
    {
      name: 'TaskList',
      path: '',
      component: () => import('../views/task/List')
    },
    {
      name: 'TaskNew',
      path: 'new',
      component: () => import('../views/task/New')
    },
    {
      name: 'TaskUpdate',
      path: ':id/edit',
      component: () => import('../views/task/Update')
    },
    {
      name: 'TaskShow',
      path: ':id',
      component: () => import('../views/task/Show')
    }
  ]
};

import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/components/Auth';
import AuthSuccess from '@/components/AuthSuccess';
import Dashboard from '@/components/Dashbaord';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/login',
      component: Auth
    },
    {
      path: '/login/success',
      component: AuthSuccess
    }
  ]
});

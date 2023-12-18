/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Router from 'vue-router'
import auth from './store/modules/td';

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Perfil from './views/Perfil'
import store from './store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  data: () => {
    return {
      isloggedin: false
    }
  },
  routes: [
    {path: '/',name: 'Home',component: Home},
    { path: '/:id/chat', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', component: Register },
    { path: '/perfil', component: Perfil }
  ]
})

/*router.beforeEach(async(to, from, next)=>{ 
   if ( to.name !== 'Login' && !store.getters['auth/isAuthenticated'] ){ 
    try { await store.dispatch('ActionCheckToken')

    next({name: to.name})
  } catch (err) {
    next({name: 'Login'})
  }
} else {
  if ( to.name === 'Login' && store.getters['auth/isAuthenticated'] ){
    next({ name: 'Home'})
  } else {
    next()
  }
}
})
*/
export default router;

/**
 * router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Verifica se o usuário tem o token
    const token = store.state.token;
    if (token) {
      // Usuário está logado, pode prosseguir
      next();
    } else {
      // Usuário não está logado, redireciona para página de login
      next('/login');
    }
  } else {
    // Página não requer autenticação, pode prosseguir
    next();
  }
});
 */
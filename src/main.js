import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//import routes
import taskRoutes from './router/task';

// Add the modules in the store
import task from './store/modules/task/';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  // ...
  routes: [
    ...taskRoutes,
  ]
});

export const store = new Vuex.Store({
  // ...
  modules: {
    task
  }
});


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

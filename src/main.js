import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import CatSearch from './components/cats.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/cats', component: CatSearch },
  { path: '/Home', component: Home }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

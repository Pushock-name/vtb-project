import Vue from 'vue'
import App from './App.vue'
import VueYandexMetrika from 'vue-yandex-metrika'  

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


Vue.use(VueYandexMetrika, {
    id: 92639836,
    env: "production",
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
})


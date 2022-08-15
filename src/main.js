import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
/* import {Counter} from "./mixin"; */


const Vue = createApp(App);

/* mixins global
Vue.mixin(Counter);
 */
Vue.use(router).mount('#app');

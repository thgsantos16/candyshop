import Vue from 'vue';
import vueHeadful from 'vue-headful';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vueMoment from 'vue-moment';
import vueCustomScrollbar from 'vue-custom-scrollbar';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import components from util folder
import CommonForm from './utils/CommonForm.vue';
import CommonField from './utils/CommonField.vue';
import CommonTitle from './utils/CommonTitle.vue';
import CustomTable from './utils/CustomTable.vue';
import TreeElement from './utils/TreeElement.vue';
import ApiGET from './api';

Vue.component('api-get', ApiGET);
Vue.component('common-title', CommonTitle);
Vue.component('common-form', CommonForm);
Vue.component('common-field', CommonField);
Vue.component('custom-table', CustomTable);
Vue.component('tree-element', TreeElement);
Vue.component('vue-headful', vueHeadful);
Vue.component('vue-custom-scrollbar', vueCustomScrollbar);

Vue.component('fa', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(vueMoment);

Vue.config.productionTip = false;

function isAuthenticated() {
  return store.getters.USER !== null;
}

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated()) next({ name: 'Login' });
  else next();
});

new Vue({
  router,
  store,
  components: {
    TreeElement,
  },
  render: (h) => h(App),
}).$mount('#app');

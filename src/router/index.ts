import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Page404 from '../views/Page404.vue';

// Project pages
import Projects from '../views/Projects.vue';
import AddProjects from '../views/projects/Add.vue';

// Tower pages
import Towers from '../views/Towers.vue';

// Model pages
import Models from '../views/Models.vue';
import SingleModels from '../views/models/Single.vue';

// Layout Pages
import Layouts from '../views/Layouts.vue';
import Contents from '../views/Contents.vue';
import Configurations from '../views/Configurations.vue';
import Slots from '../views/Slots.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects/add',
    name: 'Add Project',
    component: AddProjects,
  },
  {
    path: '/towers',
    name: 'Towers',
    component: Towers,
  },
  {
    path: '/models',
    name: 'Models',
    component: Models,
  },
  {
    path: '/models/:id',
    name: 'Model Layout',
    component: SingleModels,
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: Layouts,
  },
  {
    path: '/slots',
    name: 'Slots',
    component: Slots,
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents,
  },
  {
    path: '/configurations',
    name: 'Configurations',
    component: Configurations,
  },
  {
    path: '/*',
    name: 'Page404',
    component: Page404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

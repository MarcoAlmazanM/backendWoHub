import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Home.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "LogIn" */ '../views/LogIn.vue')
  },

  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "Resume" */ '../views/Resume.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Home.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/personal',
    name: 'PersonalScreen',
    component: ()=> import(/* webpackChunkName: "PersonalScreen" */ '../views/PersonalScreen.vue')
  },
  {
    path: '/careerawards',
    name: 'CareerAwardsView',
    component: ()=> import(/* webpackChunkName: "CareerAwardsView" */ '../views/CareerAwardsView.vue')
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: ()=> import(/* webpackChunkName: "Workouts" */ '../views/WorkoutsScreen.vue')
  },
  {
    path: '/allwork',
    name: 'AllWork',
    component: ()=> import(/* webpackChunkName: "AllWork" */ '../views/AllWorkScreen.vue')
  },
  {
    path: '/editwork',
    name: 'EditWork',
    component: ()=> import(/* webpackChunkName: "Workouts" */ '../views/EditWorkScreen.vue')
  },
  {
    path: '/newwork',
    name: 'NewWork',
    component: ()=> import(/* webpackChunkName: "Workouts" */ '../views/NewWorkScreen.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        next();
      }else{
        next({
          path: '/login',
        });
      }
    });

  } else {
    next();
  }
});

export default router;

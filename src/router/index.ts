import Vue from 'vue';
import VueRouter from 'vue-router';

// import User from '../views/User.vue';
// import Find from '../views/Find.vue';
// import FindList from '../views/FindList.vue';
// import FindRadio from '../views/FindRadio.vue';
// import FindRank from '../views/FindRank.vue';
// import FindSinger from '../views/FindSinger.vue';
// import FindNew from '../views/FindNew.vue';
// import Fm from '../views/Fm.vue';
// import Video from '../views/Video.vue';
// import VideoMv from '../views/VideoMv.vue';
// import Friend from '../views/Friend.vue';
// import Cloud from '../views/Cloud.vue';
// import Collection from '../views/Collection.vue';
// import Musiclist from '../views/Musiclist.vue';
// import Search from '../views/Search.vue';
// import Setting from '../views/Setting.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/find',
    name: 'find',
    component: () => import(/* webpackChunkName: "find" */ '../views/Find.vue')
  },
  {
    path: '/find/list',
    name: 'find',
    component: () => import(/* webpackChunkName: "findlist" */ '../views/FindList.vue')
  },
  {
    path: '/find/radio',
    name: 'find',
    component: () => import(/* webpackChunkName: "findradio" */ '../views/FindRadio.vue')
  },
  {
    path: '/find/rank',
    name: 'find',
    component: () => import(/* webpackChunkName: "findrank" */ '../views/FindRank.vue')
  },
  {
    path: '/find/singer',
    name: 'find',
    component: () => import(/* webpackChunkName: "findsinger" */ '../views/FindSinger.vue')
  },
  {
    path: '/find/new',
    name: 'find',
    component: () => import(/* webpackChunkName: "find" */ '../views/FindNew.vue')
  },
  {
    path: '/fm',
    name: 'fm',
    component: () => import(/* webpackChunkName: "fm" */ '../views/Fm.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
  },
  {
    path: '/video/mv',
    name: 'video',
    component: () => import(/* webpackChunkName: "videomv" */ '../views/VideoMv.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import(/* webpackChunkName: "friend" */ '../views/Friend.vue')
  },
  {
    path: '/cloud',
    name: 'cloud',
    component: () => import(/* webpackChunkName: "cloud" */ '../views/Cloud.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import(/* webpackChunkName: "collection" */ '../views/Collection.vue')
  },
  {
    path: '/musiclist/:id',
    name: 'musiclist',
    component: () => import(/* webpackChunkName: "musiclist" */ '../views/Musiclist.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue')
  }
]

const router = new VueRouter({
  routes
});

export default router;

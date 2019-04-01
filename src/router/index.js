import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router); /*引入路由*/

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },

  //constantRouterMap（不需要判断权限的路由） 404页面一定要最后加载
  { path: '/404', component: () => import('@/views/404'), hidden: true },



  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    //hidden: true,
    meta:{
      title:'首页',
      icon:'index',
      breadcrumb:false,
    },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/per-infor',
    component: Layout,
    redirect: '/per-infor',
    name: 'Perinfor',
    hidden: true,
    meta:{
      title:'个人信息',
      icon:'index',
    },
    children: [{
      path: 'per-infor',
      component: () => import('@/views/per-infor/index')
    }]
  },

  {
    path: '/enterprise',
    component: Layout,
    redirect: '/enterprise/enter-list',
    name: 'Enterprise',
    meta: {
      title: '企业资料管理',
      icon: 'enter-data'
    },
    children: [
      {
        path: 'enter-list',
        name: 'Enterlist',
        component: () => import('@/views/enter-list'),
        meta: { title: '企业资料列表', icon: 'enter-data' }
      },
      {
        path: 'enter-table',
        name: 'Entertable',
        component: () => import('@/views/enter-table'),
        meta: { title: '录入企业资料', icon: 'enter-mod' }
      }
    ]
  },

  {
    path: '/contract',
    component: Layout,
    redirect: '/contract/contract-list',
    name: 'Contract',
    meta: { title: '合同管理', icon: 'contract' },
    /*alwaysShow:true,针对当子路由只有一个时，它会变成根路由部分，若想显示根路由，就要申明alwaysShow:true*/
    children: [
      {
        path: 'contract-list',
        name: 'ContractList',
        component: () => import('@/views/contract-list/index'),
        meta: { title: '查看合同',icon: 'contract' }//icon: 'contract'
      },
       {
         path: 'contract-table',
         name: 'ContractTable',
         component: () => import('@/views/contract-table/index'),
         meta: { title: '合同登记',icon: 'contract-mod' }//icon: 'contract-mod'
       }
    ]
  },


  {
    path: '/business',
    component: Layout,
    redirect: '/business/bus-inf',
    name: 'Business',
    meta: {
      title: '业务管理',
      icon: 'business'
    },
    children: [
      {
        path: 'bus-inf',
        component: () => import('@/views/business/bus-inf/index'), // Parent router-view
        name: 'Businf',
        alwaysShow: true,
        meta: {
          title: '业务通知',
          icon:"business-inf"
        },
        children: [
          /*{
            path: 'bus-op',
            component: () => import('@/views/business/bus-inf/bus-op'),
            name: 'Busop',
            meta: { title: '录入业务通知' }
          },*/
          {
            path: 'bus-list',
            component: () => import('@/views/business/bus-inf/bus-list'),
            name: 'Buslist',
            meta: { title: '查看通知列表' },
          },
        ]
      },
     /* {
        path: 'bus-change',
        component: () => import('@/views/business/bus-change/index'),
        name: 'Buschange',
        meta: {
          title: '业务变更',
          icon:'business-change'
        },
        children:[
          {
            path: 'bus-pay',
            component: () => import('@/views/business/bus-change/bus-pay'),
            name: 'Buspay',
            meta: { title: '项目收款变更' }
          },
          {
            path: 'bus-his',
            component: () => import('@/views/business/bus-change/bus-his'),
            name: 'Bushis',
            meta: { title: '查看变更历史' }

          },
        ]
      }*/
    ]
  },
  {
    path: '/collection',
    component: Layout,
    redirect: '/collection/collect-list',
    name: 'Collection',
    meta: { title: '收款登记管理', icon: 'collection-reg' },
    children: [
      {
        path: 'collect-list',
        name: 'Collectlist',
        component: () => import('@/views/collect-list/index'),
        meta: { title: '查看收款登记列表' }
      },
      {
        path: 'collect-reg',
        name: 'Collectreg',
        component: () => import('@/views/collect-reg/index'),
        meta: { title: '录入收款登记表' }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/group',
    name: 'Permission',
    meta: {
      title: '基础数据管理',
      icon: 'example'
    },
    children: [
      {
        path: 'group',
        name: 'Group',
        component: () => import('@/views/permission/group'),
        meta: { title: '部门管理' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/permission/role'),
        meta: { title: '角色管理' }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/permission/user'),
        meta: { title: '用户管理' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com/',
        meta: { title: '不懂就查', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

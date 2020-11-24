import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import haha from '@/components/haha'
import work from '@/components/work'
import top from '@/components/top'
import bottom from '@/components/bottom'
import page from '@/views/page'
import login from '@/views/login'
import zhuce from '@/views/zhuce'
import data from '@/views/data'
import count from '@/views/count'
import fenye from '@/views/fenye'
const User = {
  template: `<div><h1>我是父组件</h1><router-view/></div>`
}
const oneSon = {
  template: `<div><h2><font>孩子1</font></h2></div>`
}
const twoSon = {
  template: `<div><h2><font>孩子2</font></h2></div>`
}
const NotFount = {
  template: `<div> <h1> <i>404,您访问的页面不存在</i> </h1>  </div>`
}
const oneeSon = {
  template: `<div><h2><font>孩子3</font></h2></div>`
}
Vue.use(Router)

let router = new Router({
  mode: "history",
  linkExactActiveClass: "nav",
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  }, {
    path: '/haha',
    name: 'haha',
    component: haha
  },
  {
    path: '/work/:id',
    name: 'work',
    component: work
  },
  {
    path: '/page/',
    name: 'page',
    component: page
  }, {
    path: '/login/',
    name: 'login',
    component: login
  }, {
    path: '/zhuce/',
    name: 'zhuce',
    component: zhuce
  }, {
    path: '/data/',
    name: 'data',
    component: data
  }, {
    path: '/count/',
    name: 'count',
    component: count
  }, {
    path: '/fenye/',
    name: 'fenye',
    component: fenye
  },
  {
    path: '/user/:id',
    name: "user",
    component: User,
    children: [{
      path: "oneson",
      name: "oneson",
      component: oneSon,
      chiidren: [{
        path: "oneeson",
        name: "oneeson",
        component: oneeSon
      }
      ]
    },
    {
      path: "twoson",
      name: "twoson",
      component: twoSon
    }
    ]
  },
  {
    path: "*",
    redirect: (to) => {
      console.log(to);
      if (to.path === "/a") {
        return '/haha'
      } else if (to.path === "/b") {
        return "/work/1"
      } else {
        return '/'
      }
    }
  }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('userToken');
    if (token == null || token == "") {
      next("/login")
    } else {
      next()
    }
  }
})
export default router

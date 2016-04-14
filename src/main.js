// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.
require('./style.css')
var Vue= require('vue');
Vue.config.debug = true;
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var Foo = Vue.extend({
  template: require('../src/config.html')
})

var Bar = Vue.extend({
  template: require('../src/a.html')
})

var root = Vue.extend({
  template : require('../src/root.html')
})
var route = Vue.extend({
  template : require('../src/routes.html')
})
var spring = Vue.extend({
  template : require('../src/spring.html')
})
var ac = Vue.extend({
  template : require('../src/ac.html')
})
var other = Vue.extend({
  template : require('../src/other.html')
})
var special = Vue.extend({
  template : require('../src/special.html')
})
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({
})

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
  hashbang:false,
  transitionOnLoad:true
})
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/':{
    component:root
  },
  
  '/config': {

    component: Foo
  },
  '/start': {
    component: Bar
  },
  '/routes': {
    component: route
  },
  '/spring': {
    component: spring
  },
  '/other': {
    component: other
  },
  '/special': {
    component: special
  },
  '/ac': {
    component: ac
  },
})


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')

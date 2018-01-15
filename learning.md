#### 1.static和assets的差别
> assets => bundle(编译到一起) 放的是组件资源，播放按钮
static => resouces(远程URL请求) 放的是非组件资源，比如reset

#### 2.既然vuex可以直接挂载到vue的原型上为什么还需要vue-axios
> 解答地址：https://segmentfault.com/q/1010000010425538/a-1020000010426256
简单来说：直接挂载原型，太粗暴了！！！   你写一个原型，我写一个，乱套了。
(首先是按照Vue的插件文档来写的，直接绑在原型链上不是不可以，如果像楼主你这样注册一个$http，和项目其他成员协作的时候就必须注明你注册的变量名称，而使用vue-axios大家就没有歧义了。)
说白了，使用vue-axios更多是为了符合规范，并且方便协作吧。

#### 3.前端开发时通过 Vue-cli 中提供的 proxyTable 进行代理,由此可跨域调用Node编写的API。 (此处这个东西还待学习)
```
'/api': {
  target: 'http://localhost:8088/api/',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}
```
> 它是如何解决跨域问题的呢？其实在'/api'的参数中有一个changeOrigin参数，接受一个布尔值，
如果它设置为true，那么本地会虚拟一个服务端接收你的请求并代你发送请求，这样就不会有跨域
问题了，当然这**只适用于开发环境**.
> vue-cli的这个设置来自于其使用的插件http-proxy-middleware
github：https://github.com/chimurai/http-proxy-middleware

#### 4.同步异步再学习
> 同步的情况下,是由处理消息者自己去等待消息是否被触发,而异步的情况下是由触发机制来通知处理消息者

#### 5.vue-router的使用
> 声明式VS编程式 `<router-link :to="..."></router-link>` 和 `router.push(...)`
作用其实是一样的
router.push('home') === <router-link to="/home"></router-link>
router.push({ name: 'user', params: { userId: 123 }})
===
<router-link :to="{ name: 'user', params: { userId: 123 } }">User</router-link>

#### 6.router.replace(location, onComplete?, onAbout?)
> 跟router.push很像，唯一的不同时，它不会向history添加新纪录，而是跟方法名一样，替换掉当前的history目录。
router.go(n)  在history记录中向前或者向后退多少步，类似 window.history.go(n).
命名路由作用依旧是相同的

#### 7.路由元信息:meta字段
> 可以用来跟踪检测路由，打印路由
```
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});
```
下方的官网示例难道说可以用来检测用户是否登录？不错！
正好能够解决最近业务上的问题：关于微信刚开始没有openId如何让用户注册显示页的问题。
当时的解决方案一：
  微信一开始进入的时候跳进一个空页里面。
  1.调用接口获取openId和userId。
  2.之后根据await返回的 userId 的有无进行判断。
  3.若是有的话，则跳转至我们的业务页面。
      若是没有，则跳转至我们的注册页面。
现在看到这个之后的解决方案二：
  1.根据每一个路由，因为所有的业务页面都是需要权限的，所以我们在  beforeEach里面判断权限！！！！！！赞！！！！！
```
// https://router.vuejs.org/zh-cn/advanced/meta.html
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```
#### 8.vue-router里面绑定click
> `@click.native = functionName` will be OK.

#### 9.究极深坑
> webpack那群人天天更新，真是太敬业了，可坑了小白。
以前本来是直接可以用手机开的。现在在去 server/index.js下改dev为 0.0.0.0
> https://www.cnblogs.com/wangyanhua95/p/7954019.html

#### 10.惊天神坑
> mongoose没有设定集合的名字，默认会给你加 s!!!加s!!!加s!!! shit就变shits了懂吗！！
> schema和model本身名字和  集合名字只有半毛钱关系。切记。
> 需要 schema.set 或者 在 model 生成的时候命名
> mongoose主要分为三部分：schema、model、entity 部分，三者的关系是：
schema生成model，model生成entity

#### 11.PC端的 `embed` 在移动端不能播放,  What FUCK!!!!
> 感谢知乎大佬
> https://www.zhihu.com/question/48306446/answer/139251608
另外，要注意了。这个 iframe 的宽高只能用  px 和 百分比表示，rem 无效
pixels
percent
！！！！！！！！！！听说 H5 可以用 video 和 source，不过没时间了，先用iframe
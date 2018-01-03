#### 1.static和assets的差别
> assets => bundle(编译到一起) 放的是组件资源，播放按钮
static => resouces(远程URL请求) 放的是非组件资源，比如reset

#### 2.既然vuex可以直接挂载到vue的原型上为什么还需要vue-axios
> 解答地址：https://segmentfault.com/q/1010000010425538/a-1020000010426256
简单来说：直接挂载原型，太粗暴了！！！   你写一个原型，我写一个，乱套了。
(首先是按照Vue的插件文档来写的，直接绑在原型链上不是不可以，如果像楼主你这样注册一个$http，和项目其他成员协作的时候就必须注明你注册的变量名称，而使用vue-axios大家就没有歧义了。)
说白了，使用vue-axios更多是为了符合规范，并且方便协作吧。

#### 3.前端开发时通过 Vue-cli 中提供的 proxyTable 进行代理,由此可跨域调用Node编写的API。
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
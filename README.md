### Flux 是什么？
[Flux](http://blog.andrewray.me/flux-for-stupid-people/)是一种数据处理流程规范，一种结构，一种套路。它不是非得与React绑定使用的，React只是负责组件如何组织，用原生方式组织控件也是可以的。

<img src="https://github.com/AndyFightting/flux_demo/blob/master/image2.png" width="50%" height="50%" />

![](https://github.com/AndyFightting/flux_demo/blob/master/sample.gif)

这个Demo是在React下使用Flux结构来处理数据流的，即点击按钮，处理数据，刷新组件这个流程。当然简单的组件处理这样的过程当然很简单，直接修改state属性就可以了，而使用Flux套路就不是直接面对面的处理state了，而是绕着弯来处理。它的套路大概是这样的：

```
ViewController 里添加Modal的回调监听，放置具体的View,View里的控件点击后回调到ViewController里相应具体方法，
在这方法里调用Action来给Dispatcher发消息，Dispatcher收到消息后处理Modal,Modal处理完后触发之前在ViewController
里设置的回调监听，然后在监听方法里刷新数据，更新组件。
```

### Reflux 是什么？
[Relfux](https://segmentfault.com/a/1190000002793786?utm_source=tuicool#articleHeader16) 是对flux流程的一种封装。省去了Dispatcher,只有Action，Modal,View。View要修改数据的话是通过调用Action来进行对Modal的修改，然后View监听Modal的变化刷新组件。

flux,Reflux 解决的是数据流程问题。如果像下面嵌套了很多层的话，中间会有很多prop仅仅只是为了传递数据，所以把 `操作`和`数据`部分给抽了出来。

<img src="https://github.com/AndyFightting/flux_demo/blob/master/image0.png" width="50%" height="50%" />

<img src="https://github.com/AndyFightting/flux_demo/blob/master/image1.png" width="50%" height="50%" />

这样要修改View的话只需要调用Action就可以了。


###运行Demo

1.下载下来后  cd 进入项目文件夹 flux_demo, 然后执行命令 `yarn install` ([yarn](https://yarnpkg.com/en/docs/install#mac)和npm一样是个包管理工具)

2.再执行命令`yarn start`就可以在浏览器看到Demo了

3.在index.js 里切换组件看不同的demo

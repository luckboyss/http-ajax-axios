# XMLHttpRequest的理解和使用

## 1. 文档

## 2. 理解
    使用XMLHttpRequest(XHR)对象可以与服务器交互, 也就是发送ajax请求
    前端可以获取到数据, 而无需让整个的页面刷新
    这使得Web页面可以只更新页面的局部, 而不影响用户的操作

## 3. 区别一般的HTTP请求与ajax请求
    ajax请求是一种特别的http请求
    对服务端来说, 没有任何区别, 区别在浏览器端
    浏览器端发请求: 只有XHR或fetch发出的才是ajax请求, 其他所有的都是非ajax请求
    浏览器端接收到响应
        一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面
        ajax请求: 浏览器不会对界面进行任何更新操作, 只是调用监视的回调函数并传入响应体相关数据

## 4. 使用语法
    XMLHttpRequest(): 创建XHR对象的构造函数
    status: 响应状态码值, 比如200, 404
    statusText: 响应状态文本
    readyState: 标识请求状态的只读属性
        0: 初始
        1: open()之后
        2: send()之后
        3: 请求中
        4: 请求完成
    onreadystatechange: 绑定readyState改变的监听
    responseType: 指定响应数据类型, 如果是'json', 得到响应后自动解析响应体数据
    response: 响应体数据, 类型取决与responseType的指定
    timeout: 指定请求操作时间, 默认为0代表没有限制
    ontimeout(): 绑定超时的监听
    onerror: 绑定请求网络错误的监听
    open(): 初始化一个请求, 参数为: (method, url[, async])
    send(data): 发送请求
    abort(): 中断请求
    getResponseHeader(name): 获取指定名称响应头值
    getAllResponseHeaders(): 获取所有响应头组成的字符串
    setRequestHeader(name, value): 设置请求头

## 5. XHR的简单封装
### 1). 特点
    函数的返回值为promise, 成功的结果为response, 异常的结果为error
    能处理多种类型的请求: GET/POST/PUT/DELETE
    函数的参数为另一个配置对象
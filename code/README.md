# http

## 1. MDN文档

## 2. 理解前后台请求交互的基本过程
    1). 前台应用从浏览器端向服务器发送HTTP请求(请求报文)
    2). 后台服务器接收到请求后, 调度服务器应用处理请求, 向浏览器端返回HTTP响应(响应报文)
    3). 浏览器端接收到响应, 解析显示响应体/调用监视回调

## 3. HTTP请求报文
    1). url: 可能带GET请求参数
    2). method: 请求方式
    3). headers: 多个请求体
      Host: www.baidu.com
      Cookie: BAIDUID=AD3B0FA706E; BAIDUPSID=AD380FA706
      Content-Type: aaplication/x-www-urlencoded
    4). body: 请求体

## 4. HTTP响应报文
    1). 响应状态码: 200/404
    2). 多个响应头: 
        Content-Type: text/html;charset=utf-8
        Set-Cookie: BI_CK_SAM=1;path=/
    3). 响应体: 
        html文本/json文本/js/css/图片...

## 5. POST请求体参数格式
    1). Content-Type: application/x-www-urlencoded;charset=utf-8
        用于键值对参数, 参数的键值对用=链接, 参数之间用&链接
        例如: name=%E5%B0%8F%E6%98%8E&age=12
    2). Content-Type: application/json;charset=utf-8
        用于json字符串参数
        例如: {"name": %E5%B0%8F%E6%98%8E, "age": 12}
    3). Content-Type: multipart/form-data
        用于文件上传

## 6. 响应状态码
    1). 文档
    2). 区间: 
        1** 信息, 服务器接收到请求, 需要请求者继续执行操作
        2** 成功, 操作被成功接收并处理
        3** 需要进一步的操作以完成请求
        4** 客户端错误, 请求包含语法错误或无法完成请求
        5** 服务器错误, 服务器在处理请求的过程中发生了错误
    3). 常见的几个:
        200 OK  请求成功, 一般用于GET与POST请求
        201 Created  已创建, 成功请求并创建了新的资源
        401 Unauthorized  未授权/ 请求要求用户的身份认证
        404 Not Found  服务器无法根据客户端的请求找到资源
        500 Internal Server Error  服务器内部错误, 无法完成请求

## 7. 不同类型的请求及其作用:
    1). GET: 从服务器端读取数据
    2). POST: 向服务器端添加新数据
    3). PUT: 更新服务器端已经存在的数据
    4). DELETE: 删除服务器端数据

## 8. API的分类
    1). RSET API:
        发送进行CRUD(增删改查)哪个操作有请求方式来决定
        同一个请求路径可以进行多个操作
        请求方式会用到GET/POST/PUT/DELETE 
    2). 非RSET API:
        请求方式不决定请求的CRUD操作
        一个请求路径只对应一个操作
        请求方式一般只有GET/POST

## 9. json-server
    用来快速搭建REST API的工具包
    Get a full fake REST API with zero coding in less than 30   seconds (seriously)

## 10. 使用json-server
    启动服务器
        执行命令: josn-server --watch db.json

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

# axios

## 1. 文档

## 2. 是什么
    前端最流行的ajax请求库

## 3. axios的特点
    基于promise的异步ajax请求库
    浏览器端/node端都可以使用
    支持请求/响应拦截
    支持请求取消
    请求/响应数据转换
    批量发送多个请求

## 4. axios常用语法
    axios(config): 通用/最本质的发送任意类型请求的方式
    axios(url[, config]): 可以指定url发get请求
    axios.request(config): 等同于axios(config)
    axios.get(url[, config]): 发get请求
    axios.delete(url[, config]): 发delete请求
    axios.post(url[, data, config]): 发post请求
    axios.put(url[, data, config]): 发put请求

    axios.default.xxx: 请求的默认全局配置
    axios.interceptors.request.use(): 添加请求拦截器
    axios.interceptors.response.use(): 添加响应拦截器
    axios.create([config]): 创建一个新的axios(它没有下面的功能)

    xiaos.Cancel(): 用于创建取消请求的错误对象
    axios.CanselToken(): 用于创建取消请求的token对象
    axios.isCancel(): 是否是一个取消请求的错误
    axios.all(promise): 用于批量执行多个异步请求
    axios.spread(): 用来指定接收所有成功数据都回调函数的方法

## 5. 难点语法理解与使用
    1). axios.create(config)
        a. 根据指定配置创建一个新的axios, 也就是每隔新axios都有自己的配置
        b. 新axios只是没有取消请求和批量请求的方法, 其他所有语法都是一致的
        c. 为什么要设计这个语法？
            需求: 项目中有部分接口需要的配置与另一部分接口需要的配置不太一样, 如何处理
            解决: 创建2个新axios, 每个都有自己特有的配置, 分别应用到不同要求的接口请求中

    2). 拦截器函数/axios请求/请求的回调函数的调用顺序
        a. 说明: 调用axios()并不是立即发送ajax请求, 而是需要经历一个较长的流程
        b. 流程: 请求拦截器2 => 请求拦截器1 => 发ajax请求 => 响应拦截器1 => 响应拦截器2 => 请求的回调
        c. 注意: 此流程是通过promise串联起来的, 请求拦截器传递的是config, 响应拦截器传递的是response
            错误流程控制与错误处理
    
    3). 取消请求
        a. 基本流程: 
            配置canselToken对象
            缓存用于取消请求的cancel函数
            在后面特定时机调用cancel函数取消请求
            在错误回调中判断如果error是cancel, 做相应处理
        b. 实现功能
            点击按钮, 取消某个正在请求中的请求
            在请求一口接口前, 取消前面一个未完成的请求

## 6. 项目中封装axios
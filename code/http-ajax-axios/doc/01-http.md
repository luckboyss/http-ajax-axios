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
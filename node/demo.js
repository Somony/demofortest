/**
 * @Author: Somon
 * @Date: 2017/3/27 17:39
 * @Description:
 */
"use strict";


var http = require("http");

//创建服务
var server = http.createServer(function (request, respond) {
    //有连接就执行
    console.log(request.url);

    //加入响应头
    respond.writeHeader(200, {
        "Content-Type": "text/html"
    });
    //加入响应体（只能是字符串）
    respond.write("<h1>haha</h1>");
    //结束
    respond.end();
});

//启动服务
server.listen(8080, function (error) {
    console.log("成功监听8080端口");
});



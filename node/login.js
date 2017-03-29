/**
 * @Author: Somon
 * @Date: 2017/3/28 9:46
 * @Description:
 */
"use strict";


var http = require("http");

//创建服务
var server = http.createServer(function (request, respond) {
    switch (request.url) {
        case "/signin":
            signin(request, respond);
            break;
        case "/post":
            post(request, respond);
            break;
        default:
            respond.writeHeader(404, {});
            respond.end();
            break;
    }
});

//启动服务
server.listen(8080, function (error) {
    console.log("成功监听8080端口");
});


function signin(request, respond) {
    respond.writeHeader(200, {"Content-Type": "text/html"});

    respond.write('<!DOCTYPE html>');
    respond.write('<html lang="en">');
    respond.write('<head>');
    respond.write('    <meta charset="UTF-8">');
    respond.write('    <meta http-equiv="X-UA-Compatible" content="IE=edge">');
    respond.write('    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">');
    respond.write('    <title>signin</title>');
    respond.write('');
    respond.write('</head>');
    respond.write('<body>');
    respond.write('<form action="/post" method="post">');
    respond.write('    <table border="1">');
    respond.write('        <tr>');
    respond.write('            <td>用户名：</td>');
    respond.write('            <td><input type="text" name="name"></td>');
    respond.write('        </tr>');
    respond.write('        <tr>');
    respond.write('            <td>密码：</td>');
    respond.write('            <td><input type="password" name="password"></td>');
    respond.write('        </tr>');
    respond.write('        <tr>');
    respond.write('            <td colspan="2"><input type="submit"></td>');
    respond.write('        </tr>');
    respond.write('    </table>');
    respond.write('</form>');
    respond.write('</body>');
    respond.write('</html>');

    respond.end();
}


var querystring = require('querystring');

function post(request, respond) {
    // console.log('表单提交');
    var postData = ''; // http传递的都是字符串
    request.on('data', function (part) {
        postData += part;
    });
    request.on('end', function () {
        // username=admin&password=admin
        var obj = querystring.parse(postData); // 将字符串转换为对象
        console.log(obj);
    });
    respond.end();
}




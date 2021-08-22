// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 변수를 선언합니다.
var items = [{
  name: '우유',
  price: '2000'
}, {
  name: '홍차',
  price: '5000'
}, {
  name: '커피',
  price: '5000'
}];

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(app.router);

// 라우트합니다.
app.all('/data.html', function(request,response) {
  var output = '';
  output += '<!DOCTYPE html>';
  output += '<html>';
  output += '<head>';
  output += '<title>Data HTML</title>';
  output += '</head>';
  output += '<body>';
  items.forEach(function (item) {
    output += '<div>';
    output += ' <h1>'+item.name+'</h1>';
    output += ' <h2>'+item.price+'</h2>';
    output += '</div>';
  });
  output += '</body>';
  output += '</html>';
  response.send(output);
});
app.all('/data.json', function(request,response) {

});
app.all('/data.xml', function(request,response) {

});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
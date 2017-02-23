var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');



http.createServer(function onRequest(reque,respo) {
    respo.writeHead(200,{'content-type':'text/plain'});
    respo.write(module2.myVariable);
    module2.myFunction();
    respo.end();

}).listen(38000);
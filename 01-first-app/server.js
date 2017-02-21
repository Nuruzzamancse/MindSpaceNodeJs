var http = require('http');

function onRequest(reque,respo) {
    respo.writeHead(200,{'content-type':'text/plain'});
    respo.write('Hello World');
    respo.end();

}

http.createServer(onRequest).listen(38000);
var http = require('http');
var fs   =require('fs');
var url = require('url');


function renderHTML(path,resonponse) {
    fs.readFile(path,null,function (error,data) {
        if(error){
            resonponse.writHead(404);
            resonponse.write('File Not Found.');
        }else{
            resonponse.write(data);
        }
        resonponse.end();

    });

}

module.exports={
    handleRequest: function (request,response) {
        response.writeHead(200,{'Context-Type':'text/html'});

        var path = url.parse(request.url).pathname;

        switch (path){
            case '/':
                renderHTML('./index.html',response);
                break;
            case '/login':
                renderHTML('./login.html',response);
                break;
            default:
                response.writeHead(404);
                response.write('Route Not Found.');
                response.end();
        }
        
    }
}
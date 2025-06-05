var http = require('http');

const server = http.createServer();

function onConnect(req, res){
    res.write('Hello World!'); //write a response to the client
    res.end();
}
server.on('request', onConnect);

server.listen(8090);
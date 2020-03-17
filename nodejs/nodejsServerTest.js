var http = require("http")

http.createServer(function (request , response){
	// send header of http 
	// http status value: 200 : ok
	response.writeHead(200,{'content-Type' : 'text/plain'})
	// send response message : 
	response.end('hello nodejs');
}).listen(8888);

console.log('server is running at 127.0.0.1:8888');
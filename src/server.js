import Hapi from 'hapi';

const server = new Hapi.Server();

var name = "rahul";

server.connection({
	port: 8080
});

server.route({
	method: 'GET',
	path: '/hello',

	handler: (request,reply)=>{
		reply(`hello world!`);
	}
});

server.start(err =>{
	if(err){
		console.log("Error was handled");
		console.log(err);
	}
	console.log(`server has started at ${server.info.uri}`);
});
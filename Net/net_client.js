const net = require('net');  
//use the same port as the one generated in net_server.js
const client = net.connect({port: 43559}, () => {  
  console.log('connected to server!');  
  client.write('world!\r\n');  
});  
client.on('data', (data) => {  
  console.log(data.toString());  
  client.end();  
});  
client.on('end', () => {  
  console.log('disconnected from server');  
});
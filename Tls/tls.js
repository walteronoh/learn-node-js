//TLS(Transport Layer Security) - Successor to SSL(Secure Sockets Layer). 
//TLS along with SSL is used for cryptographic protocols to secure communication over the web.
//TLS uses public-key cryptography to encrypt messages.
//In public-key cryptography, each client and each server has two keys: public key and private key.
//Public key is shared by everyone while private key is secured.

//Common OpenSSL Commands with Keys and Certificates
//https://gist.github.com/walteronoh/bdb0dfc1493faa5892a313446a6fe5b7

//require the tls module
const tls = require("tls");

//Properties and methods
// 1. connect() - Returns a socket object
let connect = tls.connect();

// 2. createSecureContext() - Creates an object containing security details
let css = tls.createSecureContext();

// 3. createServer() - Creates a server object
let create = tls.createServer();

// 4. getCiphers() - Returns an array containing the supported SSL ciphers.
let cipher=tls.getCiphers();
console.log("Supported SSL ciphers",cipher);
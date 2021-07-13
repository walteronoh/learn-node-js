//Node.js Crypto module supports cryptography.
//Provides cryptographic functionality that includes a set of wrappers for open SSL's:
//1. Hash - Fixed-length string of bits
//2. HMAC - Hash-based Message Authentication Code. A process for applying hash algorithm for both data and secret a secret key that results in a single final hash.

const crypto=require("crypto");

//Encryption using HMAC
//secret is the input data
const secret = "abcdefghijkl";
//choose any algorithm i.e sha256, sha512
//digest() generates digest of the given data. A short-fixed-length value derived from some input
const hash = crypto.createHmac("sha256",secret).digest('hex');
console.log("Encrypted key using HMAC: ",hash);

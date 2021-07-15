//Punycode is an encoding syntax which is used to convert unicode(utf-8) string of characters to basic ASCII string of characters

//If you search for 'mañana.com' in your browser (which is IDNA enabled), the browser will first convert this to punycode xn-maana-pta.com because the 'ñ' character is not allowed in regular domain name.

//Import the punycode module
const punycode = require("punycode");

//punycode.encode(string) is used to convert a string of Unicode symbols to punycode string of ASCII symbols
let encode = punycode.encode("mañana.com");
console.log("Punycode: ",encode)

//punycode.decode(string) is used to convert punycode string of ASCII symbols to a string of unicode symbols
let decode = punycode.decode(encode);
console.log("Unicode Symbol: ",decode)
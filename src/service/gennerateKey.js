var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(ciphertext);
console.log(originalText); // 'my message'
var CryptoJS = require("crypto-js");

var data = [{ id: 1 }, { id: 2 }]

// Encrypt
var ciphertextOJ = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertextOJ, 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log(ciphertextOJ)
console.log(decryptedData); // [{id: 1}, {id: 2}]
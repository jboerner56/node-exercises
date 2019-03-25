const cowsay = require('cowsay');
const sendhelp = require('./helper');
const message = sendhelp('random guy');
console.log('Hello puny humans');
console.log(message);

console.log(cowsay.think({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));
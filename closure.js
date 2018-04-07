"use strict";

function sayHello(name) {
	var text = "Hello " + name;
	return function() {
		console.log(text);
	}
}
// sayHello('Phat')();

var sayPhat = sayHello('Phat');
sayPhat(); // text refer to text in the sayHello function


// other case
var foo = [];
for(var i = 0; i < 10; i++) {
	foo[i] = function() { return i };
}

console.log(foo[0]()); // 10
console.log(foo[1]()); // 10
console.log(foo[2]()); // 10

// The reason for above beacause i in closure dont coppy of i 
// it reference the i so when for loop is exhaust it is 10

// so to get what we want we do
for(var i = 0; i < 10; i++) {
	// (function() {
	// 	var y = i;
	// 	foo[i] = function() { return y };
	// })();

	(function(y) {
		foo[y] = function() { return y };
	})(i);
	
}

console.log(foo[0]()); 
console.log(foo[1]()); 
console.log(foo[2]()); 
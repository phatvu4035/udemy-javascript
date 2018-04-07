// function is object in javascript
function a() {
	console.log(this);
}

console.log(a.name); // a name of function
a.moo = 1;
console.log(a.moo) // 1

console.log(a.toString()) // the code of function console.log(this);

// a.call() = a()

// in the strict mode
"use strict"
console.log(a()) // undefined there is no global(window) context

function sum(a,b,c) {
	var total = 0;
	for(var i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}


var a = function() { // function expression
	console.log(this);
}.bind(1);

var asim = {
	func: a
}

asim.func(); // 1

// You cant use bind function like this
function a() { // error this is because it is function decleration
	console.log(this);
}.bind(1);

// but this is ok
var a = function a() {
	console.log(this);
}.bind(1);
a();
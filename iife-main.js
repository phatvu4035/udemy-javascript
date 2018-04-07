"use strict";


// iife-main.js load before iife-other.js
var thing = {"hello": "main"};
console.log(thing);

// solve
function otherScope() {
	var thing = {"hello": "main"};
	console.log(thing);
}
otherScope();
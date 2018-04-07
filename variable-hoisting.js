"use strict";

console.log(a); // undefined not error
var a = 1;

// Here the reason
/*
* When javascript engine reading the code it split the "var a = 1" into
* var a; in the top of file
*/

// What about the function 
/*
* it split out and put the declaration of varibale in the top of function
*/
function foo() {
	var a;
	console.log(a);
	a = 1;
}

// Hoisting function
hoo();
function hoo() {
	var a;
	console.log(a);
	a = 1;
}

// it's like 
// function hoo() {
// 	var a;
// 	console.log(a);
// 	a = 1;
// }
// hoo();

// But
moo();
var moo = function() {
	var a;
	console.log(a);
	a = 1;
} 
// This not work beacause var moo; declare in the top of file so moo is undfined so
// can't call undefined
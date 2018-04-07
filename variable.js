
"use strict";
// Passing by value

// var a = 1;
// function foo(a) {
// 	a = 2;
// }
// foo(a);
// console.log(a); // 1


// passing by reference 
// var a = {};
// function foo(a) {
// 	a.moo= false;
// }
// foo(a);
// console.log(a); // {mood: false}

var a = {'moo': 'too'};
function foo(a) {
	a = {'too' : 'moo'};
}
foo(a);
console.log(a); // {'moo' : 'too'};
// => Cant change variable point to , only change property of that







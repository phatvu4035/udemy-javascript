"use strict";

function Person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;

	this.full_name = function() {
		return this.first_name + ' ' + this.last_name;
	};
}

var dude = new Person("asim", "hussain");
console.log(dude); 

var dude = {};
Person.call(dude, "asim", "hussain");
console.log(dude); // { this.first_name = first_name; this.last_name = last_name;}
console.log(dude.full_name());

// dude.prototype point to Person prototype object



// 2nd way
function Person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;

	this.full_name = function() {
		return this.first_name + ' ' + this.last_name;
	};
}

Person.prototype.full_name_prototype = function() {
	return this.first_name + ' ' + this.last_name;
}
var dude = new Person("asim", "hussain");
console.log(dude.full_name_prototype());  // 

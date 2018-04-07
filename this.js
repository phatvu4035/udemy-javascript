

var asim = {
	checkThis: function() {
		console.log(this);

		function checkOther() {
			this.moo = 1; // global context
			console.log(this);
		}

		console.log(this.moo);
		checkOther();
	}
}


// 2nd case
asim.checkThis(); // 1st asim object 2nd : window object, this.moo: undefined

var asim = {
	checkThis: function() {
		"use strict"; // prevent this to be global context
		console.log(this);

		// solution : var self = this;

		function checkOther() {
			this.moo = 1; // undefined this: undefined
			console.log(this); // undefined
		}

		console.log(this.moo);
		checkOther();
	}
}

asim.checkThis(); // 1st asim object 2nd : window object, this.moo: undefined
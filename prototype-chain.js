var animal = {
	kind: "human"
}
console.log(animal);

var asim = {};
asim.__proto__ = animal;
console.log(asim.kind); // human

asim.kind = "igloo";
console.log(asim.kind); // igloo
console.log(animal.kind); // human

var asim = Object.create(animal, {foo: {value: "mango"}}); // = asim.__proto__ = animal;

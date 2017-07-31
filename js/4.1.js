//var person = new Object();
//person.name = "Nicholas";
//console.log(person.name); 
//var person1 = person;
//person1.age = "24";
//console.log(person.age);

//function setName(obj) {
////	obj = new Object();
//	obj.name = "Nicholas";
//	var obj = new Object();
//	obj.name = "Greg";
//	console.log(obj.age);
//	console.log(obj.name);
//}
//var person = new Object();
//person.age = "24";
//setName(person);
//console.log(person.name);
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
var f = function(){
	console.log("this is a function");
}
var a = new Array;
console.log(typeof s); //string
console.log(s instanceof String);
console.log(typeof i); //number
console.log(typeof b); //boolean
console.log(typeof u); //undefined
console.log(typeof n); //object
console.log(typeof o); //object
console.log(typeof f); //function
console.log(f instanceof Function);
console.log(typeof a);
console.log(a instanceof Array);


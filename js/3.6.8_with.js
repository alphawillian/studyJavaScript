var human = {
	"name":"william",
	"age":"24",
	"gender":"male"
}
var name1 = "";
var age1 = "";
var gender1 = "";
//name1 = human.name;
//age1 = human.age;
//gender1 = human.gender;

var name = "";
var age = "";
var gender = "";
with(human){
	name1 = name;
	age1 = age;
	gender1 = gender;
}
console.log(name1,age1,gender1);

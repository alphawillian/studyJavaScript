//	sort(compareCanonically);sort里面的compareCanonically返回值是1,则交换a,b; 返回值为 -1,0时,不交换a,b;


function ascending(arr){
	return arr.sort(compareCanonically);
}
function deAscending(arr){
	return arr.sort(compareCanonically).reverse();
}
function compareCanonically(a,b){
	return a < b ? -1 : 1;
}
var arr = [1,3,5,7,9,2,4,6,8,0,11];
//console.log(ascending(arr));
//console.log(deAscending(arr));
//console.log(arr);
Array.prototype.ascending = function(){
	return this.sort(compareCanonically);
}
Array.prototype.deAscending = function(){
//	return this.sort(-1);
}
console.log(ascending(arr));
console.log(deAscending(arr));
//arr.ascending();
//console.log(arr);
//arr.deAscending();
//console.log(arr);



//	sort(compareCanonically);sort里面的compareCanonically返回值是1,则交换a,b; 返回值为 -1,0时,不交换a,b;


function ascending(arr){
	return arr.sort(compareCanonically);
}
function deAscending(arr){
	return arr.sort(compareCanonically).reverse();
}
function compareCanonically(a,b){
	return a <= b ? 0 : 1;
}
var arr = [1,3,5,7,9,2,4,6,8,0];
//console.log(ascending(arr));
//console.log(deAscending(arr));
//console.log(arr);
Array.prototype.asc = function(){
	return this.sort(compareCanonically);
}
arr.asc();
console.log(arr);



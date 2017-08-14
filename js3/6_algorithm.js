//多维数值初始化失败( ´︵` )








Array.prototype.init = function(){
	var len = this.length;
	for(var i = 0; i < len; i++){
		this[i] = 0;
	}
}

var arr = ["10","0001","1111001","1","0"];
var m = 5;
var n = 3;
var arr0 = 0
var arr1 = [arr0,arr0,arr0];
var arr2 = [arr1,arr1];
var arr3 = [arr2,arr2];
console.log(arr3);
dimensionsArrInit(2,2,3);

function dimensionsArrInit(){
	var dimensions = arguments.length;
//	var arr = new Array(dimensions);
	var arr = new Array();
//	primaryArr = new Array(arguments[dimensions-1]);
//	primaryArr.init();
//	console.log(primaryArr);
//	console.log(arguments);
//	console.log(arguments[0]);
	arr[0] = 0;
	for(var i = dimensions; i > 0; i--){
		arr[i] = new Array(arguments[dimensions - i]);
		arr[i].init();
//		if(i = 1){
//			arr[0] = 0;
//		}
		for(var j = 0; j < arguments[dimensions - i]; j++){
			arr[i][j] = arr[i-1];
//			console.log(arr[i-1]);
		}
	}
	console.log(arr);
}
function foo(n){
	if(n = 0){
		return 0;
	}
	return 0;
}

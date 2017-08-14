//多维数值初始化失败( ´︵` )








Array.prototype.init = function(){
	var len = this.length;
	for(var i = 0; i < len; i++){
		this[i] = 0;
	}
}
Array.prototype.dimensionsArrInit = function(){
//	return this;
	var arr = this;
	var currentLen = arr[0];
	var ansArr = new Array(arr[0]);
	ansArr.init();
	if(arr.length == 1){
		return ansArr;
	}else{
		arr.shift();
		for (var i = 0; i < currentLen; i++) {
			if(i == 0){
				ansArr[i] = arr.dimensionsArrInit();
			}else{
				ansArr[i] = ansArr[i - 1];
			}
		}
		return ansArr;
	}
}

function dimensionsArrInit1(){
	var arr = arguments[0];
	var currentLen = arr[0];
	var ansArr = new Array(arr[0]);
	ansArr.init();
	if(arr.length == 1){
		return ansArr;
	}else{
		arr.shift();
		for (var i = 0; i < currentLen; i++) {
			if(i == 0){
				ansArr[i] = dimensionsArrInit1(arr);
			}else{
				ansArr[i] = ansArr[i - 1];
			}
		}
		return ansArr;
	}
}
var test = [4,2,2,3];
console.log(test.dimensionsArrInit());
//console.log(dimensionsArrInit1([2,2,3]));


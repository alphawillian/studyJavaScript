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
		return ansArr.slice(0);
	}else{
		arr.shift();
		for (var i = 0; i < currentLen; i++) {
			if(i == 0){
				ansArr[i] = arr.dimensionsArrInit().slice(0);
			}else{
				ansArr[i] = ansArr[i - 1].slice(0).slice(0);
			}
		}
		return ansArr.slice(0);
	}
}

function dimensionsArrInit1(){
	var arr = arguments[0];
	var currentLen = arr[0];
	var ansArr = new Array(arr[0]);
	console.log(ansArr);
	ansArr.init();
	if(arr.length == 1){
		return ansArr;
	}else{
		arr.shift();
		for (var i = 0; i < currentLen; i++) {
			if(i == 0){
				ansArr[i] = dimensionsArrInit1(arr).slice(0);
			}else{
				ansArr[i] = ansArr[i - 1].slice(0);
			}
		}
		return ansArr;
	}
}
var test = [2,2,2];
var test1 = test.dimensionsArrInit();
console.log(test);
test1[0][0][1] = 1;
test1[0][1][1] = 2;
console.log(test1);
//console.log(dimensionsArrInit1([2,2,3]));


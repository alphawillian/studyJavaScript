Array.prototype.init = function(){
	var len = this.length;
	for(var i = 0; i < len; i++){
		this[i] = 0;
	}
}

Array.matrix = function(numrows, numcols, inital){
	var arr = [];
	for (var i = 0; i < numrows; i++){
		var columns = [];
		for (var j = 0; j < numcols; j++){
			columns[j] = inital;
		}
		arr[i] = columns;
	}
	return arr;
}
var arr1 = Array.matrix(3, 3, 1);
arr1[1][1] = 2; 
//console.log(arr1);

function dimensionsArr(){
	var dimensions = arguments.length;
	var ansArr = new Array(arguments[0]);
	ansArr.init();
	if(dimensions === 1){
		return ansArr;
	}else{
		var nextArr = [];
		for (var i = 1; i < dimensions; i++){
			nextArr.push(arguments[i]);
		}
		for (var j = 0; j < arguments[0]; j++){
			ansArr[j] = dimensionsArr(...nextArr).slice(0);
		}
		return ansArr;
	}
}
var newArr = dimensionsArr(2,2,3);
newArr[0][0][0] = 1;
newArr[0][0][1] = 2;
newArr[0][1][1] = 3;
newArr[1][0][1] = 4;
newArr[1][1][1] = 5;
console.log(newArr);

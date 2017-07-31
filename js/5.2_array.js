//var num = [1,2,3];
//num.unshift([11,22,33]);
//num.unshift("red","blue");
//console.log(num);
//num.shift(2);
//console.log(num);
//function compare(value1, value2) {
//	if (value1 < value2) {
//		return -1;
//	} else if (value1 > value2) {
//		return 1;
//	} else {
//		return 0;
//	}
//}

function compare(value1, value2){//这种两个数值相减 value1-value2 就是升序，反之是降序
    return value2 - value1;
}
var values = [0, 1, 5, 10, 15,3];
values.sort(compare);
console.log(values); //0,1,5,10,15
console.log(0.57*100);

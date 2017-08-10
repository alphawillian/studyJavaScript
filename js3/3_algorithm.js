//题目描述 
//
//	假设你有一群孩子和一些饼干，每一块饼干j大小为s(j)，同时每一个孩子i，被分到的饼干大小至少为g(i)，即s(j)>=g(i)时，这个孩子才会满足，g(i)成为孩子i的满足度。你的目标是将饼干分配给孩子，使得到满足的孩子尽可能多。保证每个g(i)为正且不能将多块饼干分给一个孩子或将一块饼干分给多个孩子。
//
//输出样例 
//	样例1:
//		输入:  [1,2,3], [1,1]
//		输出: 1
//		说明: 三个孩子的满足度分别为1,2,3，两块饼干的大小均为1。饼干的大小为1，只能满足第一个孩子，所以输出1。
//	样例2: 
//		输入: [1,2],  [1,2,3]
//		输出: 2
//		说明: 两个孩子的满足度分别为1,2，三块饼干的大小分别为1,2,3。这三块饼干的大小足以满足这两个孩子，所以输出2。

var maxSatisfied = 0;
var maxSatisfied1 = 0;
var childArray = [1,2];
var cookieArry = [1,2,3];
var childArry1 = [1,2,3];
var cookieArry1 = [1,1];
function compareCanonically(a,b){
	return a < b ? -1 : (a > b ? 1 : 0);
}
function findMaxSatisfied(childArray,cookieArray){
	childArray = childArray.sort(compareCanonically);
	cookieArray = cookieArray.sort(compareCanonically);
	for(var i = 0,j = 0; j < cookieArray.length; j++){
		if(childArray[i] <= cookieArray[j]){
			i++;
		}
		j++;
	}
	return i;
}
maxSatisfied = findMaxSatisfied(childArray,cookieArry);
maxSatisfied1 = findMaxSatisfied(childArry1,cookieArry1);
console.log(maxSatisfied);
console.log(maxSatisfied1);


var max = function(childArray,cookieArray){
	childArray = childArray.sort(compareCanonically);
	cookieArray = cookieArray.sort(compareCanonically);
	for(var i = 0,j = 0; j < cookieArray.length; j++){
		if(childArray[i] <= cookieArray[j]){
			i++;
		}
		j++;
	}
	return i;
}
console.log(max(childArray,cookieArry));


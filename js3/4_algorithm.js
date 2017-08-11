//题目描述:
//	给你一个二维网格，每个格子是房子 1 或者空地 0。找到一个空地修建一个办公室，使得这个办公室到所有的房子的距离之和最小。 返回最小的距离和。如果无法修建，那么返回 -1.
//
//样例:
//	0 1 0 0
//	1 0 1 1
//	0 1 0 0
//返回:
//	6
//
//算法分析:
//	1. 因为这个题目要求无解的时候返回 -1 ，那么我们就先想一下无解的情况。
//	
//	(1)网格不存在，即行数为0或者列数为0；
//	(2)网格存在，但是没有地方修，也就是没有空地。
//	
//	2. 题目是要求所有的房子到某一空地的最小曼哈顿距离和，那我们就有一个朴素的想法，直接枚举所有的空地，求出所有的房子到该空地的曼哈顿距离和，从这些距离和中选取最小的一个即可。
//		(ps：曼哈顿距离：dis=|x2-x1|+|y2-y1|)
//	
//	伪代码:
//	ans = Max;
//	for (var i = 0; i < row; i++) {
//		for(var j = 0; j < column; j++){
//			if((i,j)==0){
//				sum_distance = 所有房子到该空地的距离和;
//				ans = min(ans,sum_distance);
//			}
//		}
//	}
//	
//	接下来改进这个朴素的算法.
//	
//	3.观察上述伪代码，显然求所有的房子到某一点的曼哈顿距离和是可以通过预处理实现O(1)询问的。
//	
//	这里就要先提到有关曼哈顿距离的一个常用技巧了：将曼哈顿距离拆分成 X 轴距离与 Y 轴距离。
//	设两个点：(x1,y1)、(x2,y2)
//	曼哈顿距离：dis=|x2-x1|+|y2-y1|
//	
//	根据上面这个式子，我们就可以把求两个点的曼哈顿距离拆分成求两个点在 X 轴上的距离与求两个点在 Y 轴上的距离。
//	
//	4. 我们现在以对 X 轴距离做预处理为例进行讲解。
//	
//	我们先预处理出一个rowSum数组，rowSum[i]记录第 i 行一共有几个房子。
//	那么对于一个点(i,j)，从第 0 。。。i 行的所有房子到该点的 X 轴距离和即等同于从第0。。。i 行的所有房子到第 i 行的 X 轴距离和。
//	
//	用prefixSum1[i]表示从第0。。。i 行的所有房子到第 i 行的一共有多少房子；
//	用prefixSum2[i]表示从第0。。。i 行的所有房子到第 i 行的X 轴距离和，即得到下式：
//	
//	prefixSum1[i] = rowSum[0] + rowSum[1] +...+ rowSum[i - 1] + rowSum[i];
//				  = prefixSum[i - 1] + rowSum[i];
//				  
//  prefixSum2[i] = rowSum[0] * i + rowSum[1] * (i - 1) +...+ rowSum[i - 1] * 1 + row[i] * 0;
//  			  = rowSum[0] * (i-1) + rowSum[1] * (i-1-1) +...+ rowSum[i-1] * 0 + 
//  			    rowSum[0] + rowSum[1] + ... + rowSum[i-1];
//  			  = prefixSum2[i - 1] + prefixSum1[i - 1];
//  			  
//	根据推导的式子，prefixsum1与prefixsum2都可以通过O(row)的预处理得到。
//	
//	这样我们就得到了从第0。。。i 行的所有房子到第 i 行的 X 轴距离和。
//	
//	同理，还可以通过 O(row) 的预处理得到从第 i 。。。n - 1 行的所有房子到第 i 行的 X 轴距离和。将以上的两个预处理的值相加，即可得到：所有的房子到第 i 行的距离和，将其记为ansRow[i]。综上，我们就可以通过O(row)的预处理得到所有房子到某一 行的距离和，并记录在ansRow[] 数组里。
//
//	5. 通过与第四点相同的思路，我们可以通过一个O(column)的预处理得到所有房子到某一列的距离和，并记录在ansColumn[] 数组里。
//	
//	于是，所有房子到某一点(i,j)的曼哈顿距离和即为：ansRow[i] + ansColumn[j]。
//	代码的总体复杂度就下降到了O(row*column)。

//  javaSrcipt高级程序设计3版第4章不懂

Array.prototype.init = function(){
	var len = this.length;
	for(var i = 0; i < len; i++){
		this[i] = 0;
	}
}

var row1 = [0,1,0,0];
var row2 = [1,0,1,1];
var row3 = [0,1,0,0];
var grid = [row1,row2,row3];
console.log(findShortDistance(grid));
//var findShortDistance = function(grid){
function findShortDistance(grid){
	var row = grid.length;
	var column = grid[0].length;
	if(row == 0 || column == 0 || !haveZero(grid,row,column)){
		return -1;
	}
	//init rowSum columnSum
	var rowSum = new Array(row);
	var columnSum = new Array(column);
	rowSum.init();
	columnSum.init();
	for (var i = 0; i < row; i++) {
		for(var j = 0; j < column; j++){
			if(grid[i][j] == 1){
				rowSum[i]++;
				columnSum[j]++;
			}
		}
	}
	
	
	var ansRow = new Array(row);
	var ansColumn = new Array(column);
	ansRow.init();
	ansColumn.init();
	console.log(ansRow);
	console.log(ansColumn);
	getSumDistance(rowSum,row,ansRow);
	getSumDistance(columnSum,column,ansColumn);
	console.log(ansRow);
	console.log(ansColumn);
	
	var ans = Number.MAX_VALUE;
	for (var i = 0; i < row; i++) {
		for(var j = 0; j < column; j++){
			if(grid[i][j]==0 && ans > ansRow[i] + ansColumn[j]){
				ans = ansRow[i] + ansColumn[j];
			}
		}
	}
	return ans;
	
	function getSumDistance(a, n, finalArr){
		var prefixSum1 = new Array(n);
		var prefixSum2 = new Array(n);
		prefixSum1.init();
		prefixSum2.init();
		
		prefixSum1[0] = a[0];
		for (var i = 1; i < n; i++) {
			prefixSum1[i] = prefixSum1[i - 1] + a[i];
		}
		prefixSum2[0] = 0;
		for(var i = 1; i < n; i++) {
			prefixSum2[i] = prefixSum2[i - 1] + prefixSum1[i - 1];
		}
		for (var i = 0; i < n; i++){
			finalArr[i] = prefixSum2[i];
		}
		
		prefixSum1[n - 1] = a[n - 1];
		for (var i = n - 2; i >= 0; i--) {
			prefixSum1[i] = prefixSum1[i + 1] + a[i];
		}
		prefixSum2[n - 1] = 0;
		for(var i = n -2; i >= 0; i--){
			prefixSum2[i] = prefixSum2[i + 1] + prefixSum1[i + 1];
		}
		for(var i = 0; i < n; i++){
			finalArr[i] += prefixSum2[i];
		}
	}
	
}

function haveZero(grid,row,column){
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < column; j++){
			if(grid[i][j]==0){
				return true;
			}
		}
	}
	return false;
}











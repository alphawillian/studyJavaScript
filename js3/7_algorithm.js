Array.prototype.init = function(){
	var len = this.length;
	for(var i = 0; i < len; i++){
		this[i] = 0;
	}
}
Array.prototype.dimensionsArrInit = function(){
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
var arr = ["10","0001","111001","1","0"];
var m = 5;
var n = 3;

function count(str){
	var cost = [0,0];
	for (var i = 0; i < str.length; i++) {
		cost[str.charAt(i) - "0"]++; 
	}
	return cost;
}
function findMaxForms(arr, m, n){
//	var dp = [arr.length+1, m+1, n+1];
//	dp = dp.dimensionsArrInit();
    var dp = [[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
			[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
		    [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
		    [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
		    [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
		    [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]];
	
	for (var i = 1; i <= arr.length; i++){
		var cost = count(arr[i - 1]);
		for (var j = 0; j <= m; j++){
			for (var k = 0; k <= n; k++){
				if(j >= cost[0] && k >= cost[1]){
					dp[i][j][k] = Math.max(dp[i - 1][j][k],dp[i - 1][j - cost[0]][k - cost[1]] + 1);
//					console.log(dp[i][j][k]);
				}else{
					dp[i][j][k] = dp[i - 1][j][k];
				}
			}
		}
	}
	return dp[arr.length][m][n];
//	return dp;
}
console.log( findMaxForms(arr,m,n) );

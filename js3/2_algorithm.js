//样 例
//	输入：数列nums=[1,1,1,1,1]，S=3 
//	输出：5
//	解释：有5种可令这些整数赋予新符号后和为期望值3的组合。
//	
//	-1+1+1+1+1 = 3
//	+1-1+1+1+1 = 3
//	+1+1-1+1+1 = 3
//	+1+1+1-1+1 = 3
//	+1+1+1+1-1 = 3
//	
//数据范围
//	1.数组长度为正数并不超过20
//	2.数组中所有整数的和不超过1000
//	3.输出的答案不会超过32位整数（2,147,483,647）
//
//解题思路
//	DFS解法：
//		1:解这道题最直白的思路就是直接搜索，穷举每一种情况。但是可以看到这种搜索的时间复杂度到达O(2^n)，是不可取的指数级。我们思考有没有办法可以“剪枝”，也就是在搜索到最后一个数之前就判断这条路是否可行。若不可行则直接return，减少递归次数。
//		2:因为数列被限定均为非负整数，所以全赋+号和全赋-号分别是这个数列能组合得到的最大值和最小值。我们不妨将全赋+号得到的和记为sum，那么需要有-sum<=S<=sum，否则肯定是没有办法用数列中的数组成S的，答案便是0。
//		3:这个边界判断还是比较容易想到的，套用这个思路，在搜索的过程中，如果当前搜索过的数字的和加上右边所有还没有被搜索到的数还小于S，或者减去右边所有的数还大于S，那自然这条路是走不通的，可以被剪枝。
//		4:从编程的角度考虑，我们可以建立一个数组s，s[i]代表数列中第i个数右边所有数的和。这个数组的建立只需要从后至前扫描原数列，需要O(n)时间。搜索过程中我们每一次搜索都要进行上述的比对，进行剪枝。
//		5:这样剪枝的话，如果期望值S是一个比较大的正数（越接近sum优化效果越好），那么向负号方向的搜索就会比较快的被终止。如果期望值是一个负数是同理的。依据上述分析，对于大多数数据，这个剪枝还是有较好的优化效果的，但对于某些极端数据优化效果较差。
//	
//	DP解法：
//		1:DFS解法即使经过优化，时间复杂度的级别还是下不来。我们观察这个问题能不能通过解决子问题来求解，从而用DP的思路求解。我们先去掉数列中的最后一个数，考虑能不能用前n-1个数的计算结果来推出所有n个数的计算结果。
//		2:我们用dp[n-1,e]来表示数列中只有n-1个数、题目期望值为e时输出的答案。那么我们真正需要的答案用这个方法表示自然就是dp[n,S]了。因为第n个数的符号非正即负只有两种状态，所以dp[n,S]=dp[n-1,S-an]+dp[n-1,S+an]。这个方程还是比较容易想到的。
//		3:用样例来说明，第五个数为1，那么只有前四个数和为4（第五个数符号为+）或者6（第五个数符号为-）的时候可以得到期望值。即我们需要的就是前4个数有多少种组合可以令和为4或者为6的，并让他们相加。
//		4:不仅我们成功地将问题分解为了子问题，顺带连状态转移方程也一同得到了。那么我们用两层循环即可完成这个DP。DP的初始状态为只有一个数的时候，我们让dp[1,a1]和dp[1,-a1]均为1即可（额外注意当a1=0时为特殊情况，应令dp[1,0]=2）。
//		5:这里我们就发现了一个问题，我们刚刚思路中用的dp的第二个下标是可以为负数的，范围为[-sum,sum]（排除掉S>sum和S<-sum这两种已知无解的情况）。然而我们程序中数组的下标是从0开始的，所以我们把这个下标的值都加上一个sum，让它的范围变成[0,2*sum]，方便我们编程。此外记得注意数组下标的边界检查。

var nums = [1,1,1,1,1];
var s = 3;
var dfsAnswer = findTargetSubWays_dfs(nums,s);
var dpAnswer = findTargetSumWays_dp(nums,s);
console.log(dfsAnswer);
console.log(dpAnswer);
//findTargetSumWays_dp(nums,s);
//findTargetSubWays_dfs(nums,s);
function findTargetSumWays_dp(nums,s){
	var sum = 0;
	var doubleSum = 0;
	
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	if(sum < Math.abs(s)){
		return 0;
	}
	doubleSum = sum << 1;
	
	// init for dp
	//把dp里的每一个值都赋值为0，否则下面计算赋值的时候会出现NaN
	var dp = new Array(nums.length);
	for(var j = 0; j < dp.length; j++){
		dp[j] = new Array(doubleSum + 1);
		for(var k = 0; k < dp[j].length; k++){
			dp[j][k] = 0;
		}
	}
	//当num[0] == 0的时候 +0，-0 所以dp[0][sum] = 2;
	if(nums[0] == 0){
		dp[0][sum] = 2;
	}else{
		dp[0][sum - nums[0]] = 1;
		dp[0][sum + nums[0]] = 1;
	}
	//dp
	for (var n = 1; n < nums.length; n++) {
		for(var m = 0; m <= doubleSum; m++){
			if(m -  nums[n] >= 0){
				dp[n][m] += dp[n-1][m-nums[n]];
			}
			if(m + nums[n] <= doubleSum){
				dp[n][m] += dp[n-1][m+nums[n]];
			}
		}
	}
	return (dp[nums.length-1][s+sum]);
}
function findTargetSubWays_dfs(nums,S){
	var answer = 0;
	var s = new Array(nums.length);
	for (var i = 0; i < s.length; i++) {
		s[i] = 0;
	}
	s[nums.length -1] = nums[nums.length - 1];
	for(var i = nums.length - 2; i >= 0; i--){
		s[i] = s[i + 1] + nums[i];
	}
	dfsHelper(nums, S, 0, 0, s);
	return answer;
	
	function dfsHelper(nums, S, index, currSum, s){
		if(index == nums.length){
			if(currSum == S){
				answer++;
			}
		}else if(Math.abs(S - currSum) <= s[index]){
			dfsHelper(nums, S, index + 1, currSum + nums[index], s);
			dfsHelper(nums, S, index + 1, currSum - nums[index], s);
		}
	}
	
}


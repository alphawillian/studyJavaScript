Array.prototype.init = function(){
	var len = this.length;
	for(var i = 0; i < len; i++){
		this[i] = 0;
	}
}

var arr = [1,3,2];
function find132pattern(nums){
	if(nums == null || nums.length < 3){
		return false;
	}
	var minArr = new Array(nums.length);
	minArr = nums[0];
	for (var i = 0; i < nums.length; i++) {
		minArr[i] = Math.min(nums[i - 1],min[i - 1]);
	}
	
}
